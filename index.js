const app = require('express')()

   // express middleware
   const bodyParser = require('body-parser')
   app.use(bodyParser.urlencoded({ extended: false }))
   app.use(bodyParser.json())

   const PORT = 5000
   // start server  
   app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
