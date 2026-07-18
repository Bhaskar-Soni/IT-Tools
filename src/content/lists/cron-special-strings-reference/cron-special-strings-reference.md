Special String | Equivalent | Meaning
--- | --- | ---
@reboot | N/A | Run once at startup
@yearly | `0 0 1 1 *` | Once per year
@annually | `0 0 1 1 *` | Once per year
@monthly | `0 0 1 * *` | Once per month
@weekly | `0 0 * * 0` | Once per week
@daily | `0 0 * * *` | Once per day
@midnight | `0 0 * * *` | Once per day at midnight
@hourly | `0 * * * *` | Once per hour

Common Pattern | Meaning
--- | ---
`*/5 * * * *` | Every 5 minutes
`0 */2 * * *` | Every 2 hours
`30 2 * * 1` | Every Monday at 02:30
`15 4 1 * *` | First day of month at 04:15
