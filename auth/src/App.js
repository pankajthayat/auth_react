import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import Secret from "./components/Secret";
import NotFound from "./components/NotFound";
import Callback from "./components/Callback";
import IdleTimer from 'react-idle-timer';


class App extends Component {

  render() {
    let mainComponent="";
    switch(this.props.location)
    {
      case "":
      mainComponent=<Main {...this.props}/>
      break;
      case "secret":
      console.log("secret ",this.props.auth.isAuthenticated())
      mainComponent=this.props.auth.isAuthenticated()?<Secret {...this.props} />:<NotFound/>;
      break;
      case "callback":
      mainComponent=<Callback />;
      break;
      default:
      mainComponent=<NotFound />;

    }
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
         {mainComponent}
        <button onClick={this.handleOnCLick}>click me</button>
     
      </div>
    );
  }
}

export default App;
