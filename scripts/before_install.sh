# scripts/before_install.sh
#!/bin/bash
# Create application directory if it doesn't exist
mkdir -p /home/ec2-user/nextjs-app
rm -rf /home/ec2-user/nextjs-app/*
rm -rf /home/ec2-user/nextjs-app/.next

# Install correct Node.js version (adjust version as needed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 20
nvm use 20

# Install global dependencies
npm install -g npm@latest
npm install -g pm2