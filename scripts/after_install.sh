# scripts/after_install.sh
#!/bin/bash
cd /home/ec2-user/nextjs-app

# Install dependencies
npm install

# Build the application
npm run build
