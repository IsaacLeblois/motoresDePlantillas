const express = require("express");
const productsRouter = require("./routes/products")

const app = express();

app.set('view engine', 'ejs')

app.use("/", productsRouter);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en el servidor ${error}`));
