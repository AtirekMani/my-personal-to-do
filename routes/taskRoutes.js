import express from "express";
import * as taskController from "../controllers/taskController.js";

const router = express.Router();

// GET: Display all tasks
router.get("/", taskController.getTasks);

// POST: Add a new task
router.post("/tasks", taskController.createTask);

// DELETE: Delete a task
router.delete("/tasks/:id", taskController.deleteTask);

// PATCH: Update task completion status
router.patch("/tasks/:id", taskController.updateTask);

export default router;
