import React, { useState } from 'react'

// isBoyAvatar === true ? false : true
const AvatarConverter = () => {
  const [isBoyAvatar, setIsBoyAvatar] = useState(true);

  const handleClick = () => {
    // setIsBoyAvatar(isBoyAvatar === true ? false : true)
    setIsBoyAvatar(!isBoyAvatar);
  }

//   setInterval

  return (
    <>
    {isBoyAvatar === true ? <img style={{ borderRadius: '50%', height: '100px', width: '100px' }} src="https://img.freepik.com/premium-vector/cute-boy-smiling-cartoon-kawaii-boy-illustration-boy-avatar-happy-kid_1001605-3445.jpg?semt=ais_hybrid" alt="" />
        : <img style={{ borderRadius: '50%', height: '100px', width: '100px' }} src="https://static.vecteezy.com/system/resources/thumbnails/025/472/894/small_2x/face-of-kawaii-girl-smiling-watercolor-clipart-ai-generated-photo.jpg" alt="" />
     }
     {new Date().toISOString()}
        <br /> <br />
        <button onClick={handleClick}>Convert to {isBoyAvatar ? 'Female' : 'Male'}</button>
    </>
  )
}

export default AvatarConverter