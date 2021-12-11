import "./Comments.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Comments() {
  const [comments, setComments] = useState([
    {
      id: 1,
      pseudo: "Kirikou",
      message: "Je ne suis pas grand mais je suis vaillant",
    },
    {
      id: 2,
      pseudo: "Jean-Claude",
      message: "Oublies que t'as aucune chance, vas-y fonce!",
    },
  ]);

  const [addCommentsPseudo, setAddCommentsPseudo] = useState("");

  const [addCommentsMessage, setAddCommentsMessage] = useState("");

  function handlePseudo(event) {
    setAddCommentsPseudo(event.target.value);
  }

  function handleMessage(event) {
    setAddCommentsMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (addCommentsPseudo && addCommentsMessage) {
      const newComment = {
        id: uuidv4(),
        pseudo: addCommentsPseudo,
        message: addCommentsMessage,
      };
      setAddCommentsPseudo("");
      setAddCommentsMessage("");
      setComments([...comments, newComment]);
    }
  }

  return (
    <div className="comments">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Ajouter un commentaire</h1>
        <input
          type="text"
          placeholder="Votre pseudo"
          value={addCommentsPseudo}
          onChange={handlePseudo}
        />
        <input
          className="message"
          type="textarea"
          placeholder="Votre message"
          value={addCommentsMessage}
          onChange={handleMessage}
        />
        <button type="submit">OK</button>
      </form>
      <div className="listComments">
        <h1>Liste des commentaires ({comments.length})</h1>
        <ul>
          {comments.map((com) => (
            <li key={com.id}>
              {com.pseudo} {com.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
