import React from 'react'
import NewSocialInformation from '../../components/props/NewSocialInformation';
import NewExperiences from '../../components/props/NewExperiences';

const PracticeConditionalRendering = () => {
  const gender = 'female';
  const age = 28;

  const isNewJoiny = true;
  // mount (Initial render), update (remount), unmount,

  // if (age > 25) {
  //   // <h1> Adult </h1>
  // }
  // double ampersand &&
  return (
    <>
      <h1>
        {/* By string/value */}
        {gender === 'male' ? 'MAN' : 'WOMAN'} 
      </h1>
    <button>Press me</button>
      {/* By HTML TAGS */}
      {age > 25 ? <h1> Adult </h1> : <h6> Child </h6>}
      {/* {isNewJoiny ? <NewSocialInformation/> : <NewExperiences/> } */}
      {isNewJoiny === true && <NewExperiences/>}
    </>
  )
}

export default PracticeConditionalRendering