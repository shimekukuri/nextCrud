let express = require("express");
let bodyParser = require("body-parser");
const { response } = require("express");
const db = require("./config");

const app = express();
const port = 3200;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get(`/`, (request, response) => {
  return response.json({ info: `Node.js, epxress, and postgresql API` });
});

app.get("/users", db.getUsers);
app.get("/users/:id", db.getUsersById);
app.post("/users/", db.createUser);
app.put("users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`listening on port number ${port}`);
});
