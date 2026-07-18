Method | Purpose | Idempotent | Typical Use
--- | --- | --- | ---
GET | Retrieve resource | Yes | Fetch page/data
HEAD | Retrieve headers only | Yes | Check metadata/status
POST | Create or trigger action | No | Create record, submit form
PUT | Replace full resource | Yes | Full update
PATCH | Partial resource update | Usually no | Partial update
DELETE | Remove resource | Yes | Delete record
OPTIONS | Show supported methods | Yes | CORS/preflight
TRACE | Diagnostic loopback | Yes | Debug (usually disabled)
CONNECT | Tunnel through proxy | No | HTTPS proxy tunneling
