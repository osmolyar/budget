import {  Container,  Grid,  Icon, Segment } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
   <Container>
     <MainHeader title='Budget' />

     <DisplayBalance size="small" label="Incoming" value="1,045.50" />
     <DisplayBalances />
     
     <MainHeader title="History" type="h2" />
     <EntryLine color="red" columns="3" textAlign="right" description="income" value="$10.00"/>
     <EntryLine color="red" columns="3" textAlign="right" description="expense" value="$10.00" isExpense/>
     <EntryLine color="red" columns="3" textAlign="right" description="Something" value="$20.00"/>

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
   </Container>
  );
}

export default App;
