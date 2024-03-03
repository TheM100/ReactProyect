import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { React, useState } from 'react'
import Principal from './Pages/Principal'
import NewPost from './Pages/NewPost'
import PostDetail from './Pages/PostDetail'
import Register from './Pages/UserRegister'
// import LoginForm from './Pages/UserLogin'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Register />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path='/postDetail/:id' element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
