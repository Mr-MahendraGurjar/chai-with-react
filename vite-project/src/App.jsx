import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  let [counter, setCounter] = useState(0)
  let arrayList = [1,3,5,]

  const addValue = () => {
    setCounter(prevCouner => prevCouner + 1)
    setCounter(prevCouner => prevCouner + 1)
    setCounter(prevCouner => prevCouner + 1)
    console.log('Add Button Clicked, ', counter)
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      console.log('Remove Button Clicked, ', counter)
    } else {
      alert('Counter Value is 0')
    }
  }

  return (
    <>
      <h1 className='bg-green-500 text-blue-500 rounded-xl p-3 mb-3'>Tailwind test</h1>
      <Card username = "Hello" arrayList = {arrayList} buttonText = 'click me'/>
      <Card username = "Ji" arrayList = {arrayList} buttonText = 'visit me'/>
      <h2>Counter value {counter} </h2>
      <button
        onClick={addValue}
      >Add Button</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Button</button>
    </>
  )
}

export default App