# devops-exam
Simple technical evaluation for a Jr. DevOps 

This repo is a handful of files suitable for a framework for technical 
evaulation of a Jr DevOps Engineer position.

Reference code:
https://faun.pub/a-simple-docker-setup-for-simple-hello-world-nodejs-application-bcf79bb608a0

## DevOps evaluation
==================================

Login via SSH command-line to the test system
* Hostname: localhost (provide external hostname if possible)
* Username: ubuntu
* SSH private key: (generate key and provide below)

A simple NodeJS webapp is deployed, app can be launched by 
changing to the directory and invoking:
```
cd ./devops-exam
node ./index.js
```

The webapp should be reachable at the following URL:
http://localhost:8080/

The following discussion points will be addressed:
1. The app does not launch, due to a system / config problem.  Can you
troubleshoot the issue, and/or update the configuration, to resolve
the problem?  (Hint: Use local UNIX tools.)
2. The webapp is served without SSL, on a non-standard port.  How 
would you improve the hosting configuration to address these two
deficiencies?  (Feel free to install packages using sudo, etc.)
3. The app and hosting are statically defined on the system.  Assuming 
the app code was available from a Git repo, how would you approach
improving scalability.  (Provide a glimpse of your methodology for 
defining this process, e.g. AWS or other console, example configs, etc.)

