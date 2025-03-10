export default function ReportDownload() {
    const handleDownload = (type) => {
      alert(`Downloading report as ${type}`);
    };
  
    return (
      <div className="space-x-2">
        <button onClick={() => handleDownload("CSV")} className="bg-blue-500 text-white px-4 py-2 rounded">Download CSV</button>
        <button onClick={() => handleDownload("PDF")} className="bg-red-500 text-white px-4 py-2 rounded">Download PDF</button>
      </div>
    );
  }
  