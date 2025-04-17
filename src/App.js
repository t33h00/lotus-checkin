
import './App.css';
import CheckIn from './components/CheckIn';
import List from './components/List';
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
        <Route path='/navibar' element={<NaviBar/>}/>
        <Route path='/list' element={<List/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
