import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';
// import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Location from './components/Location/Location';
import Episodes from './components/Episodes/Episodes';

const App = () => {

  return (
    <div>
      <Router>

        <Routes>
          <Route path='/' element={<LandingPage />} />
       
          <Route path='/home' element={<Home/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/episodes' element={<Episodes/>}/>
        </Routes>
          

      </Router>
    </div>
  )
}

export default App;
