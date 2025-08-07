import { useState } from 'react'
import './App.css'
import { useNavigate as usenavigate } from 'react-router-dom'
import ReactDOM from 'react-dom'


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
          <span style={{ color: '#E48FFF' }}> Detailing</span>
        </h1>
        <p style={{ color: 'white' }}>Indulge in the ultimate automotive treatment with our elite detailing services. We combine precision, passion, and premium products to transform every inch of your vehicle, delivering a showroom shine every time.

</p>
        <div className="CTA">
          <button className="cta-button" style={{
            padding: '15px 20px',
            fontSize: '16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#E48FFF',
            color: 'black',
            cursor: 'pointer',
            alignSelf: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px #E48FFF',
          }} onClick={() => {
            usenavigate('/services');
          }}>
            Schedule a Service Today!
          </button>
        </div>
      </div>

    </main>

  
  )
}



export default App
