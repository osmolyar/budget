import React, { Fragment, useState } from 'react'
import {  Grid, Icon, Segment } from 'semantic-ui-react'
import ModalEdit from './ModalEdit'

function EntryLine( {id, textAlign="right", columns="3", description, value, isExpense=false, deleteEntry}) {

  const [isOpen, setIsOpen] = useState(false)
    return (
      <Fragment>
        <Segment color={isExpense? 'red' : 'green'}>
        <Grid columns={columns} textAlign={textAlign}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">{description}</Grid.Column>
            <Grid.Column width={3} textAlign="right">{value}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={()=>setIsOpen(true)}/>
              <Icon name='trash' bordered onClick={() => {deleteEntry(id)}}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen}></ModalEdit>
      </Fragment>
    )
}

export default EntryLine