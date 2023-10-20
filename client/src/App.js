import React from 'react';
import Header from './compnents/header';
import Footer from './compnents/footer';
import MidText from './compnents/midh';

function App() {
  return (
    <div>
      <Header/>
      <MidText/> 
      <Footer/>
      {/* Add the rest of your content below the header */}
    </div>
  );
}

export default App;
