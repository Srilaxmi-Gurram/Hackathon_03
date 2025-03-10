import { useState } from "react";
import QueryInput from "../components/QueryInput";
import Visualization from "../components/Visualization";

export default function Dashboard() {
  const [response, setResponse] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [chartType, setChartType] = useState("bar");

  return (
    <div>
      <h1>Query Dashboard</h1>
      <QueryInput setResponse={setResponse} setChartData={setChartData} />
      {response && <div className="response-box">{response}</div>}
      <Visualization chartData={chartData} chartType={chartType} setChartType={setChartType} />
    </div>
  );
}
