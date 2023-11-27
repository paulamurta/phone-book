import express from "express";
import { router } from "./routes/contact.routes";

const app = express();

app.use(router);

app.listen(3000, () => {
  console.log("rodando");
});

export default app;
