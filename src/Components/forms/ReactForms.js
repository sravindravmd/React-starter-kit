/**
 * Created by ravindras on 02/09/17.
 */

import React, { Component } from 'react';
import InputComponent from './InputComponent';

class ReactForm extends Component {

 constructor(){
    super();
    this.state = {firstName:'', lastName:'',};
 }

 setFormValues(event){

   let field= event.target.name;
   let value = event.target.value;
   this.setState(this.state[field]=value);

 }

  render() {
    return(
      <div>
       <h1> React forms Examples: </h1>

        <InputComponent onChange={this.setFormValues.bind(this)} label={"First Name"} placeholder="First Name" inputValue={this.state.firstName}/>
        <InputComponent onChange={this.setFormValues.bind(this)} label={"Last Name"} placeholder="Last Name" inputValue={this.state.lastName}/>

        <br/>
        <input type="submit" value="Save" className="btn btn-primary"/>
      </div>
    )
  }
}

export default ReactForm;
