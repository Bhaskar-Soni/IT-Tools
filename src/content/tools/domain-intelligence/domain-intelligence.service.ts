/**
 * Domain Intelligence Service
 * Gathers DNS, registration, certificate transparency, and IP enrichment data for a domain.
 */

import { query } from 'dns-query';

const DNS_RECORD_TYPES = ['A', 'AAAA', 'CNAME', 'MX', 'NS', 'TXT', 'SOA', 'CAA', 'SRV', 'DS', 'DNSKEY'] as const;
type DnsRecordType = (typeof DNS_RECORD_TYPES)[number];
const MAX_CERTIFICATE_ITEMS = 80;
const CERT_SPOTTER_MAX_PAGES = 8;
const DNS_BRUTE_CONCURRENCY = 16;
const MAX_SUBDOMAIN_RESULTS = 2000;
const SECOND_LEVEL_SEED_LIMIT = 120;
const MAX_CANDIDATES = 1000;
const FETCH_TIMEOUT_MS = 9000;
const DNS_QUERY_TIMEOUT_MS = 3500;
const SUBDOMAIN_WORDLIST = [
  'www', 'mail', 'webmail', 'smtp', 'imap', 'pop', 'autodiscover', 'mta-sts', 'selector1', 'selector2',
  'api', 'dev', 'test', 'stage', 'staging', 'prod', 'beta', 'admin', 'portal', 'dashboard', 'app',
  'cdn', 'static', 'assets', 'img', 'media', 'files', 'download', 'uploads', 'docs', 'help', 'support',
  'blog', 'status', 'shop', 'store', 'auth', 'login', 'sso', 'vpn', 'remote', 'git', 'gitlab', 'github',
  'jenkins', 'ci', 'monitor', 'grafana', 'kibana', 'db', 'mysql', 'postgres', 'redis', 'search', 'ns1',
  'ns2', 'mx', 'mx1', 'mx2', 'cpanel', 'whm', 'www2', 'www3', 'ns', 'mail1', 'mail2', 'smtp1', 'smtp2',
  'devops', 'ops', 'api-dev', 'api-test', 'api-staging', 'uat', 'qa', 'demo', 'sandbox', 'preview',
  'billing', 'intranet', 'extranet', 'office', 'corp', 'internal', 'gateway', 'gw', 'edge', 'proxy',
  'ftp', 'sftp', 'ssh', 'vpn1', 'vpn2', 'owa', 'exchange', 'calendar', 'meet', 'chat', 'teams',
  'jira', 'confluence', 'wiki', 'kb', 'knowledge', 'ticket', 'service', 'services', 'microservice',
  'mobile', 'm', 'android', 'ios', 'cdn1', 'cdn2', 'cache', 'origin', 'img1', 'img2', 'media1', 'media2',
  'backup', 'old', 'legacy', 'new', 'v1', 'v2', 'v3', 'api1', 'api2', 'api3', 'db1', 'db2', 'sql',
  'mongo', 'elastic', 'es', 'kafka', 'rabbitmq', 'queue', 'stream', 'metrics', 'logs', 'siem',
  'security', 'waf', 'firewall', 'bastion', 'jump', 'ldap', 'idp', 'saml', 'oauth', 'authz', 'signin',
  'signup', 'payments', 'pay', 'checkout', 'wallet', 'crm', 'erp', 'hr', 'finance', 'bi', 'data',
  'warehouse', 'dw', 'etl', 'ai', 'ml', 'notebook', 'admin-api', 'public-api', 'private-api',
  'devtools', 'tooling', 'containers', 'k8s', 'kubernetes', 'helm', 'argocd', 'rancher',
];
const SECOND_LEVEL_PREFIXES = ['dev', 'test', 'stage', 'staging', 'beta', 'api', 'admin', 'cdn', 'assets', 'internal', 'vpn'];

type MaybeArray<T> = T | T[] | undefined;

export interface DomainLink {
  label: string
  url: string
}

export interface RdapInfo {
  handle?: string
  ldhName?: string
  unicodeName?: string
  status: string[]
  registrar?: string
  createdAt?: string
  updatedAt?: string
  expiresAt?: string
  nameservers: string[]
  events: Array<{ action: string; date?: string }>
}

export interface IpInfo {
  ip: string
  hostname?: string
  city?: string
  region?: string
  country?: string
  postal?: string
  loc?: string
  org?: string
  timezone?: string
}

export interface CertificateInfo {
  commonName: string
  issuerName?: string
  notBefore?: string
  notAfter?: string
  entryTimestamp?: string
  dnsNames?: string[]
  fingerprintSha256?: string
}

export interface DomainIntelligenceResult {
  overview: {
    input: string
    normalized: string
    asciiDomain: string
    unicodeDomain: string
    tld: string
    labels: number
    hasSubdomain: boolean
  }
  dnsRecords: Record<DnsRecordType, string[]>
  security: {
    spf: string[]
    dmarc: string[]
    bimi: string[]
    mtaSts: string[]
    tlsRpt: string[]
    dnssecEnabled: boolean
  }
  derived: {
    mxHosts: string[]
    nsHosts: string[]
    mxProviderHints: string[]
    nsProviderHints: string[]
  }
  rdap?: RdapInfo
  ipInfo?: IpInfo
  certificates: CertificateInfo[]
  discoveredSubdomains: string[]
  certificateSource?: string
  links: DomainLink[]
  warnings: string[]
}

const DEFAULT_DOH_ENDPOINTS = [
  'https://cloudflare-dns.com/dns-query',
  'https://dns.google/dns-query',
];

function normalizeDomain(input: string) {
  let candidate = input.trim();

  // If a full URL is pasted, extract hostname.
  if (/^https?:\/\//i.test(candidate)) {
    try {
      candidate = new URL(candidate).hostname;
    }
    catch {
      // Continue with raw value.
    }
  }

  candidate = candidate
    .replace(/^\*\./, '')
    .split(/[/?#]/)[0]
    .replace(/:\d+$/, '')
    .replace(/^\.+|\.+$/g, '')
    .toLowerCase();

  return candidate;
}

function isLikelyDomain(value: string) {
  if (value.length < 3 || value.length > 253) {
    return false;
  }

  if (!value.includes('.')) {
    return false;
  }

  return value
    .split('.')
    .every(label => /^[a-z0-9-]+$/i.test(label) && label.length > 0 && label.length < 64 && !label.startsWith('-') && !label.endsWith('-'));
}

function asArray<T>(value: MaybeArray<T>): T[] {
  if (value == null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

function uniq(values: string[]) {
  return Array.from(new Set(values.filter(Boolean)));
}

function toAsciiDomain(domain: string) {
  try {
    return new URL(`https://${domain}`).hostname.toLowerCase();
  }
  catch {
    return domain.toLowerCase();
  }
}

function toUnicodeDomain(domain: string) {
  // Keep user-facing unicode when available; avoid extra runtime/type dependency.
  return domain;
}

function toBaseDomain(hostname: string) {
  const labels = hostname
    .toLowerCase()
    .trim()
    .replace(/\.$/, '')
    .split('.')
    .filter(Boolean);

  if (labels.length < 2) {
    return hostname;
  }

  return `${labels[labels.length - 2]}.${labels[labels.length - 1]}`;
}

function formatAnswerData(type: DnsRecordType, data: unknown) {
  if (type === 'TXT') {
    if (Array.isArray(data)) {
      return data
        .map((part) => {
          if (part instanceof Uint8Array) {
            return new TextDecoder().decode(part);
          }
          return String(part);
        })
        .join(' ');
    }
    return String(data ?? '');
  }

  if (type === 'MX') {
    const mx = data as { exchange?: string; preference?: number };
    if (mx?.exchange) {
      const priority = mx.preference != null ? mx.preference : '-';
      return `${mx.exchange} (priority ${priority})`;
    }
  }

  if (type === 'SOA') {
    const soa = data as {
      mname?: string
      rname?: string
      serial?: number
      refresh?: number
      retry?: number
      expire?: number
      minimum?: number
    };

    if (soa?.mname || soa?.rname) {
      return [
        `mname=${soa.mname ?? '-'}`,
        `rname=${soa.rname ?? '-'}`,
        `serial=${soa.serial ?? '-'}`,
        `refresh=${soa.refresh ?? '-'}`,
        `retry=${soa.retry ?? '-'}`,
        `expire=${soa.expire ?? '-'}`,
        `minimum=${soa.minimum ?? '-'}`,
      ].join(', ');
    }
  }

  if (type === 'CAA') {
    const caa = data as { issuerCritical?: boolean; tag?: string; value?: string };
    if (caa?.tag) {
      return `${caa.tag}=${caa.value ?? ''}${caa.issuerCritical ? ' (critical)' : ''}`;
    }
  }

  if (type === 'SRV') {
    const srv = data as { target?: string; port?: number; priority?: number; weight?: number };
    if (srv?.target) {
      return `${srv.target}:${srv.port ?? '-'} (priority ${srv.priority ?? '-'}, weight ${srv.weight ?? '-'})`;
    }
  }

  if (type === 'DNSKEY') {
    const key = data as { flags?: number; protocol?: number; algorithm?: number; key?: string };
    if (key?.algorithm != null) {
      return `flags=${key.flags ?? '-'}, protocol=${key.protocol ?? '-'}, algorithm=${key.algorithm}, key=${(key.key ?? '').slice(0, 60)}...`;
    }
  }

  if (type === 'DS') {
    const ds = data as { keyTag?: number; algorithm?: number; digestType?: number; digest?: string };
    if (ds?.keyTag != null) {
      return `keyTag=${ds.keyTag}, algorithm=${ds.algorithm ?? '-'}, digestType=${ds.digestType ?? '-'}, digest=${(ds.digest ?? '').slice(0, 48)}...`;
    }
  }

  return String(data ?? '');
}

function getDohEndpoints() {
  return DEFAULT_DOH_ENDPOINTS;
}

async function withTimeout<T>(promise: Promise<T>, timeoutMs: number, message: string): Promise<T> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  try {
    const timeoutPromise = new Promise<never>((_, reject) => {
      timeoutId = setTimeout(() => reject(new Error(message)), timeoutMs);
    });
    return await Promise.race([promise, timeoutPromise]);
  }
  finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
}

async function queryRecords(name: string, type: DnsRecordType, endpoints: string[]) {
  const response = await withTimeout(
    query(
      {
        question: { name, type },
      },
      { endpoints },
    ),
    DNS_QUERY_TIMEOUT_MS,
    `DNS query timeout for ${name} (${type})`,
  );

  const answers = response.answers ?? [];

  return uniq(answers.map(answer => formatAnswerData(type, answer.data)));
}

function getPrimaryIp(dnsRecords: Record<DnsRecordType, string[]>) {
  return dnsRecords.A[0] || dnsRecords.AAAA[0];
}

function getRdapRegistrar(data: any) {
  const registrarEntity = asArray<any>(data?.entities).find(entity => asArray<string>(entity?.roles).includes('registrar'));
  const vcard = registrarEntity?.vcardArray?.[1];
  if (!Array.isArray(vcard)) {
    return undefined;
  }

  const fn = vcard.find((entry: any) => Array.isArray(entry) && entry[0] === 'fn');
  const org = vcard.find((entry: any) => Array.isArray(entry) && entry[0] === 'org');
  const value = fn?.[3] || org?.[3];
  return typeof value === 'string' ? value : undefined;
}

function getRdapEventDate(events: any[], actions: string[]) {
  const match = events.find(event => actions.includes(String(event?.eventAction ?? '').toLowerCase()));
  return typeof match?.eventDate === 'string' ? match.eventDate : undefined;
}

async function fetchRdap(asciiDomain: string) {
  const response = await fetch(`https://rdap.org/domain/${encodeURIComponent(asciiDomain)}`);
  if (!response.ok) {
    throw new Error(`RDAP request failed (${response.status})`);
  }

  const data = await response.json();

  const events = asArray<any>(data?.events);

  return {
    handle: data?.handle,
    ldhName: data?.ldhName,
    unicodeName: data?.unicodeName,
    status: asArray<string>(data?.status),
    registrar: getRdapRegistrar(data),
    createdAt: getRdapEventDate(events, ['registration', 'registered']),
    updatedAt: getRdapEventDate(events, ['last changed', 'last update of rdap database', 'last updated']),
    expiresAt: getRdapEventDate(events, ['expiration', 'expiry']),
    nameservers: uniq(asArray<any>(data?.nameservers).map(ns => String(ns?.ldhName || ns?.unicodeName || '')).filter(Boolean)),
    events: events
      .map(event => ({ action: String(event?.eventAction ?? ''), date: typeof event?.eventDate === 'string' ? event.eventDate : undefined }))
      .filter(event => event.action),
  } as RdapInfo;
}

async function fetchIpInfo(ip: string) {
  const endpoint = `https://ipinfo.io/${encodeURIComponent(ip)}/json`;

  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`IP enrichment failed (${response.status})`);
  }

  const data = await response.json();

  return {
    ip: data.ip || ip,
    hostname: data.hostname,
    city: data.city,
    region: data.region,
    country: data.country,
    postal: data.postal,
    loc: data.loc,
    org: data.org,
    timezone: data.timezone,
  } as IpInfo;
}

async function fetchCertificatesFromCertSpotter(asciiDomain: string) {
  const seenPages = new Set<string>();
  const seen = new Set<string>();
  const discovered = new Set<string>();
  const certificates: CertificateInfo[] = [];
  let nextUrl = `https://api.certspotter.com/v1/issuances?domain=${encodeURIComponent(asciiDomain)}&include_subdomains=true&expand=dns_names`;

  for (let page = 0; page < CERT_SPOTTER_MAX_PAGES && nextUrl; page++) {
    if (seenPages.has(nextUrl)) {
      break;
    }
    seenPages.add(nextUrl);

    const response = await withTimeout(fetch(nextUrl), FETCH_TIMEOUT_MS, 'Cert Spotter timeout');
    if (!response.ok) {
      throw new Error(`Cert Spotter lookup failed (${response.status})`);
    }

    const rows = await response.json() as any[];

    for (const row of rows) {
      const dnsNames = uniq(asArray<string>(row?.dns_names).map(name => String(name).toLowerCase().trim()));
      const commonName = String(row?.common_name || dnsNames[0] || '').trim();
      const key = `${commonName}|${row?.issuer?.name ?? ''}|${row?.not_after ?? ''}|${row?.cert_sha256 ?? ''}`;

      for (const dnsName of dnsNames) {
        const cleaned = dnsName.replace(/^\*\./, '');
        if (
          cleaned
          && cleaned.endsWith(`.${asciiDomain}`)
          && cleaned !== asciiDomain
        ) {
          discovered.add(cleaned);
        }
      }

      if (!commonName || seen.has(key)) {
        continue;
      }

      seen.add(key);
      if (certificates.length < MAX_CERTIFICATE_ITEMS) {
        certificates.push({
          commonName,
          issuerName: typeof row?.issuer?.name === 'string' ? row.issuer.name : undefined,
          notBefore: typeof row?.not_before === 'string' ? row.not_before : undefined,
          notAfter: typeof row?.not_after === 'string' ? row.not_after : undefined,
          entryTimestamp: typeof row?.issued_at === 'string' ? row.issued_at : undefined,
          dnsNames,
          fingerprintSha256: typeof row?.cert_sha256 === 'string' ? row.cert_sha256 : undefined,
        });
      }
    }

    const link = response.headers.get('link') || '';
    const nextMatch = link.match(/<([^>]+)>;\s*rel="next"/i);
    if (nextMatch?.[1]) {
      const candidate = nextMatch[1];
      nextUrl = candidate.startsWith('http') ? candidate : `https://api.certspotter.com${candidate}`;
      continue;
    }

    const lastId = rows[rows.length - 1]?.id;
    if (typeof lastId === 'number' || typeof lastId === 'string') {
      nextUrl = `https://api.certspotter.com/v1/issuances?domain=${encodeURIComponent(asciiDomain)}&include_subdomains=true&expand=dns_names&after=${encodeURIComponent(String(lastId))}`;
    }
    else {
      break;
    }
  }

  return { certificates, discoveredSubdomains: Array.from(discovered).sort(), source: 'Cert Spotter (CT Logs)' };
}

async function fetchCertificatesFromCrtSh(asciiDomain: string) {
  const response = await withTimeout(
    fetch(`https://crt.sh/?q=%25.${encodeURIComponent(asciiDomain)}&output=json`),
    FETCH_TIMEOUT_MS,
    'crt.sh timeout',
  );
  if (!response.ok) {
    throw new Error(`crt.sh lookup failed (${response.status})`);
  }

  const rows = await response.json() as any[];
  const seen = new Set<string>();
  const discovered = new Set<string>();
  const certificates: CertificateInfo[] = [];

  for (const row of rows) {
    const names = String(row?.name_value || '')
      .split('\n')
      .map(name => name.trim().toLowerCase())
      .filter(Boolean);
    const dnsNames = uniq(names);
    const commonName = String(row?.common_name || dnsNames[0] || '').trim().toLowerCase();
    const key = `${commonName}|${row?.issuer_name ?? ''}|${row?.not_after ?? ''}|${row?.sha256 ?? ''}`;

    for (const dnsName of dnsNames) {
      const cleanName = dnsName.replace(/^\*\./, '');
      if (cleanName && cleanName.endsWith(`.${asciiDomain}`) && cleanName !== asciiDomain) {
        discovered.add(cleanName);
      }
    }

    if (!commonName || seen.has(key)) {
      continue;
    }

    seen.add(key);
    if (certificates.length < MAX_CERTIFICATE_ITEMS) {
      certificates.push({
        commonName,
        issuerName: typeof row?.issuer_name === 'string' ? row.issuer_name : undefined,
        notBefore: typeof row?.not_before === 'string' ? row.not_before : undefined,
        notAfter: typeof row?.not_after === 'string' ? row.not_after : undefined,
        entryTimestamp: typeof row?.entry_timestamp === 'string' ? row.entry_timestamp : undefined,
        dnsNames,
        fingerprintSha256: typeof row?.sha256 === 'string' ? row.sha256 : undefined,
      });
    }
  }

  return { certificates, discoveredSubdomains: Array.from(discovered).sort(), source: 'crt.sh (CT Logs)' };
}

async function fetchCertificates(asciiDomain: string) {
  const lookupWarnings: string[] = [];
  const certificateKeys = new Set<string>();
  const mergedCertificates: CertificateInfo[] = [];
  const mergedSubdomains = new Set<string>();
  const sources: string[] = [];

  try {
    const certSpotter = await fetchCertificatesFromCertSpotter(asciiDomain);
    sources.push(certSpotter.source);
    certSpotter.discoveredSubdomains.forEach(name => mergedSubdomains.add(name));
    certSpotter.certificates.forEach((cert) => {
      const key = `${cert.commonName}|${cert.issuerName ?? ''}|${cert.notAfter ?? ''}|${cert.fingerprintSha256 ?? ''}`;
      if (!certificateKeys.has(key) && mergedCertificates.length < MAX_CERTIFICATE_ITEMS) {
        certificateKeys.add(key);
        mergedCertificates.push(cert);
      }
    });
  }
  catch (error: any) {
    lookupWarnings.push(`Cert Spotter lookup failed: ${error?.message ?? String(error)}`);
  }

  try {
    const crtSh = await fetchCertificatesFromCrtSh(asciiDomain);
    sources.push(crtSh.source);
    crtSh.discoveredSubdomains.forEach(name => mergedSubdomains.add(name));
    crtSh.certificates.forEach((cert) => {
      const key = `${cert.commonName}|${cert.issuerName ?? ''}|${cert.notAfter ?? ''}|${cert.fingerprintSha256 ?? ''}`;
      if (!certificateKeys.has(key) && mergedCertificates.length < MAX_CERTIFICATE_ITEMS) {
        certificateKeys.add(key);
        mergedCertificates.push(cert);
      }
    });
  }
  catch (error: any) {
    lookupWarnings.push(`crt.sh lookup failed: ${error?.message ?? String(error)}`);
  }

  if (!sources.length) {
    throw new Error(lookupWarnings.join(' | '));
  }

  return {
    certificates: mergedCertificates,
    discoveredSubdomains: Array.from(mergedSubdomains).sort(),
    source: sources.join(' + '),
    lookupWarnings,
  };
}

async function fetchSubdomainsFromHackerTarget(asciiDomain: string) {
  const response = await withTimeout(
    fetch(`https://api.hackertarget.com/hostsearch/?q=${encodeURIComponent(asciiDomain)}`),
    FETCH_TIMEOUT_MS,
    'HackerTarget timeout',
  );
  if (!response.ok) {
    throw new Error(`HackerTarget lookup failed (${response.status})`);
  }

  const text = await response.text();
  const names = text
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => line.split(',')[0]?.trim().toLowerCase() || '')
    .filter(Boolean);

  return extractSubdomainsFromDnsNames(names, asciiDomain);
}

function buildLinks(asciiDomain: string) {
  return [
    { label: 'WHOIS (IANA)', url: `https://www.iana.org/whois?q=${encodeURIComponent(asciiDomain)}` },
    { label: 'RDAP (rdap.org)', url: `https://rdap.org/domain/${encodeURIComponent(asciiDomain)}` },
    { label: 'Certificate Transparency (crt.sh)', url: `https://crt.sh/?q=%25.${encodeURIComponent(asciiDomain)}` },
    { label: 'DNSViz', url: `https://dnsviz.net/d/${encodeURIComponent(asciiDomain)}/dnssec/` },
    { label: 'URLScan Search', url: `https://urlscan.io/domain/${encodeURIComponent(asciiDomain)}` },
    { label: 'VirusTotal Domain', url: `https://www.virustotal.com/gui/domain/${encodeURIComponent(asciiDomain)}` },
    { label: 'Shodan Domain Search', url: `https://www.shodan.io/search?query=hostname:${encodeURIComponent(asciiDomain)}` },
    { label: 'SecurityTrails Domain', url: `https://securitytrails.com/domain/${encodeURIComponent(asciiDomain)}` },
  ] as DomainLink[];
}

function createEmptyDnsRecordMap() {
  return DNS_RECORD_TYPES.reduce((acc, type) => {
    acc[type] = [];
    return acc;
  }, {} as Record<DnsRecordType, string[]>);
}

function certificateSortScore(cert: CertificateInfo) {
  const notAfter = cert.notAfter ? Date.parse(cert.notAfter) : 0;
  const notBefore = cert.notBefore ? Date.parse(cert.notBefore) : 0;
  const safeNotAfter = Number.isFinite(notAfter) ? notAfter : 0;
  const safeNotBefore = Number.isFinite(notBefore) ? notBefore : 0;
  return (safeNotAfter * 2) + safeNotBefore;
}

function dedupeCertificatesByCommonName(certificates: CertificateInfo[]) {
  const byHost = new Map<string, CertificateInfo>();

  for (const cert of certificates) {
    const key = cert.commonName.trim().toLowerCase();
    if (!key) {
      continue;
    }

    const current = byHost.get(key);
    if (!current || certificateSortScore(cert) > certificateSortScore(current)) {
      byHost.set(key, cert);
    }
  }

  return Array.from(byHost.values()).sort((a, b) => certificateSortScore(b) - certificateSortScore(a));
}

function extractSubdomainsFromDnsNames(names: string[], asciiDomain: string) {
  const discovered = new Set<string>();
  for (const dnsName of names) {
    const cleaned = dnsName.toLowerCase().trim().replace(/^\*\./, '');
    if (cleaned && cleaned.endsWith(`.${asciiDomain}`) && cleaned !== asciiDomain) {
      discovered.add(cleaned);
    }
  }
  return Array.from(discovered);
}

function buildSubdomainCandidates(asciiDomain: string) {
  const set = new Set<string>();
  const envs = ['dev', 'test', 'stage', 'staging', 'prod', 'beta', 'qa', 'uat'];
  const regions = ['us', 'eu', 'ap', 'uk', 'in', 'au'];

  for (const word of SUBDOMAIN_WORDLIST) {
    set.add(`${word}.${asciiDomain}`);
    for (let i = 1; i <= 20; i++) {
      set.add(`${word}${i}.${asciiDomain}`);
    }
    for (const env of envs) {
      set.add(`${env}-${word}.${asciiDomain}`);
      set.add(`${word}-${env}.${asciiDomain}`);
      set.add(`${env}.${word}.${asciiDomain}`);
    }
    for (const region of regions) {
      set.add(`${region}-${word}.${asciiDomain}`);
      set.add(`${word}-${region}.${asciiDomain}`);
      set.add(`${region}.${word}.${asciiDomain}`);
    }
  }

  return Array.from(set).slice(0, MAX_CANDIDATES);
}

async function runWithConcurrency<T>(items: T[], limit: number, worker: (item: T) => Promise<void>) {
  let index = 0;
  const workers = Array.from({ length: Math.max(1, limit) }, async () => {
    while (index < items.length) {
      const current = items[index];
      index++;
      await worker(current);
    }
  });
  await Promise.all(workers);
}

async function subdomainHasDnsRecords(candidate: string, endpoints: string[]) {
  const checks = await Promise.allSettled([
    queryRecords(candidate, 'A', endpoints),
    queryRecords(candidate, 'AAAA', endpoints),
    queryRecords(candidate, 'CNAME', endpoints),
  ]);

  for (const check of checks) {
    if (check.status === 'fulfilled' && check.value.length > 0) {
      return true;
    }
  }

  return false;
}

async function discoverSubdomainsDnsOnly(asciiDomain: string, endpoints: string[]) {
  const found = new Set<string>();
  const firstPass = buildSubdomainCandidates(asciiDomain);

  await runWithConcurrency(firstPass, DNS_BRUTE_CONCURRENCY, async (candidate) => {
    try {
      if (await subdomainHasDnsRecords(candidate, endpoints)) {
        found.add(candidate);
      }
    }
    catch {
      // Ignore probe failures for candidates.
    }
  });

  const secondPassSeeds = Array.from(found).slice(0, SECOND_LEVEL_SEED_LIMIT);
  const secondPassCandidates: string[] = [];
  const envs = ['dev', 'test', 'stage', 'staging', 'prod', 'beta', 'qa', 'uat'];

  for (const seed of secondPassSeeds) {
    const seedLabel = seed.split('.')[0] || '';
    for (const prefix of SECOND_LEVEL_PREFIXES) {
      secondPassCandidates.push(`${prefix}.${seed}`);
      secondPassCandidates.push(`${prefix}-${seedLabel}.${asciiDomain}`);
      secondPassCandidates.push(`${seedLabel}-${prefix}.${asciiDomain}`);
    }
    for (const env of envs) {
      secondPassCandidates.push(`${env}.${seed}`);
    }
  }

  await runWithConcurrency(secondPassCandidates, DNS_BRUTE_CONCURRENCY, async (candidate) => {
    try {
      if (await subdomainHasDnsRecords(candidate, endpoints)) {
        found.add(candidate);
      }
    }
    catch {
      // Ignore probe failures for candidates.
    }
  });

  return Array.from(found).sort().slice(0, MAX_SUBDOMAIN_RESULTS);
}

export async function analyzeDomain(input: string): Promise<DomainIntelligenceResult> {
  const normalized = normalizeDomain(input);

  if (!isLikelyDomain(normalized)) {
    throw new Error('Please provide a valid domain (example: example.com).');
  }

  const asciiDomain = toAsciiDomain(normalized);
  const unicodeDomain = toUnicodeDomain(normalized);
  const labels = asciiDomain.split('.').filter(Boolean);

  const dnsRecords = createEmptyDnsRecordMap();
  const warnings: string[] = [];

  const endpoints = getDohEndpoints();

  await Promise.all(
    DNS_RECORD_TYPES.map(async (type) => {
      try {
        dnsRecords[type] = await queryRecords(asciiDomain, type, endpoints);
      }
      catch (error: any) {
        warnings.push(`${type} query failed: ${error?.message ?? String(error)}`);
      }
    }),
  );

  const security = {
    spf: dnsRecords.TXT.filter(record => /^v=spf1\b/i.test(record)),
    dmarc: [] as string[],
    bimi: [] as string[],
    mtaSts: [] as string[],
    tlsRpt: [] as string[],
    dnssecEnabled: dnsRecords.DS.length > 0 || dnsRecords.DNSKEY.length > 0,
  };

  const derived = {
    mxHosts: dnsRecords.MX
      .map(record => record.split(' (priority ')[0] ?? '')
      .filter((host): host is string => Boolean(host)),
    nsHosts: dnsRecords.NS,
    mxProviderHints: [] as string[],
    nsProviderHints: [] as string[],
  };

  derived.mxProviderHints = uniq(derived.mxHosts.map(toBaseDomain)).sort();
  derived.nsProviderHints = uniq(derived.nsHosts.map(toBaseDomain)).sort();

  const securityQueries: Array<{ key: 'dmarc' | 'bimi' | 'mtaSts' | 'tlsRpt'; host: string }> = [
    { key: 'dmarc', host: `_dmarc.${asciiDomain}` },
    { key: 'bimi', host: `default._bimi.${asciiDomain}` },
    { key: 'mtaSts', host: `_mta-sts.${asciiDomain}` },
    { key: 'tlsRpt', host: `_smtp._tls.${asciiDomain}` },
  ];

  await Promise.all(
    securityQueries.map(async ({ key, host }) => {
      try {
        security[key] = await queryRecords(host, 'TXT', endpoints);
      }
      catch {
        security[key] = [];
      }
    }),
  );

  let rdap: RdapInfo | undefined;
  try {
    rdap = await fetchRdap(asciiDomain);
  }
  catch (error: any) {
    warnings.push(`RDAP lookup unavailable: ${error?.message ?? String(error)}`);
  }

  let ipInfo: IpInfo | undefined;
  const primaryIp = getPrimaryIp(dnsRecords);
  if (primaryIp) {
    try {
      ipInfo = await fetchIpInfo(primaryIp);
    }
    catch (error: any) {
      warnings.push(`IP enrichment unavailable: ${error?.message ?? String(error)}`);
    }
  }

  let certificates: CertificateInfo[] = [];
  let discoveredSubdomains: string[] = [];
  let certificateSource: string | undefined;
  const aggregatedSubdomains = new Set<string>();
  const dnsDerivedNames = [
    ...dnsRecords.NS,
    ...dnsRecords.MX.map(record => record.split(' (priority ')[0] ?? ''),
    ...dnsRecords.CNAME,
  ];
  extractSubdomainsFromDnsNames(dnsDerivedNames, asciiDomain).forEach(name => aggregatedSubdomains.add(name));
  const [ctResult, hackerTargetResult] = await Promise.allSettled([
    fetchCertificates(asciiDomain),
    fetchSubdomainsFromHackerTarget(asciiDomain),
  ]);

  if (ctResult.status === 'fulfilled') {
    certificates = dedupeCertificatesByCommonName(ctResult.value.certificates);
    certificateSource = ctResult.value.source;
    ctResult.value.discoveredSubdomains.forEach(name => aggregatedSubdomains.add(name));
    if (ctResult.value.lookupWarnings?.length) {
      warnings.push(...ctResult.value.lookupWarnings);
    }
  }
  else {
    warnings.push(`Certificate transparency lookup unavailable: ${ctResult.reason?.message ?? String(ctResult.reason)}`);
  }

  if (hackerTargetResult.status === 'fulfilled') {
    hackerTargetResult.value.forEach(name => aggregatedSubdomains.add(name));
  }
  else {
    warnings.push(`HackerTarget subdomain lookup unavailable: ${hackerTargetResult.reason?.message ?? String(hackerTargetResult.reason)}`);
  }

  discoveredSubdomains = Array.from(aggregatedSubdomains).sort();

  return {
    overview: {
      input,
      normalized,
      asciiDomain,
      unicodeDomain,
      tld: labels[labels.length - 1] ?? '',
      labels: labels.length,
      hasSubdomain: labels.length > 2,
    },
    dnsRecords,
    security,
    derived,
    rdap,
    ipInfo,
    certificates,
    discoveredSubdomains,
    certificateSource,
    links: buildLinks(asciiDomain),
    warnings: uniq(warnings),
  };
}
