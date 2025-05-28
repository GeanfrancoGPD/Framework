import { Routes, Route } from 'react-router-dom';
import Login from './paginas/login';
import Register from './paginas/register';
import Home_blog from './paginas/home_blog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home-blog" element={<Home_blog/>}/>
    </Routes>
  );
}

export default App;
