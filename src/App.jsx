import './App.scss';
import Discover from './components/Discover/Discover';
import Elections from './components/Elections/Elections';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Invitition from './components/Invitition/Invitition';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Discover/>
      <Menu/>
      <Elections/>
      <Invitition/>
    </div>
  )
}

export default App;
