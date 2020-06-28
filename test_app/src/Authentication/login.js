import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import './media/css/login.css';
import {Button , Form , FormGroup , Label , Input }from 'reactstrap'
import {FacebookLoginButton,GoogleLoginButton } from 'react-social-login-buttons';
import Recaptcha from 'react-recaptcha';
import { NavLink } from 'react-router-dom';


class Login extends React.Component{
    componentDidMount(){
        document.title = "Login"
    }
    constructor(props) {
        super(props)
       
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    
        this.state={
            error_message_email:"",
            error_message_password:"",
            isVerified: false,
    
        }
    }
    
    recaptchaLoaded() {
        document.getElementById("capta_verification").innerText="";
        console.log('capcha successfully loaded');
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
                document.getElementById("input_email").style.border="1.5px solid green";
                document.getElementById("error_message_email").innerText="";
            }
            else{
                document.getElementById("input_email").style.border="1.5px solid red";
                document.getElementById("error_message_email").innerText="Email Id is Invalid!";
            }
        }
        if (pass.length>0){
            document.getElementById("input_password").style.border="1.5px solid green";
            document.getElementById("error_message_password").innerText="";

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
    render(){
       
        return(
            <div class="container">
                <Form className="login-form" action="" method="post" onSubmit={this.handleSubmit}>
                    <h1><span className="font-weight-bold">Pareegh</span>.com</h1>
                    <h2 className="text-center">Welcome</h2>
                    <FormGroup>
                        <label>Email</label>
                        <Input id="input_email" type="email" placeholder="Email" name="email" ref="email"  onChange={this.handleChange}>
                        </Input>
                        <span id="error_message_email" class="error_message">{this.state.error_message_email}</span>
                    </FormGroup>
                    <FormGroup>
                        <label>Password</label>
                        <Input id="input_password"  type="password" placeholder="Password" name="psw" ref="psw" onChange={this.handleChange}>
                        </Input>
                        <span id="error_message_password" class="error_message">{this.state.error_message_password}</span>
                    </FormGroup>
                    {/* <Recaptcha
                        class="recapta"
                        sitekey="6LcxO6kZAAAAAAHkio7J7grQr7ZkjEA6Wd0xjz7n"
                        render="explicit"
                        onloadCallback={this.recaptchaLoaded}
                        verifyCallback={this.verifyCallback}
                    /> */}
                    <span id="capta_verification" class="error_message">{this.state.error_message_password}</span>

                    <Button className="btn-lg btn-dark btn-block" id="login_button">Log in</Button>
                    <div className="text-center pt-3">or continue with social media account</div>
                    <GoogleLoginButton className="mt-3 mb-3"/>
                    <FacebookLoginButton className="mt-3 mb-3"/>
                    <div className="text-center">
                        <a href="/sign-up">Sign up</a>
                        <span className="p-2">|</span>
                        <NavLink to="/forgot">ForgotPassword</NavLink>
                    </div>
                </Form>
            </div>
        );
          
        
    }
}
export default Login;


  