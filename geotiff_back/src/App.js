import express from 'express'
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes')
import './app/database'
class App {
  constructor() {
    this.server = express()
    this.isDev = process.env.NODE || production;

    this.middlewares()
    this.routes()

  }

  middlewares() {
    this.server.use(morgan())
    this.server.use(bodyParser.urlencoded({
      extended: true
    }))
    this.server.use(bodyParser.json())
    this.server.all('*', function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header("Access-Control-Allow-Credentials", "true");
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header("Access-Control-Allow-Headers", "x-access-token, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
      next();
    });
  }
  database() {

  }
  routes() {
    this.server.use(routes)
  }

}
module.exports = new App().server;