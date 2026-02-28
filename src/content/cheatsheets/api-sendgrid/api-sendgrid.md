### Source
https://www.twilio.com/docs/sendgrid/for-developers/sending-email/curl-examples

### List state
```
curl -X GET "https://api.sendgrid.com/v3/partners/accounts/accountID/state" --header "Authorization: Bearer <apiKey>"
```

### List messages
```
curl -X GET "https://api.sendgrid.com/v3/messages?limit=50" --header "Authorization: Bearer <apiKey>"
```

### List messages
```
curl --request POST --url https://api.sendgrid.com/v3/mail/send --header "Authorization: Bearer <apiKey>" --header "Content-Type: application/json" --data '{"personalizations": [{"to": [{"email": "<receiver>@<domain>"}]}], "from": {"email": "<sender>@<domain>"}, "subject": "<subject>", "content": [{"type": "text/plain", "value": "<body>"}]}'
```