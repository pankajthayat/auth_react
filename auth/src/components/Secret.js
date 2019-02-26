import React, { Component } from "react";

export default class Secret extends Component{
    render(){
        return(
            <div>
            <p>this is Secret components</p>
            <a href="/">Go Home</a>
            <br/>
            <br/>
            <button onClick = {this.props.auth.logout}>Logout</button>
            </div>
        )
    }
}