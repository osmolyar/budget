import { useEffect, useState } from 'react';
import {  Container, ModalDescription} from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';

import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';
import {useSelector} from 'react-redux'
function App() {
  
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState();
  const entries = useSelector(state => state.entries)
  const isOpenRedux = useSelector(state => state.modals.isOpen)

  useEffect(() => {
    if(!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      // setEntries(newEntries)
      resetEntry()
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

    function editEntry(id) {
      console.log('edit entry with id ', id)
      if (id) {
        const index = entries.findIndex(entry => entry.id === id)
        const entry = entries[index]
        setEntryId(id)
        setDescription(entry.description)
        setValue(entry.value)
        setIsExpense(entry.isExpense)
        setIsOpen(true);
      }
    }

    function addEntry() {
      const result= entries.concat({
        id: entries.length+1, 
        description, 
        value, isExpense})
        console.log('result', result)
        console.log('entries', entries)
        // setEntries(result)
        resetEntry()
    }

    function resetEntry() {
      setDescription('');
      setValue('')
      setIsExpense(true)
    }
  return (
   <Container>
     <MainHeader title='Budget' />
     <DisplayBalance label='Your Balance:' value={total} size='small'/>

     <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>
     
     <MainHeader title="History" type="h2" />
     <EntryLines 
      entries={entries} 
      editEntry={editEntry} 
      />
  
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm  
                addEntry={addEntry}
                description={description} 
                value={value} 
                isExpense={isExpense} 
                setDescription={setDescription} 
                setValue={setValue} 
                setIsExpense={setIsExpense}
                />
      <ModalEdit   isOpen={isOpenRedux} setIsOpen={setIsOpen}
            addEntry={addEntry}
            description={description} 
            value={value} 
            isExpense={isExpense} 
            setDescription={setDescription} 
            setValue={setValue} 
            setIsExpense={setIsExpense}
      ></ModalEdit>
   </Container>
  );
}

export default App;
