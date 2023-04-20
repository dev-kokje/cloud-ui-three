import { StrictMode } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <StrictMode>
      <h1>Hello Cloud World</h1>
      <Button variant='primary'>click me</Button>
    </StrictMode>
  );
}

export default App;
