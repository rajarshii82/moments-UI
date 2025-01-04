# scripts/start_application.sh
#!/bin/bash
cd /home/ec2-user/nextjs-app

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node.js 20
nvm use 20

# Start the application using PM2
pm2 delete nextjs-app 2>/dev/null || true
pm2 start npm --name "nextjs-app" -- start