import React, { useState } from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";
import Counter from "./components/Counter/Counter";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="To Do"
          onAddTask={addTask}
          taskState="To Do"
          tasks={tasks.filter((t) => t.state === "To Do")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Doing"
          onAddTask={addTask}
          taskState="Doing"
          tasks={tasks.filter((t) => t.state === "Doing")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Finished"
          onAddTask={addTask}
          taskState="Finished"
          tasks={tasks.filter((t) => t.state === "Finished")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <Counter title="Counter" />
      </div>
    </div>
  );
}
