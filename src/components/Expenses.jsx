import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { readExpenses } from '../utils'
import List from '@mui/material/List';
import { Expense } from './Expense';

export const Expenses = () => {
    const [expenses,setExpenses]=useState([])

    useEffect(()=>{
        readExpenses(setExpenses)
    },[])

    console.log(expenses);

  return (
    <div>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {expenses.map(obj=><Expense key={obj.id} {...obj}/>)}
        </List>
    </div>
  )
}

