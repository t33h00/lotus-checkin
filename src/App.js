
import './App.css';
import CheckIn from './components/CheckIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NaviBar from './components/NaviBar'

function App() {
  return (
    <>
    <NaviBar></NaviBar>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<CheckIn/>}/>
        <Route path='/checkin' element={<CheckIn/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
