const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
const allowedCors = [
    'https://study.mesto.nomoredomains.rocks',
    'http://study.mesto.nomoredomains.rocks',
    'https://api.study.mesto.nomoredomains.rocks',
    'http://api.study.mesto.nomoredomains.rocks',
    'localhost:3000'
  ];
  
  module.exports = (req, res, next) => {
    const { method } = req;
    const requestHeaders = req.headers['access-control-request-headers'];
    const { origin } = req.headers;
  
    if (allowedCors.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
      res.header('Access-Control-Allow-Credentials', 'true');
    }
  
    if (method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
      res.header('Access-Control-Allow-Headers', requestHeaders);
      res.end();
    }
  
    next();
  };