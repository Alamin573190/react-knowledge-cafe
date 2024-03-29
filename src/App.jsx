import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componants/Header/Header'
import Blogs from './componants/Blogs/Blogs'
import Bookmarks from './componants/Bookmarks/Bookmarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Header></Header>
   <div className="flex">
   <Blogs></Blogs>
   <Bookmarks></Bookmarks>
   </div>
 
    </>
  )
}

export default App
