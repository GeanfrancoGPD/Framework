import style from './ventana_modal.module.css';

const ventana_modal = ({ titulo, nota, onChange, onGuardar, onCancelar }) => {
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h2>{titulo}</h2>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={nota.titulo}
          onChange={onChange}
        />
        <div className={style.contenedorTextarea}>
          <textarea
            name="contenido"
            placeholder="Contenido"
            value={nota.contenido}
            onChange={onChange}
            rows="4"
            cols="40"
          />
        </div>
        <div>
          <button onClick={onGuardar} className={style.buttonGuardar}>Guardar</button>
          <button onClick={onCancelar} className={style.buttonCancelar}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ventana_modal;
