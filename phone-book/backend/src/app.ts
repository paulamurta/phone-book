import express from "express";
import router from "./routes/contact.routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(router);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.listen(3009, () => {
  console.log("Running at port 3009");
});

export default app;
