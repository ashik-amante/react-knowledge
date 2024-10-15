import { useState } from 'react'

import './App.css'
import Header from './component/header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleMarkasRead = time =>{
   setReadingTime(readingTime + time)
  }

  const handleAddtoBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  return (
    <>
      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddtoBookmarks = {handleAddtoBookmarks} 
        handleMarkasRead = {handleMarkasRead}
        ></Blogs>
        <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
