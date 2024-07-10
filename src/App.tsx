import React from 'react';
import Navbar from './components/navbar';
import Body from './components/body';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
