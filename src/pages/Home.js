import React, { useEffect, useState } from 'react';

import userService from '../services/user.service';
import axios from 'axios';
import authHeader from '../services/auth-header';
import Dashboard from './Dashboard';
import Header from '../organisms/Header';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async() => {
            setLoading(true);
            userService.getUsers()
            .then(
            (response) => {
                console.log(response.data.data);
                setUsers(response.data.data);
                setLoading(false);
            },
            (error) => {
                const _users = (error.response && error.response.data) ||
                error.message ||
                error.toString();

                console.log(error);
                setLoading(false);
            }
        )
    }


  return (
    <div className="container">
      {/* <header className="jumbotron">
        <h1>Home page</h1>
        {loading && (
            <p>Loading users...</p>
        )}
        <ul>
            {users.length ? users.map((user) => <li>{user.name}</li>): ''}
        </ul>
      </header> */}
      <Dashboard />
      {/* <Header /> */}
    </div>
  );
}

export default Home;