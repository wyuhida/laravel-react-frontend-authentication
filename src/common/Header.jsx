import React, { Component } from 'react'
import Nav from './Nav'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Forget from '../components/Forget';
import Profile from '../components/Profile';
import axios from 'axios';
import Reset from '../components/Reset';

class Header extends Component {

    state = {
        user:{}
    }

    setUser = (user) => {
        this.setState({
            user:user
        })
    }

    componentDidMount(){

        // Login user credentials
        axios.get('/user')
            .then((response) => {
                this.setUser(response.data)
            })
            .catch((error) => {

            })
        }

   

  render() {
    return (
        <Router>
            <div>
                <Nav user={this.state.user} setUser={this.setUser} />
                
                <Routes>
                    <Route exact path="/" element={ <Home/> } />
                    <Route exact path="/login" element={ <Login user={this.state.user} setUser={this.setUser} /> } />
                    <Route exact path="/register" element={ <Register user={this.state.user} setUser={this.setUser}/> } />
                    <Route exact path="/forget" element={ <Forget/> } />
                    <Route exact path="/reset/:id" element={ <Reset/> } />
                    <Route exact path="/profile" element={ <Profile user={this.state.user} /> } />
                </Routes>
            </div>
        </Router>
    )
  }
}

export default Header
