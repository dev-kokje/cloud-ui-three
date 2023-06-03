import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import ProjectEditPage from './pages/ProjectEditPage';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  const { darkMode } = useContext(ThemeContext)

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.body.setAttribute('data-bs-theme', theme);
  }, [darkMode]);

  return (
    <>
      <Routes>
        <Route 
            path='/canvas-edit' 
            element={ 
              <ProjectEditPage />
            } 
          />
        <Route 
            path='/*' 
            element={ 
              <LandingPage darkMode={darkMode ? "dark" : "light"} /> 
            } 
          />
      </Routes>
    </>
  );
}

export default App;
