pm2 start npm --name "Plannit-Frontend" -- start
pm2 restart 1
pm2 logs 1
pm2 delete Plannit-Frontend
pm2 list
pm2 start npm --name "Plannit-Frontend" -- start -- --hostname 0.0.0.0  // for Listing of frontend (Next.js)
pm2 status

