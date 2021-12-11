import { NavLink } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="">Accueil</NavLink>
            <NavLink to="/tasks">Mes tâches</NavLink>
            <NavLink to="/users">Utilisateurs</NavLink>
            <NavLink to="/comments">Commentaires</NavLink>
            <NavLink to="/about">A propos</NavLink>
        </nav>
    )
}
