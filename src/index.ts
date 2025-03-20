import express from "express";
import routes from "./routes/routes"; // Importando as rotas

const app = express();

app.use(express.json());

app.use("/api", routes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
