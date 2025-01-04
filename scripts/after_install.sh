
# scripts/after_install.sh
#!/bin/bash
cd /home/ec2-user/nextjs-app

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Use Node.js 18
nvm use 20

# Clean install dependencies
rm -rf node_modules
rm -rf .next
npm cache clean --force
npm install

# Build the application with detailed logging
echo "Starting build process..."
npm run build
if [ $? -ne 0 ]; then
    echo "Build failed. Check the following information:"
    echo "Node version: $(node -v)"
    echo "NPM version: $(npm -v)"
    echo "Directory content:"
    ls -la
    echo "Package.json content:"
    cat package.json
    exit 1
fi