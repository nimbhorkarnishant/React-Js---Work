import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import {Route,NavLink,HashRouter} from "react-router-dom";
import Login from './template/login'
import Signin from './template/signin'
import Forgot from './template/forgot_password';
import Logo from'./media/Image/logo.png';




class navbar extends Component {
    render() {
      return (
        <HashRouter>
          <div class="container">
               <img src={Logo} alt="login" class="login-img"/>
              <div class="login-text">
                <div class="responsive-login-name">
                  <img src={Logo} alt="Logo" width="200"/>
                </div>
                <div class="tab-bar">
                  <NavLink to="/"><button class="login_button" id="login_button">Sign In</button></NavLink>
                  <NavLink to="/signin"><button class="signin_button" id="signin_button">Sign Up</button></NavLink>
                </div>
                <Route  exact path="/" component={Login}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/forgot-password" component={Forgot}/>
              </div>
           </div>
        </HashRouter>
      );
    }
  }
  export default navbar;
