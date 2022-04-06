import { useState, useEffect } from 'react'

function Hello () {
  const [message, setMessage] = useState('')
  useEffect(() => {
    setMessage('Hello World! i\'am Ken Harjuna Arimurti')
  }, [])

  const animate = (text) => {
    setInterval(() => {

    })
  }
  return (
    <div className='snap-start w-full h-full bg-zinc-700 text-stone-400 text-2xl text-center flex justify-center items-center flex-shrink-0'>
      <div className='animate-pulse'>{message}</div>
      <a href="#skills">asdasdasds</a>
    </div>
  )
}

export default Hello