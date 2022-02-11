import React from 'react';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
