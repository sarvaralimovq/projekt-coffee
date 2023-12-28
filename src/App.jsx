import './App.scss';
import Discover from './components/Discover/Discover';
import Elections from './components/Elections/Elections';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Invitition from './components/Invitition/Invitition';
import Latest from './components/Latest/Latest';
import Menu from './components/Menu/Menu';
import Perfection from './components/Perfection/Perfection';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Discover/>
      <Menu/>
      <Elections/>
      <Invitition/>
      <Perfection/>
      <Latest/>
    </div>
  )
}

export default App;
