// Register.js
function Register() {
  return (
    <div>
      <h1>Registro</h1>
      <form>
        {/* Aquí va tu formulario de registro */}
        <input type="text" placeholder="Nombre de usuario" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
}

export default Register;
