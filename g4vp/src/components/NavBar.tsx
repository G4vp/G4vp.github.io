import "./NavBar.css"
import {Link} from "react-router-dom"

import { useLocation } from 'react-router-dom';

function CheckLocation(path : string): string {
  const location = useLocation();
  return location.pathname === path ? "current-location" : "";
}

function NavBar() {
  return (
  <nav className="nav-bar">
    <ul className="nav-links">
      <li>
        <Link to="/" className={`nav-direction ${CheckLocation("/")}`}>about me</Link>
      </li>
      <li>
        <Link to="/projects" className={`nav-direction ${CheckLocation("/projects")}`}>projects</Link>
      </li>
      <li>
        <Link to="/resume" className={`nav-direction ${CheckLocation("/resume")}`}>resume</Link>
      </li>
    </ul>
  </nav>);
}

export default NavBar
