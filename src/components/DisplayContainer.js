import React from 'react'
import {  Container} from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';
import DisplayBalances from './DisplayBalances';
import EntryLines from './EntryLines';

import MainHeader from './MainHeader';
import ModalEdit from './ModalEdit';
import NewEntryForm from './NewEntryForm';

function DisplayContainer({total, incomeTotal, expenseTotal, isOpen, entries, entry}) {
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
    )
}

export default DisplayContainer