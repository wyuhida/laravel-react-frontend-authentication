import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

class Profile extends Component {
  render() {

    let name;
    let email;
    if(this.props.user)
    {
      name = this.props.user.name;
      email = this.props.user.email;
    }

    if(!localStorage.getItem('token'))
    {
      return <Navigate to={'/login'}/>
    }

    return (
      <div>

         <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">User Profile</h3>
              <ul class="list-group">
                <li class="list-group-item">Name : {name} </li>
                <li class="list-group-item">email : {email} </li>
                
              </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default Profile
