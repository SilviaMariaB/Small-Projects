import express from "express";

const app = express();
const port = 3000;

//custom middleware
function logger(req, res, next) {
  console.log("Request method: ", req.method);
  console.log("Request url: ", req.url);
  next();
}

app.use(logger);

//the actual middleware
// app.use((req, res, next) => {
//   console.log("Request method: ", req.method);
//   console.log("Request url: ", req.url);
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
