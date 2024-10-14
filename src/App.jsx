import { useState } from 'react'

import './App.css'
import Header from './component/header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'

function App() {

  return (
    <>
      <Header></Header>

      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
