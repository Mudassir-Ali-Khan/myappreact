import React from 'react'

function handleClick(e) {
    console.log('Button clicked using external function', e)
}

// Events name will be in camelCase (onclick ==> onClick)
// Events are the pure js functions

const Events = () => {
  return (
    <div>
        {/* On Click Events */}
        <h3>On Click Events</h3>
        <button id='mybutton' onClick={function (e) {
            console.log('Button clicked', e);
        }}>Press me</button>
        <br /> <br />
        <button onClick={handleClick}>
            Press me using external function
        </button>

        <br /> <br />
        <button onClick={(e) => {
            // console.log('Button clicked using arrow function', e)
            window.confirm('Button clicked using arrow function')
        }}> Press me arrow function</button>

        <hr />
        <h3>On Double Click Events</h3>
        {/* On Double Click */}
        <button onDoubleClick={() => {
            console.log("Button double clicked")
        }}>Press me twice</button>

        <hr />
        <h3>
            On Mouse Enter and Leave Events
        </h3>
        <button onMouseEnter={() => {
            console.log("Mouse entered");
        }} onMouseLeave={(e) => {
            console.log("Mouse left", e)
        }}>
            Hover on me
        </button>

        <hr />
        <h3> Input fields events</h3>
        <span>On Change</span>
        <input type="text" onChange={(e) => {
            console.log("Input field changed", e.target.value);
        }} placeholder='Enter any text...' />

        <br /> <br />
        <span>Focus</span>
        {/* On Focus */}
        <input type="text" onFocus={() => {
            console.log("Input field focused")
        }} placeholder='Enter any text...' />

        <input type="text" onMouseEnter={() => {
            console.log("Hello")

        }}/>
        <input type="text" onBlur={() => {
            console.log("Blur")
        }}/>
    </div>
  )
}

export default Events