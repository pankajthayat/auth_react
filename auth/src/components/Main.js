import React, { Component } from "react";

export default class Main extends Component {
    render() {
        console.log("in main : ", this.props.auth.isAuthenticated())
        return (
            <div>
                <h1>Helllo!! {this.props.name} </h1>
                For secret <a href="/secret">click me</a>
                {
                    !this.props.auth.isAuthenticated() &&
                    (<div>
                        <hr />
                        please Login first
                       <hr />
                        <button onClick={() => {
                            this.props.auth.login()
                        }
                        }>Login</button>
                    </div>)
                    }
            </div>

        )
    }
}