import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p className='danger p'>danger p</p>
    <p className='p yellow'>yellow yellow dirty fellow
    <ul>
      <li>Nested</li>
      <li>Nested</li>

    </ul>
    <ol className='ordered'>
      <li>active hover class</li>
      <li>Nested</li>

    </ol>
    </p>

    <h3 className='same1'>Same 1  using mixin</h3>
    <h3 className='same1'>Same 2 using mixin</h3>

    <h2 className='changeColor'>change color by passing parameter to mixin</h2>
    <h2 className='function'>change color using function</h2>
    </>
    
  )
}

export default App
