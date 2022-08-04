import React from 'react';
import ReactDOM from 'react-dom/client';

class Car {
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
  const mylist = myArray.map((item) => <p>{item}</p>)
 

//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(mylist, document.getElementById('root'));

