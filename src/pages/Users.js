import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Users.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="users">
      <ul>
        {users.map((user) => (
          <li key={user.id} className="user">
            {user.name}
            <button className="button">
              <Link className="button-text" to={"/users/" + user.id}>Voir le détail</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
