import React from 'react'
import { myinformation } from '../constants/myinformation'

const SocialInformation = () => {
  return (
    <>
    <div className='socialInfo'>
          <h1>Social Information</h1>
          <h2>{myinformation.tiktok}</h2>
    </div> 
    </>
  )
}

export default SocialInformation
