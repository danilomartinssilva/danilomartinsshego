const server = require('./server')
server.listen(process.env.PORT || 3005, () => {
  console.log('Listening port  3005')
})