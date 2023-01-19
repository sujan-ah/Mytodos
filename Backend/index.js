const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const todoRoutes = require("./routes/todo.js");
const app = express();
dotenv.config();

main()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Mongodb connected");
    })
    .catch((err) => {
      console.log(err.message);
    });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello sujan");
});

app.use(cors());
app.use("/api/todos", todoRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
