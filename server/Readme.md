->npm init
->installing dependencies 
->npm i morgan nodemon bcryptjs cloudinary cookie-parser cors dotenv express jsonwebtoken mongoose multer nodemailer razorpay --save
***
making a port on server => localhost:port by using listen
by using express we start the process
and cors is used to connect with frontend_url;
and using cookie-parser for authentication
and a ping-pong server for check the server
morgan library is used to give security =>

{
  "name": "server",
  "type": "module",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {

  }
}
