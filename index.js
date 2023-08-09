require('dotenv').config()
const express = require('express')
const mongoose  = require('mongoose')
const cors = require('cors')
const healthRoute=require('./routes/HealthRoute')
const authRoute=require('./routes/AuthRoutes')


// var whitelist = ['http://localhost:5173', /** other domains if any */ ]
// var corsOptions = {
//   credentials: true,
//   origin: function(origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }


const app= express();
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: ['https://awass-vishwa-fe.vercel.app'],
}));

//DATABASE CONNECTION
mongoose.connect(process.env.DATABASE_URL);
mongoose.connection.once('connected', ()=>console.log("database connected"));
mongoose.connection.on("error", (error)=>console.log("database error: ",error))


//ROUTES

app.use('/health', healthRoute)
app.use('/api/v1/auth', authRoute)



app.listen(process.env.SERVER_PORT,() => console.log(`App server started at ${process.env.SERVER_PORT}`));