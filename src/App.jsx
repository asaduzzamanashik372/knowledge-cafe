import { useState } from 'react'
import './App.css'
import Header from './assets/Components/Header/Header'
import Blogs from './assets/Components/Blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header></Header>
      <Blogs></Blogs>
      
      
    </>
  )
}

export default App
