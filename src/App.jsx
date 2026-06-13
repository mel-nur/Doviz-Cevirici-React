import { useState } from 'react'
import './App.css'
import {
  Header,
  CurrencySelector,
  ErrorAlert,
  ConvertButton,
  ResultCard
} from './components'

const apiKey = import.meta.env.VITE_API_KEY

function App() {
  const [amount, setAmount] = useState('')
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("TRY")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [exchangeRate, setExchangeRate] = useState(null)
  const currencies = ['USD', 'EUR', 'TRY', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF']

  const handleConvert = async () => {
    if (!amount || amount <= 0) {
      setError('Lütfen geçerli bir miktar giriniz')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `https://api.freecurrencyapi.com/v1/latest?base_currency=${fromCurrency}&currencies=${toCurrency}&apikey=${apiKey}`
      )

      if (!response.ok) throw new Error('API hatası')

      const data = await response.json()
      const rate = data.data[toCurrency]
      const convertedAmount = (amount * rate).toFixed(2)

      setResult(convertedAmount)
      setExchangeRate(rate.toFixed(4))
    } catch (err) {
      setError(err.message || 'Dönüştürme işlemi başarısız oldu')
    } finally {
      setLoading(false)
    }
  }

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <div className='app-container'>
      <div className='container'>
        <div className='convert-card'>
          <Header />

          <form
            className='convert-form'
            onSubmit={(e) => {
              e.preventDefault()
              handleConvert()
            }}
          >
            <CurrencySelector
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              amount={amount}
              currencies={currencies}
              onFromChange={setFromCurrency}
              onToChange={setToCurrency}
              onAmountChange={setAmount}
              onSwap={handleSwapCurrencies}
            />

            <ErrorAlert message={error} />

            <ConvertButton
              loading={loading}
              onClick={handleConvert}
            />
          </form>

          <ResultCard
            amount={amount}
            fromCurrency={fromCurrency}
            result={result}
            toCurrency={toCurrency}
            exchangeRate={exchangeRate}
          />
        </div>
      </div>
    </div>
  )
}

export default App
