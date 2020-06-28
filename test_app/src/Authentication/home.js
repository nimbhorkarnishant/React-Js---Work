import React, { Component } from "react";
import {findDOMNode} from 'react-dom';

 
class Home extends Component {
  render() {
    return (
      <div>
        <h3><b>Welcome</b></h3>
        <div>
            <h2>Home Page</h2>
            <p>Thisdummy home page to see how it works.</p>
        </div>
      </div>
    );
  }
}
 
export default Home;