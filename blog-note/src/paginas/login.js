// Login.js
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); // Hook para redirigir

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        {/* Aquí va tu formulario de login */}
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar Sesión</button>
      </form>

      <p>¿No tienes cuenta?</p>
      <button onClick={handleRegisterClick}>Registrarse</button>
    </div>
  );
}

export default Login;
