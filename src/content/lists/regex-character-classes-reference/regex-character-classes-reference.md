Pattern | Meaning | Example Match
--- | --- | ---
`.` | Any character except newline | `a` in `cat`
`\d` | Digit (0-9) | `7`
`\D` | Non-digit | `A`
`\w` | Word char (a-z, A-Z, 0-9, _) | `user_1`
`\W` | Non-word char | `-`
`\s` | Whitespace | ` ` (space)
`\S` | Non-whitespace | `x`
`[abc]` | Any one of `a`, `b`, `c` | `b`
`[^abc]` | Any char except `a`, `b`, `c` | `z`
`[a-z]` | Lowercase letter range | `m`
`[A-Z]` | Uppercase letter range | `Q`
`[0-9]` | Numeric range | `4`
`^` | Start of line/string anchor | start of `hello`
`$` | End of line/string anchor | end of `hello`
`\b` | Word boundary | boundary in `cat!`
`*` | Zero or more | `aaa`
`+` | One or more | `aaa`
`?` | Zero or one | optional `u` in `color/colour`
`{n}` | Exactly n times | `\d{4}` -> `2026`
`{n,m}` | Between n and m times | `\d{2,4}` -> `99`
