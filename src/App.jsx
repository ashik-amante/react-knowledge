import { useState } from 'react'

import './App.css'
import Header from './component/header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddtoBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  return (
    <>
      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddtoBookmarks = {handleAddtoBookmarks}></Blogs>
        <Bookmarks bookmarks = {bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
