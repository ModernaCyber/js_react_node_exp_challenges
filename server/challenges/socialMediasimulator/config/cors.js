const corsOptions = {
    origin: 'http://example.com', // Replace with the origin(s) you want to allow
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable CORS credentials (cookies, authorization headers)
    optionsSuccessStatus: 204, // HTTP status code to respond with for successful preflight requests
  };
  
  module.exports = corsOptions;
  