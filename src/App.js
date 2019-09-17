import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import GithubState from "./context/github/GithubState";

import "./App.css";

const App = () => {
  //const [users, setUsers] = useState([]);
  //const [user, setUser] = useState({});
  //const [repos, setRepos] = useState([]);
  //const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // // Function for searching github users
  // const searchUsers = async text => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   //this.setState({ users: res.data.items, loading: false });
  //   setUsers(res.data.items);
  //   setLoading(false);
  // };

  // // Get single User
  // const getUser = async username => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   // this.setState({ user: res.data, loading: false });
  //   setUser(res.data);
  //   setLoading(false);
  // };

  // // Get user repos
  // const getUserRepos = async username => {
  //   //this.setState({ loading: true });
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   // this.setState({ repos: res.data, loading: false });
  //   setRepos(res.data);
  //   setLoading(false);
  // };

  // Clear searched users from state
  // const clearUsers = () => {
  //   //this.setState({ users: [], loading: false });
  //   setUsers([]);
  //   setLoading(false);
  // };

  const showAlert = (msg, type) => {
    // this.setState({ alert: { msg, type } });
    setAlert({ msg, type });

    //setTimeout(() => this.setState({ alert: null }), 5000);
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      //searchUsers={searchUsers}
                      //clearUsers={clearUsers}
                      //showClear={users.length > 0 ? true : false}
                      setAlert={showAlert}
                    />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exac path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
