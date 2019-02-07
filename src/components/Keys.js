import React, {Component} from 'react';
import '../styles/Keys.css';

class Keys extends Component{
    constructor(){
        super()
        this.state = {
            text:''
        }
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }
    handleButtonClick(e){
        let butt = e.target.innerText
        if(butt == '='){
            this.props.getInput('equals')
        }else if(butt == 'C'){
            this.props.getInput('C')
        }else if(butt == '<'){
            this.props.getInput('back')
        }else{
            this.props.getInput(butt)
        }
    }
    render(){
        let style = {
            position:"absolute",
            top:`${this.props.top}`
        }
        return(
            <div className="row" style = {style}>
                <div 
                    onClick={this.handleButtonClick} 
                    className="first hvr">
                    {this.props.numerals[0]}
                </div>
                <div 
                    onClick={this.handleButtonClick} 
                    className="second hvr">
                    {this.props.numerals[1]}
                </div>
                <div 
                    onClick={this.handleButtonClick} 
                    className="third hvr">
                    {this.props.numerals[2]}
                </div>
                <div style={{background:this.props.numerals[3] == "<"?"red":"orange"}}
                    onClick={this.handleButtonClick} 
                    className="four hvr">
                    {this.props.numerals[3]}
                </div>
            </div>
        )
    }
}

export default Keys