const server = require('./App')
server.listen(process.env.PORT || 3010, () => {
  console.log('Listening port 3010')
})