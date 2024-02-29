import { React, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Principal from './Pages/Principal'
import NewPost from './Pages/NewPost'
import Register from './Pages/UserRegister/index'
import PostDetail from './Pages/PostDetail'

function App() {


  return (
    <>
      {/* <Register /> */}
      <Principal />
      {/* <Register /> */}
      {/* <NewPost /> */}
      {<PostDetail/>}
    </>
  )
}

export default App
