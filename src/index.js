import React from 'react';
import ReactDOM from 'react-dom/client';

/*class Car {
    constructor(name,year) {
      this.brand = name;
      this.year = year;
    }
  
    present = () =>'I have a ' + this.brand;
    
  }
  
  class Model extends Car {
    constructor(name,year, mod) {
      super(name,year);
      this.model = mod;
    }  
    show = () => this.present() + ', it is a ' + this.model +' in ' + this.year 
    
  }
  
  const mycar = new Model("Ford", "Mustang","2022");
  
  const myArray = ['apple', 'banana', 'orange'];
  const thecar = {type:"Fiat", model:"500", color:"white"};

  //map function
  const mylist = myArray.map((item) => <p>{item}</p>)

  const vehicles = ['mustang', 'f-150', 'expedition'];

  const [Name,Num,paint] = thecar
  
 */

  const person = {
    name: 'Jesse',
    age: 30, 
    address: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  
  displayMessage(person)
  
  function displayMessage({name,address: { city,state }}) {
    return 'I am ' +name +' I live in ' +city+' ' + state + '.';
  }

const root = ReactDOM.createRoot(document.getElementById('root'));

//document.getElementById("demo").style.color = 'red';
document.getElementById("demo").style.margin = '50%';

root.render("WORKED");
document.getElementById("demo").innerHTML = "worked";

