import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:2007/admin/viewstudents');
        setStudents(response.data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (studentId) => {
    try {
      const response = await axios.delete(`http://localhost:2007/admin/deletestudent/${studentId}`);
      alert(`Student with ID ${studentId} deleted successfully!`);
      setStudents(students.filter((student) => student.id !== studentId));
    } catch (error) {
      console.error('There was an error!', error);
      alert('Failed to Delete Student');
    }
  };

  return (
    <div className="table-container">
      <h2>View All Students</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Branch</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.branch}</td>
              <td>{student.year}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .table-container {
          max-width: 1000px;
          margin: 40px auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }

        th, td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: #f2f2f2;
        }

        button.delete-btn {
          background-color: #e74c3c;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 8px;
          cursor: pointer;
        }

        button.delete-btn:hover {
          background-color: #c0392b;
        }
      `}</style>
    </div>
  );
};

export default ViewAllStudents;
