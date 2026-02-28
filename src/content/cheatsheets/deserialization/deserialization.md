### Functions
```
unserialize()       – PHP
pickle.loads()      – Python Pickle
jsonpickle.decode() – Python JSONPickle
yaml.load()         – Python PyYAML / ruamel.yaml
readObject()        – Java
Deserialize()       – C# / .NET
Marshal.load()      – Ruby
```

### Example strings
```
PHP - s:6:"string"
Python Pickle - starts with \x80\x03, ends with trailing .
JSONPickle - "py/object": "module.Class"
Java - Hex: AC ED 00 05 73 72; Base64: rO0ABXNy
C# / .NET BinaryFormatter - Hex: 00 01 00 00 00 FF FF FF FF; Base64: AAEAAAD/////
Ruby Marshal - Hex prefix 04 08
```

