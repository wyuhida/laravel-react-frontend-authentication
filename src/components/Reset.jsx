import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Reset extends Component {

    state = {
        token : '',
        email : '',
        password : '',
        password_confirmation : '',
        message:''
    }

    formSubmit = (e) => {
        e.preventDefault();
    
        const data = {
          token:this.state.token,
          email:this.state.email,
          password:this.state.password,
          password_confirmation:this.state.password_confirmation,
        }
    
        axios.post('/resetpassword', data)
          .then((response) => {
            this.setState({message:response.data.message})
            document.getElementById("formSubmit").reset()
          })
          .catch((error) => {
            this.setState({message:error.response.data.message});
          })
    
    }
    

  render() {

    // show error
    let error='';
    if(this.state.message){
      error=(
        <div>
          <div className='alert alert-danger' role='alert'>{this.state.message}</div>
        </div>
      )
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
                <form onSubmit={this.formSubmit} id="formSubmit">

                  <h1 className='text-center'>Reset Account</h1>

                    {error}
                    
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example23">Pin code</label>
                    <input type="text" name='token'  
                    class="form-control form-control-lg"
                    required
                    onChange={(e) => {this.setState({token:e.target.value})}}/>
                  
                  </div>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example13">Email address</label>
                    <input type="email" name='email' class="form-control form-control-lg" 
                    required
                    onChange={(e) => {this.setState({email:e.target.value})}}/>
                   
                  </div>

                  
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example23">New Password</label>
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
                  
                  <button type="submit" class="btn btn-primary btn-lg btn-block">Reset Password</button>
                </form>
              </div>
            </div>
          </div>
         </section>
      </div>
    )
  }
}

export default Reset
