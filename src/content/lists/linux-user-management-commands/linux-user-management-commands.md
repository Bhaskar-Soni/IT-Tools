Command | Purpose | Example
--- | --- | ---
`adduser <user>` | Create user with guided setup | `adduser alice`
`useradd <user>` | Create user (low-level) | `useradd -m bob`
`passwd <user>` | Set/reset password | `passwd alice`
`id <user>` | Show UID/GID/group memberships | `id alice`
`usermod -aG <group> <user>` | Add user to group | `usermod -aG sudo alice`
`groups <user>` | Show user groups | `groups alice`
`groupadd <group>` | Create group | `groupadd developers`
`deluser <user>` | Delete user account | `deluser alice`
`deluser --remove-home <user>` | Delete user and home directory | `deluser --remove-home alice`
`chage -l <user>` | Show password aging policy | `chage -l alice`
`usermod -L <user>` | Lock account | `usermod -L alice`
`usermod -U <user>` | Unlock account | `usermod -U alice`
