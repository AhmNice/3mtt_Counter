import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)
  function increment(){
    setCount(count +1)
  }
  function decrement(){
    if(count <= 0)return
    setCount(count -1)
  }
  return (
    <section className='bg-midnightBlue gap-10 h-screen w-full flex flex-col items-center justify-center'>
        <div className="bg-lilacGray rounded-full w-24 h-24 flex items-center justify-center text-2xl">
        {count}
        </div>
        <div className="flex gap-5">
          <button onClick={decrement} className='bg-skyTeal cursor-pointer hover:bg-contrast py-2 px-10 rounded-md text-2xl flex items-center justify-center text-center'>-</button>
          <button onClick={increment} className='bg-skyTeal cursor-pointer hover:bg-contrast py-2 px-10 rounded-md text-2xl flex items-center justify-center text-center'>+</button>
        </div>
    </section>
  )
}

export default App
