Type | Category | Example | Use
--- | --- | --- | ---
`INT` | Numeric | `42` | Whole numbers
`BIGINT` | Numeric | `9223372036854775807` | Large integers
`DECIMAL(p,s)` | Numeric | `DECIMAL(10,2)` | Exact fixed-point values
`FLOAT` | Numeric | `3.14159` | Approximate fractional values
`BOOLEAN` | Logical | `TRUE` / `FALSE` | Flags/toggles
`CHAR(n)` | String | `CHAR(2)` | Fixed-length text
`VARCHAR(n)` | String | `VARCHAR(255)` | Variable-length text
`TEXT` | String | Long paragraphs | Large free-form text
`DATE` | Date/Time | `2026-02-28` | Date only
`TIME` | Date/Time | `13:45:00` | Time only
`TIMESTAMP` | Date/Time | `2026-02-28 13:45:00` | Date + time
`UUID` | Identifier | `550e8400-e29b-41d4-a716-446655440000` | Unique identifiers
`JSON` / `JSONB` | Document | `{"role":"admin"}` | Semi-structured data
`BLOB` / `BYTEA` | Binary | Binary bytes | File/binary content
