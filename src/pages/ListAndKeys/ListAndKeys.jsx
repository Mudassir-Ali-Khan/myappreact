import React from 'react'
import Table from '../../components/Table/Table';

const ListAndKeys = () => {
  const names = ['rayyan', 'irfan', 'mudassir', 'ali', 'khan', 'khan'];

  const employees = [
    {
       image: 'https://static.vecteezy.com/system/resources/previews/043/362/843/non_2x/cartoon-boy-avatar-face-free-png.png',
       firstname: 'Mudassir',
       lastname: 'Ali Khan',
       email: 'mudassir778.3@gmail.com',
       address: 'Islamabad',
       gender: 'Male',
    },
    {
       image: 'https://w7.pngwing.com/pngs/782/115/png-transparent-avatar-boy-man-avatar-vol-1-icon-thumbnail.png',
       firstname: 'John',
       lastname: 'Doe',
       email: 'John.3@gmail.com',
       address: 'London',
       gender: 'Male',
    },
    {
       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CJFO0FM4w0y3PC7hX0UQ0dpCXmD8iXqlhA&s',
       firstname: 'Sara',
       lastname: 'Williams',
       email: 'Williams778.3@gmail.com',
       address: 'New York',
       gender: 'Female',
    },
    {
       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASDQ45LDMwGuMOPrEjGKXZDTdFMFGojhawQ&s',
       firstname: 'Han',
       lastname: 'Doe',
       email: 'Han78.3@gmail.com',
       address: 'Lahore',
       gender: 'Male',
    },
    {
       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2u-ayfUrdVa34bKlbVNtsuCmDIPXe09NCjQ&s',
       firstname: 'Lara',
       lastname: 'James',
       email: 'Lara@gmail.com',
       address: 'Manchester',
       gender: 'Female',
    },
    
  ]

  return (
    <>
        {/* <h1>{names.join(', ')}</h1> */}
        {/* for loop X, we will use map function  */}
        {/* {names.map((item, index) => {
          return <h1 key={index}>{item}</h1>
        })}
        <hr />
        {names.map(function (item, index) {
          return <h1 key={index}>{item}</h1>
        })}
        <hr />
        {names.map((item, index) => <h1 key={index}>{item}</h1>)} */}
        <div>
          <Table employees={employees} />
        </div>
    </>
  )
}

export default ListAndKeys