import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Search from './components/Search';
import Navigation from './components/Navigation';
import Pages from './pages/Pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search/>
        <Navigation/>
        <Pages/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
