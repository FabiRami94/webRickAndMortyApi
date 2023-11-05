
const server = require("./src/server.js");
require("dotenv").config();
const {PORT} = process.env;

server.listen(PORT, () => {
    console.log(`Server iniciado en ${PORT}`)
})

