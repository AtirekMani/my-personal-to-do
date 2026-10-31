import express from "express";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", taskRoutes);
// app.post("/tasks", taskRoutes);
// app.delete("/tasks/:id", taskRoutes);
// app.patch("/tasks/:id", taskRoutes);

app.listen(port, () => {
  console.log(`Log-Server running at port: ${port}`);
});
