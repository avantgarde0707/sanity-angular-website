const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://hcv3c5ux.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;