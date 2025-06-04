// Login.js
import { useState } from "react";
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/authContex';

function Login() {
  const [email, setEmail] = useState("");       
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("");

  const { login } = useAuth();  // Acceder a la función login desde el contexto
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Todos los campos deben estar llenos");
      return;
    }

    try {
      await login(email, password); // Llama a la función de login
      console.log("Bienvenido");
      navigate('/home-blog'); // Redirige a la página principal
    } catch (err) {
      console.error("Error al iniciar sesión:", err.message);
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit" className={styles.ButtonLogin}>Iniciar Sesión</button>
        </form>
        <p className={styles.registerLink}>
          ¿No tienes cuenta? <a href="/register" className={styles.ButtonRegister}>Regístrate aquí</a>
        </p>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </div>
  );
}

export default Login;
