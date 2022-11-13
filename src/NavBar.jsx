import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h3 className="navbar-title">Yonch's Todo List</h3>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/AddTask">Add Task</Link>
        <Link to="/AddCollaborators">Add Collaborators</Link>
      </div>
    </nav>
  );
};

export default NavBar;
