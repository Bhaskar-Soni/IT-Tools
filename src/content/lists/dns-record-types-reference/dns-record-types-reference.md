Record | Purpose | Example
--- | --- | ---
A | Maps hostname to IPv4 address | `example.com -> 93.184.216.34`
AAAA | Maps hostname to IPv6 address | `example.com -> 2606:2800:220:1:248:1893:25c8:1946`
CNAME | Alias to another hostname | `www -> example.com`
MX | Mail server for domain | `example.com MX 10 mail.example.com`
NS | Authoritative name server | `example.com NS ns1.example.com`
TXT | Free-form text (SPF, verification) | `v=spf1 include:_spf.example.com -all`
SOA | Zone authority metadata | Primary NS, admin email, serial
PTR | Reverse DNS (IP -> name) | `34.216.184.93.in-addr.arpa -> example.com`
SRV | Service location record | `_sip._tcp.example.com`
CAA | Which CA can issue certs | `0 issue "letsencrypt.org"`
DNSKEY | Public key for DNSSEC | Zone signing key
DS | Delegation signer (DNSSEC chain) | Parent zone reference
NAPTR | Rule-based service discovery | SIP/VoIP and telecom
