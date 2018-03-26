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
import EnhancedTableHead2 from "./Chart2";
import EnhancedTableHead3 from "./Chart3";
import EnhancedTableHead4 from "./Chart4";
import EnhancedTableHead5 from "./Chart5";
import EnhancedTableHead6 from "./Chart6";
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
              Sonoco Time Tracker
            </Typography>
            <HashRouter>
            <div>      
              <Button color="inherit" href="#/">Home</Button>      
              <Button color="inherit" href="#/chart" >All Locations</Button>    
              <Button color="inherit" href="#/chart2" >Winston</Button>   
              <Button color="inherit" href="#/chart3" >Westmont</Button>   
              <Button color="inherit" href="#/chart4" >Erlanger</Button>   
              <Button color="inherit" href="#/chart5" >Glenrock</Button>   
              <Button color="inherit" href="#/chart6" >York</Button>   
            </div>
            </HashRouter>
          </Toolbar>
        </AppBar>
        <HashRouter>
              <div>
                  <div className="content">              
                    <Route path="/chart" component={EnhancedTableHead}/>
                    <Route path="/chart2" component={EnhancedTableHead2}/>
                    <Route path="/chart3" component={EnhancedTableHead3}/>
                    <Route path="/chart4" component={EnhancedTableHead4}/>
                    <Route path="/chart5" component={EnhancedTableHead5}/>
                    <Route path="/chart6" component={EnhancedTableHead6}/>
                  </div>
              </div>
        </HashRouter>            
      </div>
    );
  }
}

export default App;
