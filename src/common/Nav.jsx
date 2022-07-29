import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

class Nav extends Component{

    state = {
        loggedout:''
    }

    loggedout = (e) => {
        localStorage.clear();
        this.props.setUser(null);
    }


    render(){

        let buttons;
        let profile;
        if(localStorage.getItem('token')){
            buttons = (
                <div>
                    <NavLink to="/" onClick={this.loggedout} className="nav-link">Logout</NavLink>
                </div>
            )

            profile = (
                <div>
                    <NavLink to="/profile" className="nav-link">Profile</NavLink>
                </div>
            )
        }else{
            buttons = (
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/register" className="nav-link">Register</NavLink>
                        </li>
                    </ul>
                </div>
            )
        }

        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    {/* <a className="navbar-brand">Learning auth</a> */}
                    <NavLink to="/" className="navbar-brand">Learning auth</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                               
                                <NavLink to="/" className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            
                            <li className="nav-item">
                                {profile}
                            </li>
                        </ul>
                        <span className="navbar-text">
                          {buttons}
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav
