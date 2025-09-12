import "./NavBar.css"

function NavBar() {
  return (
  <nav className="nav-bar">
    <ul className="nav-links">
      <li>
        <a href="/">About Me</a>
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
      <li>
        <a href="/resume">Resume</a>
      </li>
    </ul>
  </nav>);
}

export default NavBar
