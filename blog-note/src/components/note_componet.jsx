// components/Nota.jsx
import style from "./Nota.module.css";

const Nota = ({ titulo, contenido }) => (
  <li className={style.notaItem}>
    <h3>{titulo}</h3>
    <p>{contenido}</p>
  </li>
);

export default Nota;
