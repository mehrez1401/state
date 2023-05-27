import React, { Component } from 'react'
import  ContainerSyst from './Component/ContainerSyst'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  // initialisation de state
  constructor(){


    super()
    this.state={voir:false }}
    toggle=()=>{
      this.setState({show: !this.state.show})
    }

  render() {
    return (
      <div >
            <button onClick={() =>this.toggle()}>Show/Hide</button>
           { this.state.show && <ContainerSyst/> }

      </div>
    )
  }
}
