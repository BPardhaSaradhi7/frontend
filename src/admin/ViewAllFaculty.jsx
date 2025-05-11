import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAllFaculty = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await axios.get('http://localhost:2007/admin/viewfaculty');
        setFaculty(response.data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };

    fetchFaculty();
  }, []);

  const handleDelete = async (facultyId) => {
    try {
      const response = await axios.delete(`http://localhost:2007/admin/deletefaculty/${facultyId}`);
      alert(`Faculty with ID ${facultyId} deleted successfully!`);
      setFaculty(faculty.filter((facultyMember) => facultyMember.id !== facultyId));
    } catch (error) {
      console.error('There was an error!', error);
      alert('Failed to Delete Faculty');
    }
  };

  return (
    <div className="table-container">
      <h2>View All Faculty</h2>
      <table className="faculty-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((facultyMember) => (
            <tr key={facultyMember.id}>
              <td>{facultyMember.id}</td>
              <td>{facultyMember.name}</td>
              <td>{facultyMember.email}</td>
              <td>{facultyMember.department}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(facultyMember.id)}>
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

export default ViewAllFaculty;
