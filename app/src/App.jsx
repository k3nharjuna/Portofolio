import { useState, useEffect } from 'react'
// Components
import Hello from './components/Hello'
import Skills from './components/Skills'
import Experience from './components/Experience'

function App() {
  const [pages, setPages] = useState(0)
  useEffect(() => {
    setPages(1)
  }, [])

  return (
    <div className="font-montserrat w-screen h-screen font-bold snap-x snap-mandatory overflow-x-hidden flex">
     <section id="hello">
      <Hello />
     </section>
     <section id="skills">
      <Skills />
     </section>
     <section id="exp">
      <Experience />
     </section>
    </div>
  )
}

export default App
