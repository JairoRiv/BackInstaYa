const express = require("express");
const app = express();
const morgan = require('morgan')
const path = require('path')
const { mongoose } = require ('./database')
require("dotenv").config()
const port = 8000;
const cors = require('cors')

//Settings
app.set('port', process.env.PORT || 8000 )

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//Routes
app.use('/api/task' , require('./routes/taskRoutes'))
app.use('/api/orden' , require('./routes/orden.route'))
app.use('/api/user' , require('./routes/userRoute'))


// Static Files
app.use(express.static(path.join(__dirname, 'public')))



//Starting the server

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
