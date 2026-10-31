// const formTab = document.getElementById("task-form");
// const inputTab = document.getElementById("task-input");
// const listTab = document.getElementById("task-list");
const delTab = document.querySelectorAll("#task-list button");
const checkTab = document.querySelectorAll("#task-list input");

checkTab.forEach((element) => {
  element.addEventListener("change", async (e) => {
    try {
      const listItem = element.closest("li");
      const taskId = listItem.dataset.id;
      const completed = element.checked;
      const response = await fetch(`/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: completed }),
      });
      if (response.ok) {
        console.log("Item checked successfully");
      } else {
        console.log("Unable to check");
        element.checked = !completed;
        alert("Failed to save changes. Reverting choice.");
      }
    } catch (error) {
      console.log("Error", error.message);
      element.checked = !completed;
    }
  });
});

delTab.forEach((element) => {
  element.addEventListener("click", async (e) => {
    try {
      const listItem = element.closest("li");
      const taskId = listItem.dataset.id;
      //   const response = await axios.delete(
      //     `http://localhost:3000/tasks/${taskId}`,
      //   );
      //   console.log(response.data);
      const response = await fetch(`/tasks/${taskId}`, { method: "DELETE" });
      if (response.ok) {
        listItem.remove();
      } else {
        console.log("Unable to return");
      }
    } catch (error) {
      console.log("Error", error.message);
    }
  });
});

// formTab.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const taskText = inputTab.value.trim();
//   if (taskText === "") return;

//   const newToDo = document.createElement("li");

//   newToDo.appendChild(createLabel(taskText));
//   listTab.appendChild(newToDo);
//   inputTab.value = "";
//   inputTab.focus();
// });

// function createLabel(text) {
//   const label = document.createElement("label");
//   const checkbox = document.createElement("input");
//   const s = document.createElement("span");
//   const del = document.createElement("button");
//   del.type = "button";

//   del.textContent = "⌦";
//   s.classList.add("task-text");
//   checkbox.type = "checkbox";
//   checkbox.addEventListener("change", () => {
//     s.classList.toggle("completed", checkbox.checked);
//   });
//   del.addEventListener("click", () => {
//     label.parentElement.remove();
//   });
//   label.appendChild(checkbox);
//   s.textContent = text;
//   label.appendChild(s);
//   label.appendChild(del);
//   return label;
// }
