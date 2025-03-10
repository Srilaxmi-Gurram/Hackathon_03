import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>DataQueryAI</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/visualization">Visualization</Link>
        <Link to="/reports">Reports</Link>
      </div>
    </nav>
  );
}
