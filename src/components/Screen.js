import React from 'react';
import '../styles/Screen.css';

class Screen extends React.Component{
    render(){
        return(
            <input type="text"  value={this.props.class == 'first-input'?this.props.val:this.props.ans} className={this.props.class} />
        )
    }
}

export default Screen