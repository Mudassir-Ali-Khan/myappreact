import React from 'react'
import Card from '../../components/Card/Card';

const ListAndKeys = () => {
  const names = ['rayyan', 'irfan', 'mudassir', 'ali', 'khan', 'khan'];

  const employees = [
    {
       name: 'Rayyan Irfan',
       designation: 'Software Engineer',
       image: 'https://static.vecteezy.com/system/resources/previews/043/362/843/non_2x/cartoon-boy-avatar-face-free-png.png',
    },
    {
        name: 'Mudassir Ali Khan',
        designation: 'Software Developer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwpwIGtO_OR_yKNz6_cqracXagI9uhqt0cw&s',
     },
     {
        name: 'John Doe',
        designation: 'Software Testor',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pc0jhWSk63wc7aDE0uoUTdEWC1xcDVAd2Q&s',
     },
     {
        name: 'David',
        designation: 'Software Deployment Engineer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yreia01OZM36-CqD2Qxw41mVeRsfBOeukA&s',
     },
     {
        name: 'David',
        designation: 'Software Deployment Engineer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yreia01OZM36-CqD2Qxw41mVeRsfBOeukA&s',
     }, {
        name: 'David',
        designation: 'Software Deployment Engineer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yreia01OZM36-CqD2Qxw41mVeRsfBOeukA&s',
     }, {
        name: 'David',
        designation: 'Software Deployment Engineer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yreia01OZM36-CqD2Qxw41mVeRsfBOeukA&s',
     }, {
        name: 'David',
        designation: 'Software Deployment Engineer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yreia01OZM36-CqD2Qxw41mVeRsfBOeukA&s',
     }, {
        name: 'David',
        designation: 'Software Deployment Engineer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yreia01OZM36-CqD2Qxw41mVeRsfBOeukA&s',
     }, {
        name: 'David',
        designation: 'Software Deployment Engineer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yreia01OZM36-CqD2Qxw41mVeRsfBOeukA&s',
     }, {
        name: 'David',
        designation: 'Software Deployment Engineer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yreia01OZM36-CqD2Qxw41mVeRsfBOeukA&s',
     }, {
        name: 'David',
        designation: 'Software Deployment Engineer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yreia01OZM36-CqD2Qxw41mVeRsfBOeukA&s',
     }, {
        name: 'David',
        designation: 'Software Deployment Engineer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yreia01OZM36-CqD2Qxw41mVeRsfBOeukA&s',
     }, {
        name: 'David',
        designation: 'Software Deployment Engineer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yreia01OZM36-CqD2Qxw41mVeRsfBOeukA&s',
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
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
        }}>
            {employees.map((employee, index) => {
                return <Card name={employee.name} designation={employee.designation} image={employee.image} />
            })}
        </div>
    </>
  )
}

export default ListAndKeys