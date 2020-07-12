import React, { Component } from "react";
import {findDOMNode} from 'react-dom';
import '../media/css/signup.css';
import { NavLink } from "react-router-dom";


 
class signin extends Component {
    componentDidMount(){
        document.title = "Sign-Up"
        document.getElementById("signin_button").style.backgroundColor="#fd7611"
        document.getElementById("login_button").style.backgroundColor="skyblue"


    }
    constructor(props) {
      super(props)
       
      this.state={
        isVerified: false,
        auth_data:{
          'register_as':'',
          'first_name':'',
          'last_name':'',
          'email':'',
          'mob_no':'',
          'password':''
        },
  
      }
      this.radio_toggle_vol=this.radio_toggle_vol.bind(this);
      this.radio_toggle_org=this.radio_toggle_org.bind(this);
    } 

    radio_toggle_vol(){
      var ele1=document.getElementById('inlineRadio1');
      var ele2=document.getElementById('inlineRadio2');
      ele1.checked=true;
      ele2.checked=false;

    }

    radio_toggle_org(){
      var ele1=document.getElementById('inlineRadio1');
      var ele2=document.getElementById('inlineRadio2');
      ele1.checked=false;
      ele2.checked=true;
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
      }

      if (this.state.isVerified) {
        // Call Registered API
        var ele1=document.getElementById('inlineRadio1');
        var ele2=document.getElementById('inlineRadio2');
        if (ele1.checked){
          this.state.auth_data.register_as=ele1.value;
        }
        else if (ele2.checked){
          this.state.auth_data.register_as=ele2.value;
        }
        
        this.state.auth_data.first_name=findDOMNode(this.refs.email).value;
        this.state.auth_data.last_name=findDOMNode(this.refs.lname).value;
        this.state.auth_data.email=findDOMNode(this.refs.email).value;
        this.state.auth_data.mob_no=findDOMNode(this.refs.mob).value;
        this.state.auth_data.password=findDOMNode(this.refs.psw).value;
        console.log("Register Data--->",this.state.auth_data);
      //  alert(findDOMNode(this.refs.register_as).value);
        alert("you registered sucessfully!");
      }
    
    };
    
    handleChange = event => {
      event.preventDefault();
      let email= findDOMNode(this.refs.email).value;
      let pass=findDOMNode(this.refs.psw).value;
      let mob_no=findDOMNode(this.refs.mob).value;
      let fname=findDOMNode(this.refs.fname).value;
      let lname=findDOMNode(this.refs.lname).value;

     

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
          this.state.isVerified=false;
          document.getElementById("email").innerText="";
        // document.getElementById("error_message_email_id").innerText="This Field is required!";
      }
      
      if (fname.length>0) {
        document.getElementById("fname").innerText="First Name";
        if (!/[^a-zA-Z]/.test(fname)){
          this.state.isVerified=true;
          document.getElementById("input_fname").style.border="1.5px solid green";
          document.getElementById("error_message_first_name").innerText="";

        }
        else{
          this.state.isVerified=false;
          document.getElementById("input_fname").style.border="1.5px solid red";
          document.getElementById("error_message_first_name").innerText="It takes Only Alphabate!";
        }
      }
      else{
        this.state.isVerified=false;
        document.getElementById("fname").innerText="";
      }
      
      if (lname.length>0) {
        document.getElementById("lname").innerText="Last Name";
        if (!/[^a-zA-Z]/.test(lname)){
          this.state.isVerified=true;
          document.getElementById("input_lname").style.border="1.5px solid green";
          document.getElementById("error_message_last_name").innerText="";
        }
        else{
          this.state.isVerified=false;
          document.getElementById("input_lname").style.border="1.5px solid red";
          document.getElementById("error_message_last_name").innerText="It takes Only Alphabate!";
        }
      }
      else{
        this.state.isVerified=false;
        document.getElementById("lname").innerText="";
      }


      if (pass.length>0){
        document.getElementById("password").innerText="Password";
        if(pass.length<8){
          document.getElementById("input_password").style.border="1.5px solid red";
          document.getElementById("error_message_password").innerText="Your password must be at least 8 characters";
          this.state.isVerified=false;
        }
        else if (pass.search(/[0-9]/) < 0){
          document.getElementById("input_password").style.border="1.5px solid red";
          document.getElementById("error_message_password").innerText="Your password must contain at least one digit.";
          this.state.isVerified=false;
        }
        else if(pass.search(/[a-zA-Z]/i) < 0){
          document.getElementById("input_password").style.border="1.5px solid red";
          document.getElementById("error_message_password").innerText="Your password must contain at least one Alphabate";
          this.state.isVerified=false;
        }
        else if(pass.search(/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/i) < 0){
          document.getElementById("input_password").style.border="1.5px solid red";
          document.getElementById("error_message_password").innerText="Your password must contain at least one special character";
          this.state.isVerified=false;
        }
        else{
          document.getElementById("input_password").style.border="1.5px solid green";
          document.getElementById("error_message_password").innerText="";
          this.state.isVerified=true;
        }
      }
      else{
        this.state.isVerified=false;
        document.getElementById("password").innerText="";
        document.getElementById("error_message_password").innerText="";
        document.getElementById("input_password").style.border="";
      }
      
      if (mob_no.length>0) {
        document.getElementById("mob_label").innerText="Mobile No";
        var mob_exp = /^[1-9]{1}[0-9]{9}$/;
        if (mob_exp.test(mob_no)) {
          this.state.isVerified=true;
          document.getElementById("input_mob").style.border="1.5px solid green";
          document.getElementById("error_message_mob_no").innerText="";


        }
        else{
          this.state.isVerified=false;
          document.getElementById("input_mob").style.border="1.5px solid red";
          document.getElementById("error_message_mob_no").innerText="Mobile Number is Invalid!";
        }
      }
      else{
        this.state.isVerified=false;
        document.getElementById("mob_label").innerText="";
      }
      

    };
    
  render() {
    return (
        <form class="login-form" onSubmit={this.handleSubmit}>
            <p>Sign Up Our Platform.</p>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio"  name="inlineRadioOptions" id="inlineRadio1" value="Volunteer" onClick={this.radio_toggle_vol} checked/>
                <label class="form-check-label" for="inlineRadio1">Volunteer</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio"  name="inlineRadioOptions" id="inlineRadio2" value="Organization" onClick={this.radio_toggle_org} />
                <label class="form-check-label" for="inlineRadio2">Orgnization</label>
            </div>
            <div>
              <span id="error_message_register_as" class="error_message"></span>
            </div>
            <label id="fname" class="form-check-label" for="dropdownCheck"></label>
            <input id="input_fname" type="text" placeholder="First Name" ref="fname" onChange={this.handleChange}/>
            <span id="error_message_first_name" class="error_message"></span><br/>
            <label id="lname" class="form-check-label" for="dropdownCheck"></label>
            <input id="input_lname" type="text" placeholder="Last Name" ref="lname" onChange={this.handleChange} />
            <span id="error_message_last_name" class="error_message"></span><br/>
            <label id="email" class="form-check-label" for="dropdownCheck"></label>
            <input type="text" id="input_email" placeholder="Email" ref="email" onChange={this.handleChange}/>
            <span id="error_message_email_id" class="error_message"></span><br/>
            <label id="mob_label" class="form-check-label" for="dropdownCheck"></label>
            <input id="input_mob" type="text" placeholder="Mobile Number" ref="mob" onChange={this.handleChange}/>
            <span id="error_message_mob_no" class="error_message"></span><br/>
            <label id="password" class="form-check-label" for="dropdownCheck"></label>
            <input id="input_password" type="password" placeholder="Password" ref="psw" onChange={this.handleChange}/>
            <span id="error_message_password" class="error_message"></span><br/>
            <div  id="check-term">
                <p>By registering here to indicate that you have read and agree to the <NavLink to="#">terms and condition</NavLink> of the Pareegh Private Limited.</p>
            </div>
            <span id="error_message_agree" class="error_message"></span>
            <div class="nextOrForgot">
              <button class="next" type="submit">Sign Up</button>
            </div>
        </form>
    )
  }
}
 
export default signin;