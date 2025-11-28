const express = require("express");
const app = express();

const productsRoutes = require("./Routes/product.routes");

app.use(express.json());
app.use("/products", productsRoutes);


app.listen(8081, () => {
  console.log("8081 server is running...");
});
