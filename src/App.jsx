import React,{ useEffect} from 'react'


import './App.css'

import { useState } from 'react'
import { Expenses } from './components/Expenses'


function App() {
  const [user,setUser]=useState(null)
  
 

  return (
    
      <div>
        <h1>My Expense Tracker</h1>
        <Expenses/>  

      </div>
   
  )
}

export default App
