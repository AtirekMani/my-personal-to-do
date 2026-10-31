import * as taskModel from "../models/taskModel.js";

// GET: Display all tasks
async function getTasks(req, res) {
  try {
    const tasks = await taskModel.getAllTasks();

    res.render("index.ejs", {
      tasks: tasks,
    });
  } catch (error) {
    console.error("GET controller error:", error);
    res.status(500).send("Something went wrong");
  }
}

// POST: Create a new task
async function createTask(req, res) {
  try {
    if (typeof req.body.task !== "string") {
      return res.status(400).send("Bad request");
    }

    const taskText = req.body.task.trim();

    if (!taskText) {
      return res.status(400).send("Bad request");
    }

    await taskModel.createTask(taskText);
    res.redirect("/");
  } catch (error) {
    console.error("POST controller error:", error);
    res.status(500).send("Unable to add task");
  }
}

// DELETE: Delete a task
async function deleteTask(req, res) {
  try {
    const matchID = Number(req.params.id);

    if (!Number.isInteger(matchID) || matchID <= 0) {
      return res.status(400).send("Invalid task ID");
    }

    await taskModel.deleteTask(matchID);
    res.sendStatus(204);
  } catch (error) {
    console.error("DELETE controller error:", error);
    res.status(500).send("Unable to delete task");
  }
}

// PATCH: Update task completion status
async function updateTask(req, res) {
  try {
    const matchID = Number(req.params.id);
    const completionStatus = req.body.completed;

    if (
      !Number.isInteger(matchID) ||
      matchID <= 0 ||
      typeof completionStatus !== "boolean"
    ) {
      return res.status(400).send("Invalid task ID or completion status");
    }

    await taskModel.updateTask(completionStatus, matchID);
    res.sendStatus(204);
  } catch (error) {
    console.error("PATCH controller error:", error);
    res.status(500).send("Unable to update task");
  }
}

export { getTasks, createTask, deleteTask, updateTask };
