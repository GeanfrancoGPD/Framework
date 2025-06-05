// components/Nota.jsx
import style from "./Nota.module.css";
import {editarNota,eliminarNota} from "./Notas_setting"

const Nota = ({ user, id, titulo, contenido, onEditar, onVer }) => (
  <li className={style.notaItem}>
    <h3>{titulo}</h3>
    <p>{contenido}</p>
    <div className={style.buttonContainer}>
      <button className={style.ButtonSelection} onClick={() => 
        onEditar({ notasID: id, titulo, contenido })}>editar</button>
      <button className={style.ButtonSelection}
        onClick={() => {
          eliminarNota(user, id)
          .then(() => console.log("Nota eliminada correctamente"))
          .catch((err) => console.error("Error al eliminar:", err));;
        }}
      >
        borrar
      </button>
       <button
        className={style.ButtonSelection}
        onClick={() => onVer({ notasID: id, titulo, contenido })}
      >
        ver
      </button>
    </div>
  </li>
);

export default Nota;
