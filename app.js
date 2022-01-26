require('dotenv').config({path: './config/.env'})
const express = require("express");
const app = express();
const path = require('path')
const mongoose = require("mongoose")
const router = require("./routes/routes.js")
const bodyParser = require("body-parser")
const expressHandlebars = require("express-handlebars");
const hb = expressHandlebars.create({defaultLayout: "main"});

app.set('views',path.join(__dirname,'views'));
app.engine('handlebars', hb.engine);
app.set('view cache', true);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(bodyParser.json())
app.use("/", router)
  
mongoose.connect(process.env.DB_URL, ()=>{
    console.log("Conectado a la BDD ;)")
}, err => {console.log(err)})

app.listen(3000, ()=>{ console.log("Servidor UP!!!")}) 