export interface HeaderAnalysis {
  spf: string | null;
  dkim: string | null;
  dmarc: string | null;
  routes: string[];
}

function findAuthResult(headers: string, key: string): string | null {
  const regex = new RegExp(`${key}=([^;\\s]+)`, 'i');
  const match = headers.match(regex);
  return match ? match[1].toUpperCase() : null;
}

export function analyzeEmailHeaders(raw: string): HeaderAnalysis {
  const headers = raw.replace(/\r\n\s+/g, ' '); // unfold headers

  const spf =
    findAuthResult(headers, 'spf') ||
    (headers.match(/Received-SPF:\s*(\w+)/i)?.[1]?.toUpperCase() ?? null);

  const dkim =
    findAuthResult(headers, 'dkim') ||
    (headers.match(/DKIM-Signature/i) ? 'PRESENT' : null);

  const dmarc =
    findAuthResult(headers, 'dmarc') ||
    findAuthResult(headers, 'policy.evaluated.dmarc');

  const routes = [...raw.matchAll(/^Received:\s*(.+)$/gmi)].map(
    match => match[1].trim()
  );

  return {
    spf,
    dkim,
    dmarc,
    routes,
  };
}
