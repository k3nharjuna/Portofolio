import { useState } from 'react'
import logo from './logo.svg'

function App() {
  const [message, setMessage] = useState('Hy everyone! I\'m Ken Harjuna Arimurti, welcome!!')
  
  return (
    <div className="font-montserrat font-bold text-gray-500 bg-zinc-800 min-h-screen">
      <div className='container flex mx-auto justify-center items-center min-h-screen'>
        <div className=''>
        {
          message
        }
        </div>
      </div>
    </div>
  )
}

export default App
