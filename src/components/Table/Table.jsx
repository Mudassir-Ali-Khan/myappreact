import React from 'react'
import '../../styles/table.css'
const Table = ({image, firstname, lastname, email, address, gender}) => {
    
  return (
    <>
      <div>
        <table className='table' border={1}>
            <tr>
                <th>Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Gender</th>
            </tr>
            <tr>
                <td><img src={image} alt="" /></td>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td className='badge'>{gender}</td>
            </tr>
        </table>
      </div>
    </>
  )
}

export default Table
