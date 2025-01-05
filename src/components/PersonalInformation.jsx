import React from 'react'
import { myinformation } from '../constants/myinformation'

const PersonalInformation = () => {
  return (
    <>
    <div className='personalInfo'>
      <h2>Name : {myinformation.name}</h2>
      <h2>Number : {myinformation.number}</h2>
      <h2>Email : {myinformation.email}</h2>
      </div>
    </>
  )
}

export default PersonalInformation
