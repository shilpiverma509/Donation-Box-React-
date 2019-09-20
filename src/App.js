import React from 'react';
import DonationBox from './components/DonationBox';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      min:0,
      max:100,
      currentValue:10,
      count:42
    }
  }
  render(){
    return (
      <div className="container">
        <DonationBox count={this.state.count} currentValue={this.state.currentValue} min={this.state.min} max={this.state.max} />
      </div>
    );
}
}

export default App;
