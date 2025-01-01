import React from 'react'

const PracticePage = () => {
  // Javascript code here
  const name = 'Mudassir ALi Khan';
  const habbits = ['Reading', 'Coding', 'Gaming', 'Watching Movies'];
  return (
    <>
     <h1>Name = {name}</h1> 
      Habbits = <h2> {habbits.join(', ')}</h2>
    </>
  )
}

export default PracticePage