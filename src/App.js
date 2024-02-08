import { Routes, Route, Link } from 'react-router-dom';

import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Welcome to Greetings</h3>
      <Link to="/greeting">Go to greeting page</Link>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
