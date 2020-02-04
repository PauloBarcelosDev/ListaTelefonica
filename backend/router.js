const http = require('http');

const createRouter = function(port){
  let api = {};
  let routes={};
  let methods = ['GET', 'POST', 'OPTIONS'];
  let interceptors = [];



  methods.forEach(function(method){
    routes[method] = {};
    api[method.toLowerCase()] = function (path, fn){
      routes[method][path] = fn;
    };
  });
  api.interceptors = function(interceptors){
    interceptors.push(interceptors);
  }
  let executeInterceptors = function (number, req,res){
    let interceptor = interceptors[number];
    if(!interceptor) return;
      interceptor(req,res, function(){
        executeInterceptors(++number, req,res);
      });
  };
  let handleBody = function(req,res, next){
    var body = [];
    req.on('data',function (chunk){
      body.push(chunk);
    });
    req.on('end', function(){
      req.body = Buffer.concat(body).toString();
      next();
    })
  }
  http.createServer(function(req,res){
    handleBody(req,res,function(){
      executeInterceptors(0,req,res);
      if(!routes[req.method][req.url])  {
        res.statusCode = 404;
        res.end();
      }
      routes[req.method][req.url](req,res);
    }).listen(port);
   });
  return api;
}

module.exports = createRouter;