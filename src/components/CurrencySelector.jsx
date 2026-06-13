export function CurrencySelector({
  fromCurrency,
  toCurrency,
  amount,
  currencies,
  onFromChange,
  onToChange,
  onAmountChange,
  onSwap
}) {
  return (
    <div>
      <div className='form-group'>
        <label htmlFor="amount">Miktar</label>
        <input
          id="amount" type="number" placeholder='0.00'
          value={amount} onChange={(e) => onAmountChange(e.target.value)}
          className='form-control form-input' step="0.01" min="0" />
      </div>

      <div className='currency-row'>
        <div className='form-group'>
          <label htmlFor="fromCurrency">Çıkış Para Birimi</label>
          <select
            id="fromCurrency" value={fromCurrency}
            onChange={(e) => onFromChange(e.target.value)}
            className='form-select form-input'
          >
            {currencies.map(curr => (
              <option key={curr} value={curr}>{curr}</option>
            ))}
          </select>
        </div>

        <button
          type='button'
          onClick={onSwap}
          className='swap-btn'
          title='Para Birimlerini Değiştir'
        >
          ⇄
        </button>

        <div className='form-group'>
          <label htmlFor="toCurrency">Giriş Para Birimi</label>
          <select
            id="toCurrency"
            value={toCurrency}
            onChange={(e) => onToChange(e.target.value)}
            className='form-select form-input'
          >
            {currencies.map(curr => (
              <option key={curr} value={curr}>{curr}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
