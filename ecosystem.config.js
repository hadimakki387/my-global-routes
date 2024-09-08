module.exports = {
  apps: [
    {
      name: 'hornetstrike',
      script: 'npm',
      args: 'start',
      cwd: '/home/ubuntu/hornetstrike_frontend',
      watch: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
