import React, { Fragment } from 'react'
import {  Grid, Icon, Segment } from 'semantic-ui-react'

function EntryLine( {id, textAlign="right", columns="3", description, value, isExpense=false, deleteEntry, editEntry}) {

    return (
      <Fragment>
        <Segment color={isExpense? 'red' : 'green'}>
        <Grid columns={columns} textAlign={textAlign}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">{description}</Grid.Column>
            <Grid.Column width={3} textAlign="right">{value}</Grid.Column>
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