const server = require('./server.js');
const crudrouter = require("./data/crudrouter")

const PORT = process.env.PORT || 4000;

server.use("/", crudrouter)

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});