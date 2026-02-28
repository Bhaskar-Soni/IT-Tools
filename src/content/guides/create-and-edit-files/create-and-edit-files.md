# Create And Edit Files

### Create empty files
```
touch notes.txt
touch app.log
```

### Write text into files
```
echo "Hello World" > notes.txt
echo "Second line" >> notes.txt
cat notes.txt
```

### Edit with nano (beginner friendly)
```
nano notes.txt
```

### Copy, move, and rename files
```
cp notes.txt notes-copy.txt
mv notes-copy.txt notes-archive.txt
```

### Delete files safely
```
rm notes-archive.txt
```

### Quick reference
- `>` overwrites file content.
- `>>` appends new content.
