import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, LineChart, Line } from "recharts";

export default function Visualization({ chartData, chartType, setChartType }) {
  return (
    <div>
      <h2>Visualization</h2>
      <select value={chartType} onChange={(e) => setChartType(e.target.value)} className="input">
        <option value="bar">Bar Chart</option>
        <option value="pie">Pie Chart</option>
        <option value="line">Line Chart</option>
      </select>

      {chartType === "bar" && <BarChart width={400} height={300} data={chartData}>
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>}

      {chartType === "pie" && <PieChart width={400} height={300}>
        <Pie data={chartData} dataKey="value" nameKey="label" fill="#82ca9d" label />
      </PieChart>}
    </div>
  );
}