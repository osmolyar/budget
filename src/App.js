import { useState } from 'react';
import {  Container} from 'semantic-ui-react';
import './App.css';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';

import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [entries, setEntries] = useState(initialEntries)

      // const deleteEntry = (id) => { }
      function deleteEntry(id) {
        const result = entries.filter(entry => entry.id !== id)
        console.log('entries', entries)
        console.log('result', result)
        setEntries(result)
    }
  return (
   <Container>
     <MainHeader title='Budget' />

     <DisplayBalances />
     
     <MainHeader title="History" type="h2" />
     <EntryLines entries={entries} deleteEntry={deleteEntry} />
  
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
   </Container>
  );
}

export default App;

var initialEntries = [
  { id:1,
    description : "Work income",
    value: "1000.00",
    isExpense: false
  },
  { 
    id: 2,
    description : "Water bill",
    value: "20.00",
    isExpense: true
  },
  {
    id: 3,
    description : "Rent",
    value: "300.00",
    isExpense: true
  },
  {
    id: 4,
    description : "Power bill",
    value: "50.00",
    isExpense: true
  },
]
