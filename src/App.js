import React, { Fragment, Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'>
        <Navbar title='Github Finder' icon='fab fa-github' />
      </nav>
    );
  }
}

export default App;
