import React from 'react'
import ReactDOM from 'react-dom'


// checks if a number is a prime number 
function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false
  }
  return true
}



function getColor(number) {
  if (isPrime(number)) return 'red' // return red for prime numbers
  if (number % 2 === 0) return 'green'  // return green for even numbers
  return 'yellow' // return yellow for odd numbers
}


// box item component
const BoxItem = ({ number, color }) => {
  return (
    <li style={{ backgroundColor: color }} className="box-item">
      {number}
    </li>
  )
}


// box list component
const BoxList = ({ numbers }) => {
  const list = numbers.map((number, index) => <BoxItem key={index} number={number} color={getColor(number)} />)
  return list
}


const App = () => {
  return (
    <main>
      <ul className="box-list">
        <BoxList numbers={Array.from(Array(31).keys())}/>
      </ul>
    </main>
  )
}


// get the root element from the dom
const rootElement = document.querySelector('#root')

// render the app on the DOM
ReactDOM.render(<App />, rootElement)