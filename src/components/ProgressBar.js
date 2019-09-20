import React from "react";

class ProgressBar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const widthStyle= `${this.props.currentValue}%`;
    return (
      <div className="tracker" style={{width:`${widthStyle}`}}>
      </div>
    )
  }
}

export default ProgressBar;