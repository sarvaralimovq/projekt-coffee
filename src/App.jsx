import './App.scss';
import Discover from './components/Discover/Discover';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Discover/>
    </div>
  );
}

export default App;
