import Header from './components/Header';
import Home from './components/Home';
import WhatWeDo from './components/WhatWeDo';
import Team from './components/Team';
import './App.css';

function App() {
  return (
    <div style={{
      width: '100vw',
      height: 'fit-content',
      position: 'relative',
      background: 'linear-gradient(112deg, #1FD35F 0%, rgba(138.13, 255, 179.68, 0.66) 100%, rgba(138.13, 255, 179.68, 0.66) 100%)'
      }}>
      <Header />
    
      <Home />
      <WhatWeDo />
      <Team />

    </div>
  );
}

export default App;
