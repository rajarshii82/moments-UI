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

# Set NODE_ENV to production to skip font downloads
export NODE_ENV=production

# Build with more memory allocation and skip font optimization
NODE_OPTIONS="--max_old_space_size=460" npm run build
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