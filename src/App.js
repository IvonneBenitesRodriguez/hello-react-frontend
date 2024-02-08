import { Routes, Route, Link } from 'react-router-dom';
// import axios from 'axios';
import Greeting from './components/Greeting';
import './App.css';

function App() {
  // const response = axios.get('http://127.0.0.1:3000/api/v1/greetings');
  // const res = response.data;
  // console.log(res);
  // fetch('http://127.0.0.1:3000/api/v1/greetings').then((response) => response.json()).then((data) => console.log(data));
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
