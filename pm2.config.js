module.exports = {
  apps : [{
    name      : 'ETO_Chat-websocket',
    node_args : '-r esm',
    script    : './server/main.js',
    instances: 1,
    autorestart: true,
    max_memory_restart: '1G',
    exec_mode: 'fork',
    watch     : false,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }, {
    name: 'ETO_Chat-httpd',
    script: './node_modules/http-server/bin/http-server',
    args: './client -p 56287 -o',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
