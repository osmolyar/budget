import React, { Fragment } from 'react'
import {  Grid, Icon, Segment } from 'semantic-ui-react'

function EntryLine( {id, textAlign="right", columns="3", description, value, isExpense=false, deleteEntry, editEntry}) {

  const defaultOptions = {
    significantDigits: 2,
    thousandsSeparator: ',',
    decimalSeparator: '.',
    symbol: '$'
  }
  
  const currencyFormatter = (value, options) => {
    if (typeof value !== 'number') value = 0.0
    options = { ...defaultOptions, ...options }
    value = value.toFixed(options.significantDigits)
  
    const [currency, decimal] = value.split('.')
    return `${options.symbol} ${currency.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      options.thousandsSeparator
    )}${options.decimalSeparator}${decimal}`
  }

    return (
      <Fragment>
        <Segment color={isExpense? 'red' : 'green'}>
        <Grid columns={columns} textAlign={textAlign}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">{description}</Grid.Column>
            <Grid.Column width={3} textAlign="right">{currencyFormatter(value,defaultOptions)}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={()=>editEntry(id)}/>
              <Icon name='trash' bordered onClick={() => {deleteEntry(id)}}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      </Fragment>
    )
}

export default EntryLine