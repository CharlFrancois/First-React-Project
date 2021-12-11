import { useEffect, useState } from "react";
import axios from "axios";
import "./Tasks.css";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom"

export default function Tasks() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  useEffect(() => {
    document.title = `Nbr de tâches (${todos.length})`
  }, [todos])

  const [addTask, setAddTask] = useState("");

  function handleTask(event) {
    setAddTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (addTask) {
      const newTask = { id: uuidv4(), title: addTask, completed: false };
      setAddTask("");
      setTodos([...todos, newTask]);
    }
  }

  function deleteTask(task) {
      setTodos(todos.filter(item => task !== item.id))
  }

  function checkbox(taskId) {
    const currTask = [...todos]

    const index = currTask.findIndex(task => task.id === taskId)
    currTask[index].completed = !currTask[index].completed

    setTodos(currTask)
  }

  return (
    <div className="todos">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Ajouter une tâche</h1>
        <input
          type="text"
          placeholder="Votre tâche"
          value={addTask}
          onChange={handleTask}
        />
        <button type="submit">OK</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li className={todo.completed ? "completed" : "show"} key={todo.id}>
              <input type="checkbox" checked={todo.completed} onChange={() => checkbox(todo.id)} />
              <button className="btn btn-primary" onClick={() => deleteTask(todo.id)}>Supprimer cette tâche</button>
            {todo.title}
              <Link to={'/tasks/' + todo.id}>Vers ailleurs</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
