import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'material-ui/Button';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import EnhancedTableHead from "./Chart";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

class App extends Component {
  render() {
    return (      
      <div className="App">        
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chart App</h1>
        </header> */}
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Chart App
            </Typography>
            <HashRouter>
            <div>      
              <Button color="inherit" href="#/">Home</Button>      
              <Button color="inherit" href="#/chart" >Chart</Button>      
            </div>
            </HashRouter>
          </Toolbar>
        </AppBar>
        <HashRouter>
              <div>
                  <div className="content">              
                    <Route path="/chart" component={EnhancedTableHead}/>
                  </div>
              </div>
        </HashRouter>            
      </div>
    );
  }
}

export default App;
