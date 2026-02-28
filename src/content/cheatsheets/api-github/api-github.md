### Source
https://docs.github.com/en/rest

### Create private repository
```
curl -X POST -H "Authorization: Bearer <apiKey>" -H "Accept: application/vnd.github+json" https://api.github.com/user/repos -d '{"name": "<repository>", "description": "<description>", "private": true}'
```

### Delete repository
```
curl -X DELETE -H "Authorization: Bearer <apiKey>" -H "Accept: application/vnd.github+json" https://api.github.com/repos/<user>/<repository>
```

### List files inside repository
```
curl -H "Authorization: Bearer <apiKey>" https://api.github.com/repos/<user>/<repository>/contents
```

### Upload file to repository
```
curl -X PUT -H "Authorization: Bearer <apiKey>" https://api.github.com/repos/<user>/<repository>/contents/<filePath> -d "{\"message\":\"<message>\",\"content\":\"<fileContentBase64>\"}"
```

### Get commit meta data
```
curl -H "Authorization: Bearer <apiKey>" -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/<user>/<repository>/commits?path=<filePath>"
```

### Get file content and meta data
```
curl -s -H "Authorization: Bearer <apiKey>" https://api.github.com/repos/<user>/<repository>/contents/<filePath>
```

### Download file from repository
```
curl -s -H 'Authorization: Bearer <apiKey>' -H 'Accept: application/vnd.github.v3.raw' -o <outfile> "https://api.github.com/repos/<user>/<repository>/contents/<filePath>"
```

### Upload and overwrite file 
```
curl -X PUT -H "Authorization: Bearer <apiKey>" https://api.github.com/repos/<user>/<repository>/contents/<filePath> -d "{\"message\":\"<message>\",\"content\":\"<fileContentBase64>\", \"sha\":\"<shaSum>\"}"
```

### List workflows of repository
```
curl -H "Authorization: Bearer <apiKey>" -H "Accept: application/vnd.github+json" https://api.github.com/repos/<user>/<repository>/actions/workflows
```

### Run workflow (main branch)
```
curl -X POST -H "Authorization: Bearer <apiKey>" -H "Accept: application/vnd.github+json" -H "Content-Type: application/json" https://api.github.com/repos/<user>/<repository>/actions/workflows/<fileName>.yml/dispatches -d '{"ref":"main"}'
```

### Get workflow logs
```
curl -H "Authorization: Bearer <apiKey>" -H "Accept: application/vnd.github+json" https://api.github.com/repos/<user>/<repository>/actions/workflows/action.yml/runs
```

### Download workflow logs of last run
```
curl -s -H "Authorization: Bearer <apiKey>" -H "Accept: application/vnd.github+json" "https://api.github.com/repos/<user>/<repository>/actions/runs?per_page=1" | jq -r '.workflow_runs[0] .logs_url'
curl -s -L -H "Accept: application/vnd.github+json" -H "Authorization: Bearer <apiKey>" -H "X-GitHub-Api-Version: 2022-11-28" "<logUrl>" -o "<file>.zip"
```