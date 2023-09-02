const { PORT = 5000 } = process.env;

const app = require("./app");
// const knex = require("../db/connection");

const listner = ()=> console.log(`Listening on Port ${PORT}!`);

// knex.migrate
// .latest()
// .then((migrations) => {
//     console.log("migrations", migrations);
//     app.listen(PORT, listner);
// })
// .catch(console.error)


app.listen(PORT, listner);