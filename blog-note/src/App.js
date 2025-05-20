import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/login';
import Register from './paginas/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
