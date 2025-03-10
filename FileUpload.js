import { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="file-upload">
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
}
