import React from 'react'

// destructing
// const user = {
//   name: 'rayyan irfan',
//   designation: 'Software Engineer'
// };

// const {  name, designation } = user;
// const NewPersonalInformation = (props) => {
//   console.log('props', props);
//   return (
//     <>
//     <div className='personalInfo'>
//         <h1>{props.name}</h1>
//         <h1>{props.designation}</h1>
//       </div>
//     </>
//   )
// }

const NewPersonalInformation = ({ name, designation }) => {
  // console.log('props', props);
  return (
    <>
    <div className='personalInfo'>
        <h1>{name}</h1>
        <h1>{designation}</h1>
      </div>
    </>
  )
}

export default NewPersonalInformation
