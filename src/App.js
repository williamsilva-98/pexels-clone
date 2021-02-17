import React from 'react'
import './styles.scss'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Gallery />
    </div>
  );
}

export default App;
