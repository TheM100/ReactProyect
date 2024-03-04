import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { React, useEffect, useState } from 'react'
import Principal from './Pages/Principal'
import NewPost from './Pages/NewPost'
import PostDetail from './Pages/PostDetail'
import Register from './Pages/UserRegister'
// import LoginForm from './Pages/UserLogin'
// import { useNavigate } from 'react-router-dom'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verifica la existencia de un token válido en el localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Register />} />
        <Route path="/newpost" element={isLoggedIn ? <NewPost /> : <Navigate to="/login" />} />
        <Route path='/postDetail/:id' element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
