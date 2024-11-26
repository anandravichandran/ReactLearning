import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Car from './components/Car';
import CarShowroom from './components/CarShowroom';
import reportWebVitals from './reportWebVitals';

// // create a components in index.js
// function Car() {
//   return (
//       <h2>Hi I'm a Car</h2>
//   );
// }

// // create a one component and importing another components

// function CarShowroom(){
//   return(
//     // ***************************
//     // <h4>we have lots of cars in our showroom</h4>
//     // <Car/>  
//     // above the two line code has show an error becoz it have one parent element
    
//     // *************************

//     // <div>
//     //   <h4>We have lots of cars in our showroom</h4>
//     //   <Car/>
//     // </div>

//     // here you see that  div is a parent and h4 and car are children
//     // or incase we can use angel brackets <> </> becoz sometimes <div> </div> spoil the design

//     // another way to create a components through the components folder
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Car/>
    <CarShowroom/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
