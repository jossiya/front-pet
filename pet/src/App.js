import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Navigation';
import BoardContainer from './pages/Board/BoardContainer';
import LoginContainer from './pages/Login/LoginContainer';
import MainContainer from './pages/Main/MainContainer';
import PostContainer from './pages/Post/PostContainer';
import RegisterContainer from './pages/Regster/RegisterContainer';
function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<MainContainer/>} />
      <Route path="/board" element={<BoardContainer/>} />
      <Route path="/login" element={<LoginContainer/>} />
      <Route path="/signup" element={<RegisterContainer/>} />
      <Route path="/post/:id" element={<PostContainer/>} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
