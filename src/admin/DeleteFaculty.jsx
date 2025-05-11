import React, { useState } from 'react';
import axios from 'axios';

const DeleteFaculty = () => {
  const [facultyId, setFacultyId] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:2007/admin/deletefaculty/${facultyId}`);
      alert(`Faculty with ID ${facultyId} deleted successfully!`);
      setFacultyId(''); // Clear input after successful deletion
    } catch (error) {
      console.error('There was an error!', error);
      alert('Failed to Delete Faculty');
    }
  };

  return (
    <div className="form-container">
      <h2>Delete Faculty</h2>
      <input
        type="number"
        placeholder="Enter Faculty ID"
        value={facultyId}
        onChange={(e) => setFacultyId(e.target.value)}
        required
      />
      <button onClick={handleDelete}>Delete Faculty</button>

      <style jsx>{`
        .form-container {
          max-width: 500px;
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

        input {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 16px;
        }

        button {
          width: 100%;
          padding: 12px;
          background-color: #e74c3c;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          background-color: #c0392b;
        }
      `}</style>
    </div>
  );
};

export default DeleteFaculty;
