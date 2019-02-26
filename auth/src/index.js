import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from "./Auth";
import MyComponent from "./MyComponent"
const auth=new Auth();

window.place="banglore";
let state={name:""};

window.setState=(changes)=>{
    console.log("setState");
    state=Object.assign({},state,changes)
    console.log(state);
}

let userName=auth.getProfile().given_name ||" Jonny"; 
/* eslint no-restricted-globals: 0*/
let initialState={
    name:userName,
    location:location.pathname.replace(/^\/?|\/$/g,""),
    auth
}
window.setState(initialState);
console.log(state);
console.log(window.state);
ReactDOM.render(<MyComponent { ...state } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
