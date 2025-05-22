import { Routes, Route } from 'react-router-dom';
import Login from './paginas/login';
import Register from './paginas/register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
