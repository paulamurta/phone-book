import express from "express";
import router from "./routes/contact.routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Running at port 3000");
});

export default app;
