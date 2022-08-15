// const message = () => {
//     const name = "Jesse";
//     const age = 10;
//     return age > 50 ? "Grown":"Young" ;
//   };
  
//   export default message;

import React from 'react';

class Person extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      car: "GLE",
      color: "black",
      condition: "new",
      period: 2022
    };
  }


  jump = () => {
    this.setState({car: "Heavy Duty"});
    this.setState({color: "White"});
    this.setState({quality: "tear rubber"});
    this.setState({period: 2023});
  
  }



  render() {
    return <>
    <h2>I am a successful {this.props.manifest}</h2>
    <p>I have a {this.state.condition} {this.state.color} Benz {this.state.car} {this.state.period} edition.</p>
    <button
          id='jump'
          type="button"
          onClick={this.jump}
        >Quantum Jump</button>
    </>
    
  }
}

export default Person;