import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const res = await axios.get('http://localhost:3030/api/reports');
      setReports(res.data);
    };
    fetchReports();
  }, []);

  return (
    <div>
      <h2>Student Performance Reports</h2>
      <ul>
        {reports.map((r, i) => (
          <li key={i}>{r.studentName} - Score: {r.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewReports;
