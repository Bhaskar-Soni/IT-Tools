# How To Secure Shared Memory

### Why secure `/dev/shm`
`/dev/shm` is world-writable; setting restrictive mount options reduces abuse risk.

### Check current mount options
```
mount | grep /dev/shm
findmnt /dev/shm
```

### Backup fstab
```
sudo cp /etc/fstab /etc/fstab.bak.$(date +%F-%H%M%S)
```

### Add secure mount options
```
sudo vim /etc/fstab

tmpfs /dev/shm tmpfs defaults,noexec,nosuid,nodev 0 0
```

### Remount with new options
```
sudo mount -o remount /dev/shm
mount | grep /dev/shm
```

### Validate behavior
```
touch /dev/shm/testfile
ls -la /dev/shm
```

### Revert quickly if app breaks
```
sudo cp /etc/fstab.bak.<timestamp> /etc/fstab
sudo mount -o remount /dev/shm
```

### Quick reference
- Use `noexec,nosuid,nodev` for hardened systems.
- Validate applications after remount.
- Keep fstab backup for fast rollback.
