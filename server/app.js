const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const verifyToken = require("./middlewares/verifyToken");

const Pokemon = require("./routes/pokemon");
const User = require("./routes/user");
const UserStat = require("./routes/userStat");


const app = express();
app.use(cors());

const Database = require("./config/database");
const config = require("./config/config");




//Nos permite manejar peticiones y enviar respuesta en formato json
app.use(bodyParser.json());
//De esta manera indicamos que no vamos a recibir peticiones enviadas directamente de un formulario, sino que sera todo enviado en json
app.use(bodyParser.urlencoded({ extended: false }));

app.use(verifyToken);

app.listen(4000, (err) => {
  if (err) return console.log(err);
  console.log(`Servidor corriendo en el puerto: ${config.PORT}`);
});

Database.connect();

app
  .use("/pokemons", Pokemon)
  .use("/users", User)
  .use("/userStats", UserStat);

  
module.exports = app;
