import { useEffect, useState } from 'react';
import './App.css';
import DisplayContainer from './components/DisplayContainer';
import {useDispatch, useSelector} from 'react-redux'
import { getAllEntries } from './actions/entries.actions';

function App() {
  
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState();
  const [entry, setEntry]= useState()
  const entries = useSelector(state => state.entries)
  const {isOpen, id}= useSelector(state => state.modals)

  useEffect(() => {
      const index = entries.findIndex(entry => entry.id === id);
      setEntry(entries[index])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isOpen, id])

  useEffect(() =>
  {
    let totalIncomes = 0
    let totalExpenses=0;
    entries.map(entry=> {
      if(entry.isExpense) {
        return totalExpenses += Number(entry.value)
      } 
      return totalIncomes +=Number(entry.value)
    })
    setTotal(totalIncomes - totalExpenses)
    setExpenseTotal(totalExpenses)
    setIncomeTotal(totalIncomes)
  },[entries])


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEntries())
 }, [dispatch])

  return (
   <DisplayContainer total={total} incomeTotal={incomeTotal} expenseTotal = {expenseTotal} isOpen= {isOpen} entries={entries} entry={entry} />
    
  );
}

export default App;
