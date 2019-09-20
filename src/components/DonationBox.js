import React from "react";
import { ProgressBar,OverlayTrigger,Tooltip,Form } from 'react-bootstrap';
import TextBox from "./TextBox";


class DonationBox extends React.Component{
  constructor(props){
    super(props);
    this.state={
      maxAmout:'100$',
      currentValue:this.props.currentValue,
      amountToDonate:"",
      error:"",
      count:this.props.count,
      toolTipData: this.props.currentValue,
      amountLeft:`$${this.props.max-this.props.currentValue} still needed for this project`
    }
  }

   handleOnChange = (e)=>{
     this.setState({amountToDonate:e.target.value});
     if(e.target.value<5 || e.target.value>100){
       this.setState({
         error:"Please enter amount in between 5$ to 100$"
       })
     }else{
     this.setState({
      amountToDonate:e.target.value,
      error:""
     })
   }
  }

    handleSubmit = (e)=>{
      e.preventDefault();
      const totalAmountDonated=((+this.state.amountToDonate )+ (+this.state.currentValue)) ;
      const amount=((this.props.max)-(totalAmountDonated));
      const amountLeft = (amount<=0) ? "We have reached our target.Thanks" : `$${amount} still needed for this project`;
      const currentValue = totalAmountDonated;
      const toolTipData = currentValue > this.props.max ? this.props.max : currentValue;
      const count=currentValue>=100?"":this.state.count+1;
      this.setState({
        currentValue,
        toolTipData,
        amountToDonate:"",
        amountLeft:amountLeft,
        count
      })

    }

    isDisabled(){
      if(this.state.currentValue >=this.props.max){
        return true
      }
      else {
        return false;
      }
    }

  render(){
    const toolTipPlacement = "top";
    return (
      <div className="donation-box">
      <OverlayTrigger
        key={toolTipPlacement}
        placement={toolTipPlacement}
        overlay={
          <Tooltip 
            id={`tooltip-${toolTipPlacement}`}style={{
            backgroundColor: 'rgba(255, 100, 100, 0.85)',
            padding: '2px 10px',
            color: 'white',
            borderRadius: " "}}>
             <strong>{this.state.amountLeft}</strong>
          </Tooltip>
        }
      >
      <ProgressBar min={this.props.min} max={this.props.max} now={this.state.toolTipData} className="progress-tracker" />
      </OverlayTrigger>
      <TextBox count={this.state.count} />
      <Form onSubmit={this.handleSubmit} className="db-form">
      <Form.Group>
        <Form.Control 
          min={this.props.min+5}
          max={this.props.max} 
          type="number" 
          onChange={this.handleOnChange}
          placeholder="Amount"
          value={this.state.amountToDonate}
        />
          <div className={this.state.error?"show-error":"hide-error"}>{this.state.error}</div>
          </Form.Group>
        <button className="btn btn-primary submit-btn" disabled={this.isDisabled()}  type="submit">Donate Now</button>
      </Form>
      </div>
    )
  }
}

export default DonationBox;