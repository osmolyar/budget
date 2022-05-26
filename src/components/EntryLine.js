import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

function EntryLine({textAlign="right", columns="3", description, value, isExpense=false}) {
    return (
        <Segment color={isExpense? 'red' : 'green'}>
        <Grid columns={columns} textAlign={textAlign}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">{description}</Grid.Column>
            <Grid.Column width={3} textAlign="right">{value}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered/>
              <Icon name="trash"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default EntryLine