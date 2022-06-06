import React, {Component} from 'react'
import { useEffect, useState } from 'react';
import {useDispatch, useSelector, connect} from 'react-redux'
import { getAllEntries } from '../actions/entries.actions';
import {  Container} from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';
import DisplayBalances from './DisplayBalances';
import EntryLines from './EntryLines';

import MainHeader from './MainHeader';
import ModalEdit from './ModalEdit';
import NewEntryForm from './NewEntryForm';
import { render } from '@testing-library/react';

class DisplayContainer extends Component {

  state = {
    total: 0,
    incomeTotal: 0,
    expenseTotal: 0,
    entry:{}

}


componentDidUpdate(prevProps, prevState) {
  if (prevState.isOpen !== this.isOpen || prevState.id !== this.id) {
    const index = entries.findIndex(entry => entry.id === this.id);
    this.state.entry = entries[index]
  }
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.entries !== this.entries) {
        let totalIncomes = 0
        let totalExpenses=0;
        this.entries.map(entry=> {
          if(entry.isExpense) {
            return totalExpenses += Number(entry.value)
          } 
          return totalIncomes +=Number(entry.value)
        })
        this.state.expenseTotal=totalExpenses
        this.state.incomeTotal=totalIncomes
        this.state.total=totalIncomes - totalExpenses
        getAllEntries();
  }
}

componentDidMount() {
  getAllEntries();
}

//   useEffect(() => {
//       const index = entries.findIndex(entry => entry.id === id);
//       setEntry(entries[index])
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[isOpen, id])

//   useEffect(() =>
//   {
//     let totalIncomes = 0
//     let totalExpenses=0;
//     entries.map(entry=> {
//       if(entry.isExpense) {
//         return totalExpenses += Number(entry.value)
//       } 
//       return totalIncomes +=Number(entry.value)
//     })
//     setTotal(totalIncomes - totalExpenses)
//     setExpenseTotal(totalExpenses)
//     setIncomeTotal(totalIncomes)
//   },[entries])


//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllEntries())
//  }, [dispatch])

 render() {

    return (
      <Container>
      <MainHeader title='Budget' />
      <DisplayBalance label='Your Balance:' value={this.state.total} size='small'/>
 
      <DisplayBalances incomeTotal={this.state.incomeTotal} expenseTotal={this.state.expenseTotal}/>
      
      <MainHeader title="History" type="h2" />
      <EntryLines 
       entries={this.entries} 
       />
   
       <MainHeader title="Add new transaction" type="h3" />
       <NewEntryForm  />
       <ModalEdit   
         isOpen={this.isOpen}
         {...this.state.entry}
       ></ModalEdit>
    </Container>
    )
 }
}

const mapStateToProps = state => {
  return {
    entries: state.entries,
    isOpen: state.modals.isOpen,
    id: state.modals.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllEntries: () => dispatch(getAllEntries())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer)