require('dotenv').config({path: './config/.env'})
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const router = require("./routes/routes.js")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_URL, ()=>{
    console.log("Conectado a la BDD ;)")
}, err => {console.log(err)})
//(process.env.DATABASE_URL
app.use(
    express.urlencoded({ extended: true })
);
app.use(express.static('public'))
app.use(express.json())
app.use("/", router)


app.listen(3000, ()=>{ console.log("Servidor UP!!!")}) 