const proxy = [
    {
      context: '/abitolutup',
      target: 'http://localhost:8080',
      pathRewrite: {'^/abitolutup' : ''}
    }
  ];
  module.exports = proxy;