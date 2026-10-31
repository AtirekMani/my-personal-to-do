import { db } from "../config/db.js";

export async function getAllTasks() {
  const result = await db.query("Select * from tasks order by id");
  return result.rows;
}

export async function createTask(taskText) {
  return db.query("insert into tasks (task) values ($1)", [taskText]);
}

export async function deleteTask(matchID) {
  return db.query("delete from tasks where id = $1", [matchID]);
}

export async function updateTask(completionStatus, matchID) {
  return db.query("update tasks set completed=$1 where id =$2", [
    completionStatus,
    matchID,
  ]);
}
