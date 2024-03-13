import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState([]);

  // const handleAddToBookmark = blog => {
  //   const newBookmarks = [...bookmarks, blog];
  //   setBookmarks(newBookmarks);
  // }

  // const handleMarkdsAsRead = (id,time) =>{
  //   console.log('marking as read',time);
  //   // setReadingTime(readingTime + time);
  //   const newReadingTime = readingTime + time;
  //   setReadingTime(newReadingTime);
  //   // remove 
  //   // console.log('remove',id);
  //   const remainingBookmarks = bookmarks.filter(bookmarks => bookmarks.id !== id);
  //   setBookmarks(remainingBookmarks);
  // }

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkdsAsRead = (id, time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs 
      handleAddToBookmark = {handleAddToBookmark} 
      handleMarkdsAsRead = {handleMarkdsAsRead}
      ></Blogs>
      <Bookmarks 
      bookmarks={bookmarks}
      readingTime={readingTime}
      ></Bookmarks>
      </div>
      
    </>
  )
}

export default App

