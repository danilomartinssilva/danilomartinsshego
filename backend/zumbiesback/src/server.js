const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')
class App {
  constructor() {
    this.express = express()
    this.isDev = process.env.NODE || production;
    this.server = require('http').Server(this.express)
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.express.use(morgan())
    this.express.use(bodyParser.urlencoded({
      extended: true
    }))
    this.express.use(bodyParser.json())
    this.express.all('*', function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header("Access-Control-Allow-Credentials", "true");
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header("Access-Control-Allow-Headers", "x-access-token, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
      next();
    });
  }
  routes() {

  }

}
module.exports = new App().server;