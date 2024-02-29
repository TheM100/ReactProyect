import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { React, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Principal from './Pages/Principal'
import NewPost from './Pages/NewPost'
import Register from './Pages/UserRegister/index'
import PostDetail from './Pages/PostDetail'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Register />} />
        <Route path="/newpost" element={<NewPost />} />
        {/* <Route path="/post-detail/:id" element={<h1>POST detail</h1>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
