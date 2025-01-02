import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "Tahasin",
    age: 23,
    address: {
      city: "Cox's Bazar",
      state: "Chittagong",
      country: "Bangladesh",
    }
  }
  let newArr = [1, 2, 3, 4, 5, 6, 7]
  

  return (
    <>
      <h className="text-3xl bg-green-500 p-3 rounded-md">Vite with Tailwind</h>
      <Card username="Tahasin"  post="CEO"/>
      <Card username="Tahasin"  post="Chairman" myArr={newArr}/>
      <Card/>
    </>
  )
}

export default App
