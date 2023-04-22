import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import CanvasEditPage from './pages/CanvasEditPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/canvas-edit' element={ <CanvasEditPage /> } />
        <Route path='/*' element={ <LandingPage /> } />
      </Routes>
    </>
  );
}

export default App;
