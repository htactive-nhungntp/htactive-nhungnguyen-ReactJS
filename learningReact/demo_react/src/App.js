import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
// import DemoProps from './Props.DemoProps'
const student = {id:  1, name:"nhung",age:20}
const menu = { title:'Welcome to React JS', name:["Home", "About", "Contact","Video","Language"]}
function App() {
  
  return (
    <>
    <Header data= {menu}/>
    <Content student= {student}/>
    <Footer />
    {/* <DemoProps student= {student}/> */}
    
    </>
  );
}


export default App;
