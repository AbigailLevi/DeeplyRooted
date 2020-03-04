import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Footer from '../src/components/footer';
import Home from '../src/views/Home'

function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <Home/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
