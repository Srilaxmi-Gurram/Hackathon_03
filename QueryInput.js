import { useState } from "react";

export default function QueryInput({ setResponse, setChartData }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleQuerySubmit = async () => {
    if (!query.trim()) {
      setError("Please enter a query.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }

      const data = await response.json();
      
      setResponse(data.results || `Results for query: "${query}"`);
      setChartData(data.chartData || []);

    } catch (error) {
      setError("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input"
        placeholder="Ask a question..."
      />
      <button onClick={handleQuerySubmit} className="button" disabled={loading}>
        {loading ? "Processing..." : "Submit"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
