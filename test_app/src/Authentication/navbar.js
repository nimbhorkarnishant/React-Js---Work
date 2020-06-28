import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import {Route,NavLink,HashRouter} from "react-router-dom";
import Login from './login';
import Home from './home';
import Forgot from './forgot_password';
import './media/css/navbar.css';


class navbar extends Component {
    myFunction(){
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    render() {
      return (
        <HashRouter>
          <div>
            <div class="topnav" id="myTopnav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <a class="icon" onClick={this.myFunction}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>
            <div className="content">
              <Route  exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/forgot" component={Forgot}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
  export default navbar;