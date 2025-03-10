import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to DataQueryAI</h1>
      <p>Upload your CSV file to start analyzing data.</p>
      <Link to="/upload">
        <button className="button">Get Started</button>
      </Link>
    </div>
  );
}
