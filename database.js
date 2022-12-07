const mongoose = require("mongoose");

const URI =
"mongodb+srv://JairoRiv:Polifil25@jairodr001.dfsimao.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URI)
  .then(() => console.log("BD conectada"))
  .catch((err) => console.log(err));

module.exports = mongoose;

