export function ConvertButton({ loading, onClick }) {
  return (
    <button type='submit' disabled={loading} className='btn btn-primary btn-convert' onClick={onClick} >
      {loading ? (
        <>
          <span className='spinner-border spinner-border-sm me-2'
            role='status' aria-hidden="true"></span>
          Çevriliyor...
        </>
      ) : (
        'Çevir'
      )}
    </button>
  )
}
