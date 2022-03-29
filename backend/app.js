const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bookRoutes = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

app.use("/users", bookRoutes);

app.listen(process.env.PORT, () => {
  console.log(`port listening on ${PORT}`);
});
