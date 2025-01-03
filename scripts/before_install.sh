# scripts/before_install.sh
#!/bin/bash
# Create application directory if it doesn't exist
mkdir -p /home/ec2-user/nextjs-app

# Install Node.js dependencies globally
npm install -g pm2

# Clean up existing deployment if any
rm -rf /home/ec2-user/nextjs-app/*
