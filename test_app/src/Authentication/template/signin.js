import React, { Component } from "react";
import {findDOMNode} from 'react-dom';
import '../media/css/signup.css';
import { NavLink } from "react-router-dom";


 
class signin extends Component {
    componentDidMount(){
        document.title = "Sign-In"
        document.getElementById("signin_button").style.backgroundColor="#fd7611"
        document.getElementById("login_button").style.backgroundColor="skyblue"


    }
    constructor(props) {
      super(props)
       
      this.state={
        isVerified: false,
  
      }
    } 
    handleSubmit = event => {
      event.preventDefault();
      var target=event.target;
      var error_span=document.getElementsByTagName("span");
      
      for (let i = 2; i < target.length-1; i++) {
          if (target[i].value.length==0) {
            this.state.isVerified=false;
            error_span[i-1].innerText="This Field is required!";
            target[i].style.border="1.5px solid red";
          }
          else if (target[i].value.length>0) {
            this.state.isVerified=true;
            
          }
      }
      if (!target[0].checked && !target[1].checked) {
        this.state.isVerified=false;
        error_span[0].innerText="This Field is required!";
      }
      else{
        this.state.isVerified=true;
        error_span[0].innerText="";
      }
      if (this.state.isVerified) {
        // Call Registered API
        alert("you registered sucessfully!");
      }
    
    };
    handleChange = event => {
      event.preventDefault();
      let email= findDOMNode(this.refs.email).value;
      let pass=findDOMNode(this.refs.psw).value;
      let mob=findDOMNode(this.refs.mob).value;
      let fname=findDOMNode(this.refs.fname).value;
      let lname=findDOMNode(this.refs.lname).value;

      if (document.getElementById("inlineRadio1").checked || document.getElementById("inlineRadio2").checked ) {
        this.state.isVerified=true;
        document.getElementById("error_message_register_as").innerText="";

      }
      else{
        this.state.isVerified=false;
      }

      if(email.length>0){
          document.getElementById("email").innerText="Email";
          const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
          if(expression.test(String(email))){
              this.state.isVerified=true;
              document.getElementById("input_email").style.border="1.5px solid green";
              document.getElementById("error_message_email_id").innerText="";
          }
          else{
              this.state.isVerified=false;
              document.getElementById("input_email").style.border="1.5px solid red";
              document.getElementById("error_message_email_id").innerText="Email Id is Invalid!";
          }
      }
      else{
        document.getElementById("email").innerText="";
        document.getElementById("error_message_email_id").innerText="This Field is required!";
      }
      
      if (fname.length>0) {
        document.getElementById("fname").innerText="First Name";
        document.getElementById("input_fname").style.border="1.5px solid green";
        document.getElementById("error_message_first_name").innerText="";

      }
      else{
        document.getElementById("fname").innerText="";
      }
      
      if (lname.length>0) {
        document.getElementById("lname").innerText="Last Name";
        document.getElementById("input_lname").style.border="1.5px solid green";
        document.getElementById("error_message_last_name").innerText="";

      }
      else{
        document.getElementById("lname").innerText="";
      }

      if (mob.length>0) {
        document.getElementById("mob_label").innerText="Mobile No";
        document.getElementById("input_mob").style.border="1.5px solid green";
        document.getElementById("error_message_mob_no").innerText="";

      }
      else{
        document.getElementById("mob_label").innerText="";

      }
      
      if (pass.length>0){
        document.getElementById("password").innerText="Password";
        document.getElementById("input_password").style.border="1.5px solid green";
        document.getElementById("error_message_password").innerText="";
      }
      else{
        document.getElementById("password").innerText="";
      }

    };
    
  render() {
    return (
        <form class="login-form" onSubmit={this.handleSubmit}>
            <h2>Sign In</h2>
            <p>Register Our Platform.</p>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Volunteer" />
                <label class="form-check-label" for="inlineRadio1">Volunteer</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Organization"  />
                <label class="form-check-label" for="inlineRadio2">Orgnization</label>
            </div>
            <div>
              <span id="error_message_register_as" class="error_message"></span>
            </div>
            <label id="fname" class="form-check-label" for="dropdownCheck"></label>
            <input id="input_fname" type="text" placeholder="Enter your First Name" ref="fname" onChange={this.handleChange}/>
            <span id="error_message_first_name" class="error_message"></span><br/>
            <label id="lname" class="form-check-label" for="dropdownCheck"></label>
            <input id="input_lname" type="text" placeholder="Enter your Last Name" ref="lname" onChange={this.handleChange} />
            <span id="error_message_last_name" class="error_message"></span><br/>
            <label id="email" class="form-check-label" for="dropdownCheck"></label>
            <input type="text" id="input_email" placeholder="Enter your Email ID" ref="email" onChange={this.handleChange}/>
            <span id="error_message_email_id" class="error_message"></span><br/>
            <label id="mob_label" class="form-check-label" for="dropdownCheck"></label>
            <input id="input_mob" type="text" placeholder="Enter your Mobile Number" ref="mob" onChange={this.handleChange}/>
            <span id="error_message_mob_no" class="error_message"></span><br/>
            <label id="password" class="form-check-label" for="dropdownCheck"></label>
            <input id="input_password" type="password" placeholder="Enter your Password" ref="psw" onChange={this.handleChange}/>
            <span id="error_message_password" class="error_message"></span><br/>
            <div  id="check-term">
                <p>By registering here to indicate that you have read and agree to the <NavLink to="#">terms and condition</NavLink> of the Pareegh Private Limited.</p>
            </div>
            <span id="error_message_agree" class="error_message"></span>
            <div class="nextOrForgot">
              <button class="next" type="submit">Sign In</button>
            </div>
        </form>
    )
  }
}
 
export default signin;