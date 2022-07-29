import axios from 'axios';
import React, { Component } from 'react'
import {NavLink,Navigate} from 'react-router-dom'

class Register extends Component {

  state = {
    name : '',
    email : '',
    password : '',
    password_confirmation : '',
    message:''
  }

  formSubmit = (e) => {
    e.preventDefault();

    const data = {
      name:this.state.name,
      email:this.state.email,
      password:this.state.password,
      password_confirmation:this.state.password_confirmation,
    }

    axios.post('/register', data)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        this.setState({
          loggedIn:true
        })
        this.props.setUser(response.data.user)
      })
      .catch((error) => {
        console.log(error);
      })

  }


  render() {
    // after register redirect profile
    if(this.state.loggedIn){
      return <Navigate to={'/profile'}/>
    }

    return (
      <div> 

        <section class="vh-100">
          <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">
              <div class="col-md-8 col-lg-7 col-xl-6">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    class="img-fluid" alt=""/>
              </div>
              <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form onSubmit={this.formSubmit}>

                  <h1 className='text-center'>Register</h1>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example23">Username</label>
                    <input type="text" name='name'  
                    class="form-control form-control-lg"
                    required
                    onChange={(e) => {this.setState({name:e.target.value})}}/>
                  
                  </div>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example13">Email address</label>
                    <input type="email" name='email' class="form-control form-control-lg" 
                    required
                    onChange={(e) => {this.setState({email:e.target.value})}}/>
                   
                  </div>

                  
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example23">Password</label>
                    <input type="password" name='password'  class="form-control form-control-lg"
                    required
                    onChange={(e) => {this.setState({password:e.target.value})}} />
                  
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example23">Confirm Password</label>
                    <input type="password" name='password_confirmation'  class="form-control form-control-lg"
                    required
                    onChange={(e) => {this.setState({password_confirmation:e.target.value})}} />
                  
                  </div>
                  
                  <div class="d-flex justify-content-around align-items-center mb-4">
                    
                    
                    {/* <a href="#!">Forgot password?</a> */}
                   
                    <h6>Already account?<NavLink to="/login">Login</NavLink></h6>
                  </div>
                  
                  <button type="submit" class="btn btn-primary btn-lg btn-block">Register</button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default Register
