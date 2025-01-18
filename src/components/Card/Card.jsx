import React from 'react'
import '../../styles/card.css';

const Card = ({ name, designation, image }) => {
  return (
    <>
      <div className='card'>
        <img src={image} alt="" />
        <div>
            <h4>Name = {name}</h4>
            <h4>Designation = {designation}</h4>
        </div>
      </div>
    </>
  )
}

export default Card