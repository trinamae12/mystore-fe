import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';

import { logout } from './actions/auth';
import { clearMessage } from './actions/message';
import UserProfile from './pages/UserProfile';

function App() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let location = useLocation();

  useEffect(() => {
    if(["/register", "/login"].includes(location.pathname)) {
      dispatch(clearMessage());
    }
  }, [dispatch, location]);

  const logoutUser = useCallback(() => {
    dispatch(logout());
  },[dispatch]);

  return (
    // <div>
    //   <nav>
    //     <Link to={"/"}>Title here</Link><br/>
    //     <Link to={"/"}>Home</Link>
    //     {
    //       currentUser ?  (
    //         <div>
    //           <li>
    //             <Link to={`/profile/${currentUser?.user['id']}`}>{currentUser.user['name']}</Link>
    //           </li>
    //           <li>
    //             <a href='/login' onClick={logoutUser}>
    //               Logout
    //             </a>
    //           </li>
    //         </div>
    //       ) : (
    //         <div>
    //           <li>
    //             <Link to={"/login"}>Login</Link>
    //           </li>
    //           <li>
    //             <Link to={"/register"}>Register</Link>
    //           </li>
    //         </div>
    //       )
    //     }
    //   </nav>

    //   <div>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={currentUser ? <Home /> : <Navigate to="/login" />} />
          {/* <Route path="/" element={currentUser ? <h1>Logged in</h1> : <h1>Not logged in yet</h1>} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<UserProfile user={currentUser?.user} />} />
        </Routes>
      </ThemeProvider>
    //   </div>
    // </div>
  );
}

export default App;
