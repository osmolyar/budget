import React from 'react'
import { Statistic } from 'semantic-ui-react'

const defaultOptions = {
  significantDigits: 2,
  thousandsSeparator: ',',
  decimalSeparator: '.',
  symbol: '$'
}

const currencyFormatter = (value, options) => {
  if (typeof value !== 'number') value = Number(value)
  options = { ...defaultOptions, ...options }
  value = value.toFixed(options.significantDigits)

  const [currency, decimal] = value.split('.')
  return `${options.symbol} ${currency.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    options.thousandsSeparator
  )}${options.decimalSeparator}${decimal}`
}


function DisplayBalance({size, color, value, label}) {
    return (
     <Statistic size={size} color={color}>
        <Statistic.Label style={{textAlign:"left"}}>{label}</Statistic.Label>
        <Statistic.Value>{currencyFormatter(value,defaultOptions)}</Statistic.Value>
      </Statistic>
      )
}

export default DisplayBalance