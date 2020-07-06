import React, { Component } from "react";
import {findDOMNode} from 'react-dom';
import navbar from "../navbar";
import '../media/css/login.css';
import Recaptcha from 'react-recaptcha';
import { NavLink } from "react-router-dom";



 
class Login extends Component {
    componentDidMount(){
        document.title = "Log-In"
        document.getElementById("signin_button").style.backgroundColor="skyblue"
        document.getElementById("login_button").style.backgroundColor="#fd7611"
    }
    constructor(props) {
        super(props)
       
        this.verifyCallback = this.verifyCallback.bind(this);
    
        this.state={
            error_message_email:"",
            error_message_password:"",
            isVerified: false,
    
        }
    }      
    verifyCallback(response) {
        if (response) {
            this.state.isVerified=true;
            if (this.state.isVerified==true){
                document.getElementById("capta_verification").innerText="Verified Succefully!";
                document.getElementById("capta_verification").style.color="green";
            } 
        }
        else{
            document.getElementById("capta_verification").innerText="User is robot!";
            document.getElementById("capta_verification").style.color="red";
        }
    }
    

    handleChange = e => {
        e.preventDefault();
        let email= findDOMNode(this.refs.email).value;
        let pass=findDOMNode(this.refs.psw).value;

        if(email.length>0){
            const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
            console.log(expression.test(String(email)));
            if(expression.test(String(email))){
                document.getElementById("email_label").innerText="Email";
                document.getElementById("input_email").style.border="1.5px solid green";
                document.getElementById("error_message_email").innerText="";
            }
            else{
                document.getElementById("email_label").innerText="Email";
                document.getElementById("input_email").style.border="1.5px solid red";
                document.getElementById("error_message_email").innerText="Email Id is Invalid!";
            }
        }
        else{
            document.getElementById("error_message_email").innerText="This Field is required!";
            document.getElementById("email_label").innerText="";
        }
        if (pass.length>0){
            document.getElementById("password_label").innerText="Password";
            document.getElementById("input_password").style.border="1.5px solid green";
            document.getElementById("error_message_password").innerText="";

        }
        else{
            document.getElementById("password_label").innerText="";

        }

    };
    handleSubmit = event => {
        event.preventDefault();
        let email= findDOMNode(this.refs.email).value;
        let pass=findDOMNode(this.refs.psw).value;
        
        if (this.state.isVerified==false){
            document.getElementById("capta_verification").innerText="You must need to verified!";
        }
        if(email.length==0 && pass.length==0){
            this.state.error_message_password="This Field is required!";
            document.getElementById("input_email").style.border="1.5px solid red";
            document.getElementById("input_password").style.border="1.5px solid red";
            document.getElementById("error_message_email").innerText="This Field is required!";
            document.getElementById("error_message_password").innerText="This Field is required!";
        }
        else if (email.length==0){
            document.getElementById("input_email").style.border="1.5px solid red";
            document.getElementById("error_message_email").innerText="This Field is required!";


        }
        else if(pass.length==0){
            document.getElementById("input_password").style.border="1.5px solid red";
            document.getElementById("error_message_password").innerText="This Field is required!";

        }
        else{
            if (this.state.isVerified==false){
                document.getElementById("capta_verification").innerText="You must need to verified!";
            }
            else{
                // call Login API
                alert("you logged in successfully!");
            }
        }
        
    };
    
  render() {
    return (
        <form class="login-form" onSubmit={this.handleSubmit}>
            <h2>Log In</h2>
            <p>Login to your Account</p>
            <label id="email_label" class="form-check-label" for="dropdownCheck"></label>
            <input id="input_email" type="email" placeholder="Enter your email address" ref="email" onChange={this.handleChange} />
            <span id="error_message_email" class="error_message">{this.state.error_message_email}</span><br/>
            <label id="password_label" class="form-check-label" for="dropdownCheck"></label>
            <input id="input_password" type="password" placeholder="Enter your Password" ref="psw" onChange={this.handleChange}/>
            <span id="error_message_password" class="error_message">{this.state.error_message_password}</span>
            {/* <div class="g-recaptcha" data-sitekey="6LcxO6kZAAAAAAHkio7J7grQr7ZkjEA6Wd0xjz7n" verifyCallback={this.verifyCallback}></div> */}
            <Recaptcha
                className="recapta"
                sitekey="6LcxO6kZAAAAAAHkio7J7grQr7ZkjEA6Wd0xjz7n"
                render="explicit"
                verifyCallback={this.verifyCallback}
            />
            <span id="capta_verification" class="error_message">{this.state.error_message_password}</span>

            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
                <label class="form-check-label" for="dropdownCheck">
                    Remember me
                </label>
            </div>
            <div class="nextOrForgot">
                <NavLink to="/forgot-password">Forgot password?</NavLink>
                <button class="next" type="submit">
                    Log In
                </button>
            </div>
            <hr/>
            <h3>Or log in with</h3>
            <div class="cta">
                <button class="facebook">
                    <em class="fab fa-facebook"></em>
                    Facebook
                </button>
                <button class="google"><em class="fab fa-google"></em>Google</button>
            </div>
        </form>
    )
  }
}
 
export default Login;