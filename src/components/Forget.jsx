import axios from 'axios'
import React, { Component } from 'react'

class Forget extends Component {
  
  state = {
    email:'',
    message:'',
  }

  formSubmit = (e) => {
    e.preventDefault()
    const data = {
      email:this.state.email
    }

    axios.post('/forgetpassword',data)
    .then((response) =>{
      this.setState({message:response.data.message})
      document.getElementById("forgetForm").reset()
    })
    .catch((error) =>{
      this.setState({message:error.response.data.message})
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
        
        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">Forget Password</h3>

            <form onSubmit={this.formSubmit} id="forgetForm">
              
              {error}

              <div className="form-group">
                <label htmlFor="">Email address</label>
                <input type="email" name='email' className='form-control'
                required
                onChange={(e) => {this.setState({email:e.target.value})}} />
              </div>

              <button type='submit' className='btn btn-primary btn-block'>Forget Password</button>
             
            </form>

          </div>
        </div>
      </div>
    )
  }
}

export default Forget
