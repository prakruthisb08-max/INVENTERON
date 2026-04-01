import React from 'react';

function StudentsPage() {
  const students = [
    { id: 1, name: 'Rahul', role: 'Student' },
    { id: 2, name: 'Priya', role: 'Student' },
    { id: 3, name: 'Aman', role: 'Student' }
  ];

  return (
    <div>
      <h2>Students List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsPage;
