import React from 'react'
import '../../styles/table.css'
const Table = ( { employees }) => {
    
  return (
    <>
      <div>
        <table className='table' border={1}>
          <thead>
            <tr>
                <th>Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => {
              return <tr key={index}>
                  <td><img src={employee.image}  alt="" /></td>
                  <td>{employee.firstname}</td>
                  <td>{employee.lastname}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>
                    <div className='badge-box'>
                      <span className='badge' style={{ backgroundColor: employee.gender === 'Male' ? 'green' : 'pink' }}>{employee.gender}</span>
                    </div>
                  </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
