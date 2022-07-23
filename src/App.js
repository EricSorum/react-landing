import './style/App.css';
import Header from './components/Header';
import Body from './components/Body';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Social from './components/Social';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Signup />
      <Footer />
      <Social />
    </div>
  );
}

export default App;
