# scripts/start_application.sh
#!/bin/bash
cd /home/ec2-user/nextjs-app

# Start the application using PM2
pm2 delete nextjs-app 2>/dev/null || true
pm2 start npm --name "nextjs-app" -- start
