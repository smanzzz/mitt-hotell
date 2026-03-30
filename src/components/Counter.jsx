import { useState } from "react";

export const Counter  = () => {

    const [ counter, setCounter] = useState(0)

    const increment = () => {

    } 

     return (
        <>
        <h2>Counter</h2>
           <button onClick ={()=> setCounter(counter + 1)} > +</button>  
           <p>{counter}</p>
           <button onClick ={()=> setCounter(counter - 1)} > -</button>  
        </>
    )
}