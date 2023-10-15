const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(routes);
// app.use(express.static(path.join(__dirname, '../../Frontend/build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../Frontend/build/index.html'));
// });

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((e) => console.log(e));

app.listen(process.env.PORT, () =>
  console.log(`App is listening port ${process.env.PORT}`)
);
