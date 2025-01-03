# scripts/after_install.sh
#!/bin/bash
cd /home/ec2-user/nextjs-app

#npm init
# Install dependencies
npm install -g

# Build the application
npm run build
