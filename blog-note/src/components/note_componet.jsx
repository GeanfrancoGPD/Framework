import React, { useState } from "react";
import style from "./Nota.module.css";
import { eliminarNota } from "./Notas_setting";

const Nota = ({ user, id, titulo, contenido, onEditar, onVer }) => {
  // Estado para fondo, color de texto y font-family
  const [colorFondo, setColorFondo] = useState("rgba(3, 3, 145, 0.52)"); // fondo azul claro semi-transparente
  const [colorTexto, setColorTexto] = useState("white"); // texto azul base
  const [fuenteTexto, setFuenteTexto] = useState("Arial, sans-serif"); // fuente base

  // Handlers para cada select
  const handleColorFondoChange = (e) => setColorFondo(e.target.value);
  const handleColorTextoChange = (e) => setColorTexto(e.target.value);
  const handleFuenteChange = (e) => setFuenteTexto(e.target.value);

  return (
    <li
      className={style.notaItem}
      style={{ backgroundColor: colorFondo, color: colorTexto, fontFamily: fuenteTexto }}
    >
      <div>
        {/* Select para cambiar fondo */}
        <select value={colorFondo} onChange={handleColorFondoChange} className={style.Selects}>
          <option value="rgba(3, 3, 145, 0.52)">🟦</option>
          <option value="rgba(0, 0, 0, 0.4)">⬛</option>
          <option value="rgba(255, 0, 0, 0.4)">🟥</option>
          <option value="rgba(255, 255, 0, 0.4)">🟨</option>
          <option value="rgba(255, 166, 0, 0.4)">🟧</option>
          <option value="rgba(128, 0, 128, 0.4)">🟪</option>
          <option value="rgba(255, 255, 255, 0.7)">⬜</option>
        </select>

        {/* Select para cambiar color del texto */}
        <select value={colorTexto} onChange={handleColorTextoChange} className={style.Selects}>
          <option value="white">⚪</option>
          <option value="black">⚫</option>
          <option value="blue">🔵</option>
          <option value="red">🔴</option>
          <option value="green">🟢</option>
          <option value="orange">🟠</option>
          <option value="purple">🟣</option>
        </select>

        {/* Select para cambiar fuente */}
        <select value={fuenteTexto} onChange={handleFuenteChange} className={style.Selects}>
          <option value="Arial, sans-serif">Arial</option>
          <option value="'Courier New', Courier, monospace">Courier New</option>
          <option value="'Times New Roman', Times, serif">Times New Roman</option>
          <option value="'Georgia', serif">Georgia</option>
          <option value="'Comic Sans MS', cursive, sans-serif">Comic Sans MS</option>
        </select> 
      </div>
      <h3>{titulo}</h3>
      <p>{contenido}</p>
      <div className={style.buttonContainer}>
        <button
          className={style.ButtonSelection}
          onClick={() => onEditar({ notasID: id, titulo, contenido })}
        >
          editar
        </button>
        <button
          className={style.ButtonSelection}
          onClick={() => {
            eliminarNota(user, id)
              .then(() => console.log("Nota eliminada correctamente"))
              .catch((err) => console.error("Error al eliminar:", err));
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
};

export default Nota;
