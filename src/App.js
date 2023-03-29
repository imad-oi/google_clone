import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link} from 'react-router-dom' ; 
import Header from './components/Header';
import Results from './components/Results';
// import Links from './components/Links';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
        <Routes>
            <Route path={'/search'} element={<Results/>} />
            <Route path={'/imagessearch'} element={<Results/>} />
          </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;