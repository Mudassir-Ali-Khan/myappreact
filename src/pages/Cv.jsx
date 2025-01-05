import React from 'react'

import '../styles/cvStyle.css'
import PersonalInformation from '../components/PersonalInformation'
import SocialInformation from '../components/SocialInformation'
import Experiences from '../components/Experiences'

const Cv = () => {
  return (
    <>
      <PersonalInformation/>
      <SocialInformation/>
      <Experiences/>
    </>
  )
}

export default Cv;
