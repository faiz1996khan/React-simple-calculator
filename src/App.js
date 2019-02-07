import React, { Component } from 'react';
import './App.css';
import Screen from './components/Screen';
import Keys from './components/Keys';

class App extends Component {
  constructor(){
    super()
    this.state = {
      input:'',
      calculated:''
    }
    this.takeinputval = this.takeinputval.bind(this)
  }
  takeinputval(val){
    if(val == 'equals'){
      this.setState(prevState =>{
        return{
          calculated:eval(prevState.input)
        }
      })  
    }else if(val == 'C'){
      this.setState(prevState =>{
        return{
          input:prevState.input = '',
          calculated:prevState.calculated = ''
        }
      })
    }else if(val == 'back'){
        this.setState(prevState =>{
          return{
            input:prevState.input.slice(0,prevState.input.length-1)
          }
        })
    }else if(val == 'sqrt'){
      this.setState(prevState =>{
        return{
          calculated:Math.sqrt(prevState.input)
        }
      })
  }else if(val == 'sq'){
    this.setState(prevState =>{
      return{
        calculated:Math.pow(prevState.input,2)
      }
    })
}else{
      this.setState(prevState =>{
        return{
          input:prevState.input+val
        }
      })
      
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="main-calci">
          <div className="screen">
            <Screen 
              class="first-input" 
              val = {this.state.input}
            />
            <br/><br/>
            <Screen 
              class="second-input" 
              ans={this.state.calculated}
              />
          </div>
          <div className="keypad">
            <Keys 
              top="0%" 
              numerals={['1','2','3','+']}
              getInput={this.takeinputval}
            />  
            <Keys 
              top="20%" 
              numerals={['4','5','6','-']}
              getInput={this.takeinputval}
            />
            <Keys 
              top="40%" 
              numerals={['7','8','9','*']}
              getInput={this.takeinputval}
            />
            <Keys 
              top="60%" 
              numerals={['0','.','=','/']}
              getInput={this.takeinputval}
            />
            <Keys  
              top="80%" 
              numerals={['sqrt','sq','C','<']}
              getInput={this.takeinputval}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
