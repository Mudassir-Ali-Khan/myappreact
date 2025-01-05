import React from 'react'
import NewPersonalInformation from '../../components/props/NewPersonalInformation'

const NewCV = () => {
  const name = "rayyan irfan";
  const designation = "Software Engineer";

  function sum(num1, num2) {
    return num1 + num2;
  }

  const myinformation = {
    name: 'Mudassir ALi Khan',
    number: '03244518606',
    email: 'mudassir778.3@gmail.com',
    experiences: `
        1. 3 years of experience in web development 
        2. 2 years of experience in mobile development
        3. 1 year of experience in game development
    `,
    tiktok: 'Mudassir ALi khan TIKTOK',
}

// facebook ? <div>
//     logo
//     <h4>facebook.com</h4>
// </div>: <></>

// gender, country, openToWork (true/false), facebook, snapchat, linkedin 

  return (
    <>
      <NewPersonalInformation name={name} designation={designation} />
    </>
  )
}

export default NewCV