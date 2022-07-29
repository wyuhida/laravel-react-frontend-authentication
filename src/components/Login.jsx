import axios from 'axios';
import React, { Component } from 'react'
import {NavLink,Navigate} from 'react-router-dom'

class Login extends Component {

  state={
    email:'',
    password:'',
    message:'',
  }

  // login form submit
  formSubmit = (e) => {
    e.preventDefault();

    const data ={
      email:this.state.email,
      password:this.state.password
    }
    axios.post('/login',data)
    .then((response) => {
      // simpan token di local storage
      localStorage.setItem('token',response.data.token);
      this.setState({
        loggedIn:true
      })
      this.props.setUser(response.data.user);
      
    })
    .catch((error) => {
      this.setState({message:error.response.data.message})
    });

  }




  render() {

    // after login redirect profile
    if(this.state.loggedIn){
      return <Navigate to={'/profile'}/>
    }

    // show error
    let error='';
    if(this.state.message){
      error=(
        <div>
          <div className='alert alert-danger' role='alert'>{this.state.message}</div>
        </div>
      )
    }

    if(localStorage.getItem('token'))
    {
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
                 
                  <h1 className='text-center'>Login</h1>
                  
                  {error}

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example13">Email address</label>
                    <input type="email" name='email' class="form-control form-control-lg" 
                    required 
                    onChange={(e)=>{this.setState({email:e.target.value})}} />
                   
                  </div>

                  
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example23">Password</label>
                    <input type="password" name='password' class="form-control form-control-lg" 
                    required
                    onChange={(e)=>{this.setState({password:e.target.value})}} />
                  
                  </div>

                  <div class="d-flex justify-content-around align-items-center mb-4">
                    
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="form1Example3"  />
                      <label class="form-check-label" for="form1Example3"> Remember me </label>
                    </div>
                    {/* <a href="#!">Forgot password?</a> */}
                    <NavLink to="/forget">Forgot password?</NavLink>
                  </div>
                  
                  <button type="submit" class="btn btn-primary btn-lg btn-block">Login</button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>
      
    )
  }
}

export default Login
