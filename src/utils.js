import { db } from './firebaseApp'
import { collection,onSnapshot } from 'firebase/firestore'


export const readExpenses=(setExpenses)=>{
    const expenselistRef=collection(db,'expenselist')
    const unsubscribe=onSnapshot(expenselistRef,(snapshot)=>{
      setExpenses(snapshot.docs.map(doc=>({...doc.data(),id:doc.id }) ));
      console.log(snapshot.docs);
    })
    return ()=>unsubscribe()
}