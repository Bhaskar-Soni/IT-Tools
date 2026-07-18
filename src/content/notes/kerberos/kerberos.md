### Terms
```
AS     - Authentication Service
KDC    - Key Distribution Center
KrbTGT - Kerberos Ticket-Granting Ticket
LTSK   - Long-Term Session Key
PAC    - Privilege Access Certificate
SPN    - Service Principle Name (contains ServiceClass and Hostname of server)
TGS    - Ticket-Granting Service
TGT    - Ticket-Granting Ticket (SPN of TGT is krbtgt/&lt;domain&gt;)
```

### Rough procedure
```
user &gt; (ID, IP, lifetime) &gt; AS
AS will check database for ID
AS &gt; (ask for password) &gt; user
user &gt; (client password) &gt; AS
AS &gt; (TGS session key, liftime - encrypted with client password) &gt; user
AS &gt; (TGT - encrypted with TGS secret key) &gt; user
user &gt; (TGT, service) &gt; TGS
TGS check if service exists and check validity of TGT
TGS &gt; (Ticket for service - encrypted with service key) &gt; user
user &gt; (Ticket for service) &gt; service 
```

### Golden ticket
```
TGT signed and encrypted by the hash of KrbTGT account
it can be used to impersonate any user with any privileges from even a non-domain machine
password change has no effect on this ticket
```


