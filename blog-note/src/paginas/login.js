// Login.js
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); // Hook para redirigir

  /*const handleRegisterClick = () => {
    navigate('/register');
  };*/

  return (
    <div className={styles.main}>
        <div className={styles.loginContainer}>
            <h1 className={styles.loginTitle}>Login</h1>
            <form>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <button type="submit" className={styles.ButtonLogin}>Iniciar Sesión</button>
            </form>
            <p className={styles.registerLink}>
              ¿No tienes cuenta? <a href="/register" className={styles.ButtonRegister}>Regístrate aquí</a>
            </p>
            
        </div>
      
    </div>
  );
}

export default Login;
