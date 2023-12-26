import './App.scss';
import Discover from './components/Discover/Discover';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Discover/>
      <Menu/>
    </div>
  )
}

export default App;
