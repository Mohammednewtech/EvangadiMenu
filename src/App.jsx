import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FoodItemTwo from './Componenet/FoodItemTwo'
import Data from './commonResource/data'
import FoodItems from './Componenet/FoodItems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div class="all-container">
      <header class="title">
        <h1>Evangadi Menu</h1>
        <div></div>
      </header>
    {/* <FoodItems />  */}
    {Data.map((newData, index)=>{
      return(
        <FoodItemTwo 
            key={index}
            title={newData.title}
            price={newData.price} img={newData.img} 
            desc={newData.desc} link={newData.link}
            
        />
      )
    }) }  
     </div>  

     <FoodItems />
    </>
    
  )
}

export default App
