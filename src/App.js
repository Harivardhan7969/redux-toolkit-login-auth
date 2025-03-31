import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import login from './Components/SignIn/login';
import LoginForm from './Components/SignIn/login';

import { Navigate, Route, Router, Routes } from 'react-router-dom';
import LandingPage from './Components/Landing/LandingPage';
import Home from './Components/Home/Home';
import { useSelector } from 'react-redux';

function App() {

  const isAuthenticated = useSelector((state) => state.authSlice);
  return (
    <>

      <NavBar />
      <Routes>

        <Route path="/" element={<LandingPage />} />
        
        <Route path="/home" element={isAuthenticated ? <Home /> : Navigate('/')} />

      </Routes>
    </>

  );
}

export default App;
