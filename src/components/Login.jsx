import React, { useState } from 'react'
import   './Login.css'

export const Login = () => {

  const [name , setname] = useState()

  function change(e) {
    
    setname(e.target.value);
   
  }

  function handleSubmit(e) {
    
    e.preventDefault(   )
   setname(e.target.value)
   console.log(name)

    
  }
  return (
    
    <div className='main'>
      

      <h1>Hi my name is : {name}</h1>
      <form onSubmit={handleSubmit}>
      <input  className='input'
     
      
      onChange={change}
       />
      </form>
      <button >submit</button>


    </div>
  )
}
