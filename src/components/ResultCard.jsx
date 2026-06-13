export function ResultCard({ amount, fromCurrency, result, toCurrency, exchangeRate }) {
  if (result === null) return null

  return (
    <div className='result-section'>
      <div className='result-card'>
        <p className='result-label'>Sonuç</p>
        <p className='result-amount'>
          <span>{amount}</span>
          <span className='currency-code'>{fromCurrency}</span>
          <span className='equals'>=</span>
          <span>{result}</span>
          <span className='currency-code'>{toCurrency}</span>
        </p>
        {exchangeRate && (
          <p className='exchange-rate'>
            1 {fromCurrency} = {exchangeRate} {toCurrency}
          </p>
        )}
      </div>
    </div>
  )
}
