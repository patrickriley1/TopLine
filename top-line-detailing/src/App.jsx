import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div className="app">
        <h1 style={{
          color: 'white',
          fontSize: '72px',
        }}>
          <span>Top Line</span>
          <span style={{ color: '#FFD700' }}> Detailing</span>
        </h1>
        <p style={{ color: 'white' }}>Indulge in the ultimate automotive treatment with our elite detailing services. We combine precision, passion, and premium products to transform every inch of your vehicle, delivering a showroom shine every time.

</p>
        <div className="CTA">
          <button className="cta-button" style={{
            padding: '15px 20px',
            fontSize: '16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#FFD700',
            color: 'black',
            cursor: 'pointer',
            alignSelf: 'center',
          }}>
            Schedule a Service Today!
          </button>
        </div>
      </div>

    </main>
  )
}

export default App
