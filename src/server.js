const http = require("http");
const fh = require("./fileHandler.js");
const router = require("./router.js");
const database = require("./database.js");

const PORT = 3000;

const server = http.createServer((req, res) => {
  router.route(req, res);
  database.init();
});

server.listen(PORT, () => {
  fh.writeLog(`Serveur en cours d'exécution sur http://localhost:${PORT}/`);
});