//https://openapi.programming-hero.com/api/all
//import { useState } from 'react'
import { Suspense } from 'react';
import './App.css'
import Countris from './componant/countris'

const countryFace = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json());


function App() {
  // const [count, setCount] = useState(0)
    const countrisdata = countryFace

  return (
    <>
      <Suspense fallback="country is loding......">
        <Countris countrisdata ={countrisdata}></Countris>
      </Suspense>
        
      
    </>
  )
}

export default App
