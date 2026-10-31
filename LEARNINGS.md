# 📝 Personal To-Do Application

A full-stack To-Do application built from scratch to practice and strengthen my web development skills. The application allows users to create, view, complete, and delete tasks, with task data stored persistently in a PostgreSQL database.

This project helped me understand how frontend, backend, and database technologies work together in a real-world application.

## 🚀 Features

- **Add Tasks:** Create new tasks using a simple input form.
- **View Tasks:** Display all saved tasks from the database.
- **Complete Tasks:** Mark tasks as completed using checkboxes.
- **Delete Tasks:** Remove tasks when they are no longer needed.
- **Persistent Storage:** Store tasks in PostgreSQL so they remain available after restarting the application.
- **MVC Architecture:** Organize the application using Models, Views, and Controllers.

## 🛠️ Technologies Used

| Technology   | Purpose                                    |
| ------------ | ------------------------------------------ |
| HTML         | Application structure                      |
| CSS          | Styling and layout                         |
| JavaScript   | DOM manipulation and frontend interactions |
| EJS          | Dynamic rendering of HTML pages            |
| Node.js      | Backend JavaScript runtime                 |
| Express.js   | Server and routing                         |
| PostgreSQL   | Database management                        |
| pg           | PostgreSQL connectivity                    |
| dotenv       | Environment variable management            |
| Git & GitHub | Version control and project hosting        |

## 📁 Project Structure

```text
fullstack-todo/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── taskController.js
│
├── models/
│   └── taskModel.js
│
├── routes/
│   └── taskRoutes.js
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
│
├── views/
│   └── index.ejs
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/AtirekMani/my-personal-to-do.git
```

### 2. Navigate to the project directory

```bash
cd my-personal-to-do
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory and add your PostgreSQL database credentials:

```env
DB_USER=your_username
DB_HOST=localhost
DB_NAME=your_database
DB_PASSWORD=your_password
DB_PORT=5432
```

### 5. Create the PostgreSQL table

Execute the following SQL query in your PostgreSQL database:

```sql
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    task TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT FALSE
);
```

### 6. Start the application

```bash
node server.js
```

Or, if you have nodemon installed:

```bash
nodemon server.js
```

### 7. Open the application

Visit:

```text
http://localhost:3000
```

## 📚 What I Learned

Through this project, I gained practical experience in:

- Building dynamic web pages using EJS.
- Handling user interactions using JavaScript and DOM manipulation.
- Creating backend applications using Node.js and Express.
- Implementing RESTful routes and understanding HTTP methods.
- Connecting a PostgreSQL database with a Node.js application.
- Performing CRUD operations (Create, Read, Update, Delete).
- Understanding MVC architecture and separation of concerns.
- Using the Fetch API to communicate between frontend and backend.
- Managing project versions using Git and GitHub.

## 🔮 Future Improvements

- Add user authentication and authorization.
- Implement task editing functionality.
- Add task categories and priority levels.
- Improve the user interface and responsiveness.
- Explore React for frontend development.

## 👨‍💻 Author

**Atirek Mani Diggal**

GitHub: [@AtirekMani](https://github.com/AtirekMani)

---

_Built as a hands-on full-stack web development learning project._
