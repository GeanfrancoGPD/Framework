import styles from './register.module.css'
// Register.js
function Register() {
  return (
    <div className={styles.main}>
        <div className={styles.RegisterContainer}>
            <h1 className={styles.RegisterTitle}>Register</h1>
            <form>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <input type='gmail' placeholder='Correo'/>
                <input type='telf' placeholder='Numero de telefono' />
                <button type="submit" className={styles.ButtonRegister}>Register</button>
            </form>
            <p className={styles.RegisterLink}>
              ¿Ya tienes cuenta? <a href="/" className={styles.ButtonLogin}>inicia aqui</a>
            </p>
            
        </div>
     </div>
  );
}

export default Register;
