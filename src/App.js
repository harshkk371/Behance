import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Searchbar from './components/searchbar/searchbar';
import Body from './components/Body/Body';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Searchbar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
