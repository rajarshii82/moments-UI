#!/bin/bash
cd /home/ec2-user/nextjs-app

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 20  # or your Node version

# Clean install
rm -rf node_modules
rm -rf .next
npm cache clean --force

# Install dependencies
npm install 

# Build with more memory allocation and skip font optimization
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