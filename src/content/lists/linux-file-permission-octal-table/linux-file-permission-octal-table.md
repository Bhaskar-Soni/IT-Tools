Octal | Symbolic | Meaning
--- | --- | ---
0 | --- | No permissions
1 | --x | Execute only
2 | -w- | Write only
3 | -wx | Write + execute
4 | r-- | Read only
5 | r-x | Read + execute
6 | rw- | Read + write
7 | rwx | Read + write + execute

Common Mode | Symbolic | Typical Use
--- | --- | ---
644 | rw-r--r-- | Regular files
600 | rw------- | Private files/keys
755 | rwxr-xr-x | Executable scripts/programs
700 | rwx------ | Private executable/scripts
664 | rw-rw-r-- | Shared group-write files
775 | rwxrwxr-x | Shared group-write directories
777 | rwxrwxrwx | Avoid in production
