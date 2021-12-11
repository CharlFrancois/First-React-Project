import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function TaskDetails() {
  let params = useParams();
  const [task, setTask] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/" + params.taskid)
      .then((res) => {
        setTask(res.data);
      });
  }, []);

  return (
    <div>
      <h1>Les détails d'une tâche {params.taskid}</h1>
      <span>{task.title}</span>
    </div>
  );
}
