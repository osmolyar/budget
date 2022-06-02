import { useEffect, useState } from 'react';
import {  Container} from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';

import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';
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
 }, [])

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
        {...entry}
      ></ModalEdit>
   </Container>
  );
}

export default App;
