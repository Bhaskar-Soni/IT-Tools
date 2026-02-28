Version Part | Format | Meaning
--- | --- | ---
Major | `X.0.0` | Breaking changes
Minor | `0.Y.0` | Backward-compatible features
Patch | `0.0.Z` | Backward-compatible bug fixes
Pre-release | `1.4.0-alpha.1` | Unstable preview release
Build metadata | `1.4.0+20260228` | Build info, no precedence change

Change Type | Example | Next Version
--- | --- | ---
Breaking API change | Remove old endpoint | `2.0.0`
New feature | Add optional API field | `1.5.0`
Bug fix | Fix null pointer | `1.4.3`
Security patch | Fix auth bypass | `1.4.4`
