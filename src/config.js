
const PORT = Number(process.env.PORT) || 5000;

const PORT = Number(process.env.PORT) || 3000; // default port for dev

const DB_URL = String(process.env.DB_URL)


module.exports = {
  PORT, DB_URL
};
