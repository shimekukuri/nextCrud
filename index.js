let express = require("express");
let bodyParser = require("bodyParser");
const { response } = require("express");

const app = Express();
const port = 3200;

app.use(bodyParser.json());
app.use(
  bodyParser.urlenconded({
    extended: true,
  })
);

app.get(`/`, (request, reponse) => {
  response.json({ info: `Node.js, epxress, and postgresql API` });
});

app.listen(port, () => {
  console.log(`listening on port number ${port}`);
});
