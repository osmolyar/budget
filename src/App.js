import { useEffect, useState } from 'react';
import {  Container} from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';

import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';
import {useSelector} from 'react-redux'
function App() {
  
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState();
  const entries = useSelector(state => state.entries)
  const isOpen= useSelector(state => state.modals.isOpen)

  useEffect(() => {
    if(!isOpen) {
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isOpen])

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

  return (
   <Container>
     <MainHeader title='Budget' />
     <DisplayBalance label='Your Balance:' value={total} size='small'/>

     <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>
     
     <MainHeader title="History" type="h2" />
     <EntryLines 
      entries={entries} 
      />
  
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm  />
      <ModalEdit   
        isOpen={isOpen} 
      ></ModalEdit>
   </Container>
  );
}

export default App;
