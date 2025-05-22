// src/paginas/Register.js
import styles from './register.module.css';
import { useState } from 'react';
import { useAuth } from '../firebase/authContex';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [gmail, setGmail] = useState('');
  const [cell, setCell] = useState('');
  const [error, setError] = useState(false);

  const { register } = useAuth(); // accedemos al contexto
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !pass || !gmail || !cell) {
      setError(true);
      return;
    }

    try {
      await register(gmail, pass);
      console.log('Usuario registrado');
      navigate('/'); // redirige al login o página principal
    } catch (err) {
      console.error('Error al registrar:', err.message);
      setError(true);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.RegisterContainer}>
        <section>
          <h1 className={styles.RegisterTitle}>Register</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Usuario" onChange={e => setUser(e.target.value)} />
            <input type="password" placeholder="Contraseña" onChange={e => setPass(e.target.value)} />
            <input type="email" placeholder="Correo" onChange={e => setGmail(e.target.value)} />
            <input type="tel" placeholder="Número de teléfono" onChange={e => setCell(e.target.value)} />
            <button type="submit" className={styles.ButtonRegister}>Register</button>
          </form>
          <p className={styles.RegisterLink}>
            ¿Ya tienes cuenta? <a href="/" className={styles.ButtonLogin}>Inicia aquí</a>
          </p>
          {error && <p className={styles.errorText}>Todos los campos deben rellenarse o hubo un error</p>}
        </section>
      </div>
    </div>
  );
}

export default Register;
