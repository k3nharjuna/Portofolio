import { useState, useEffect } from 'react'

function Skills () {
  const [message, setMessage] = useState('')
  useEffect(() => {
    setMessage('Skills')
  }, [])
  return (
    <div className='snap-start w-full h-full bg-amber-300 text-white text-2xl mx-auto text-center flex justify-center items-center flex-shrink-0'>
      {message}
    </div>
  )
}

export default Skills