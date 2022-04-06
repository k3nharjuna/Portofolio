import { useState, useEffect } from 'react'

function Experience () {
  const [message, setMessage] = useState('')
  useEffect(() => {
    setMessage('Experience')
  }, [])
  return (
    <div className='snap-start w-full h-full bg-fuchsia-200 text-stone-400 text-2xl mx-auto text-center flex justify-center items-center flex-shrink-0'>
      {message}
    </div>
  )
}

export default Experience