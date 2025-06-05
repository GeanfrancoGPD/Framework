import style from './ventana_ver_nota.module.css';

const VentanaVerNota = ({ nota, onCerrar }) => {
  if (!nota) return null;

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <button className={style.cerrarBtn} onClick={onCerrar}>X</button>
        <h2 className={style.titulo}>{nota.titulo.length > 20 ? nota.titulo.slice(0, 50) + "..." : nota.titulo}</h2>
        <p className={style.parrafo}>{nota.contenido}</p>
      </div>
    </div>
  );
};

export default VentanaVerNota;
