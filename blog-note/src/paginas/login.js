// Login.js
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); // Hook para redirigir

  /*const handleRegisterClick = () => {
    navigate('/register');
  };*/

  return (
    <div className="main">
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <input type="gmail" placeholder="Correo"/>
                <input type="tel" placeholder="Numero de telefono"></input>
                <button type="submit" className='Button-login'>Iniciar Sesión</button>
            </form>
            <p className="register-link">
              ¿No tienes cuenta? <a href="/register" className="Button-register">Regístrate aquí</a>
            </p>
            
        </div>
      
    </div>
  );
}

export default Login;
