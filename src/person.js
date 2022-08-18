import React from 'react';


// const message = () => {
//     const name = "Jesse";
//     const age = 10;
//     return age > 50 ? "Grown":"Young" ;
//   };
  
//   export default message;

// import React from 'react';

// class Person extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       car: "GLE",
//       color: 'black',
//       condition: "new",
//       period: 2022
//     };
//   }

//   static getDerivedStateFromProps(props, state) {
//     return {color: props.favcol };
//   }

//   jump = () => {
//     this.setState({car: "Heavy Duty"});
//     this.setState({color: "White"});
//     this.setState({quality: "tear rubber"});
//     this.setState({period: 2023});
  
//   }

  


//   render() {
//     return <>
//     <h2>I am a successful {this.props.manifest}</h2>
//     <p>I have a {this.state.condition} {this.state.color} Benz {this.state.car} {this.state.period} edition.</p>
//     <button
//           class='Qjump'
//           type="button"
//           onClick={this.jump}
//         >Quantum Jump</button>
//     </>
    
//   }
// }





class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            car: "GLE",
            color: 'black',
            condition: "new",
            period: 2022
          };
  }
  // static getDerivedStateFromProps(props, state) {
  //   return {color: props.favcol };
  // }

  componentDidMount() {
    setTimeout(() => {
      this.setState({color: "yellow"})
    }, 3000)
  }

  render() {
    return (
      <h1>I have a {this.state.condition} {this.state.color} Benz {this.state.car} {this.state.period} edition.</h1>
    );
  }
}
export default Person;