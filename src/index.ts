import express from "express";
import routes from "./routes/routes"; // Importando as rotas

const app = express();

// Middleware para interpretar corpo da requisição como JSON
app.use(express.json());

// Usando as rotas importadas
app.use("/api", routes); // Prefixo "/api" para todas as rotas

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
