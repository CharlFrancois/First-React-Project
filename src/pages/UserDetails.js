import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./UserDetails.css";

export default function TaskDetails() {
  let params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log(params);
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + params.userid)
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  return (
    <div className="user-details">
      <h1>Information sur l'utilisateur : {user.name}</h1>
      <span><b>Email : </b> {user.email}</span>
      <span><b>Numéro de tel : </b>{user.phone}</span>
      <span>
        <b>Adresse : </b>{user?.address?.street}
        <br /> {user?.address?.suite} <br /> {user?.address?.city} <br />{" "}
        {user?.address?.zipcode}
      </span>
      <div>
        <span><b>Site web : </b></span>
        <a href={"https://www." + user.website}>{user.website}</a>
      </div>
      <span><b>Nom de société : </b>{user?.company?.name}</span>
    </div>
  );
}
