import React from "react";

class TextBox extends React.Component {
  render() {
    const text = this.props.count !=="" ?(
      <p>Join the {this.props.count} others who have already supported this project. Every dollar helps</p>
    )
    : (
      <p>Donation Over</p>
    )
    
    return ( 
      
      <div>
      {text}
      </div>
    )
  }
}

export default TextBox;