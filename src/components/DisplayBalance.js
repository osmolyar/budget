import React from 'react'
import { Statistic } from 'semantic-ui-react'

function DisplayBalance({size, color, textAlign="left", value, label}) {
    return (
     <Statistic size={size} color={color}>
        <Statistic.Label style={{textAlign:"left"}}>{label}</Statistic.Label>
        <Statistic.Value>{value}</Statistic.Value>
      </Statistic>
      )
}

export default DisplayBalance