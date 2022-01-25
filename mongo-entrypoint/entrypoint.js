const db = connect("mongodb://rootuser:rootpass@localhost:27017/admin");

db = db.getSiblingDB('activa'); // we can not use "use" statement here to switch db

const result = db.createUser({user: "activa",pwd: "qwerty",roles: [ { role: "readWrite", db: "activa"} ],passwordDigestor: "server",})

console.log(result);