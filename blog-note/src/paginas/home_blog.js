import { useState } from "react";
import style from "./home_blog.module.css";

function Home_blog() {
    const [notas, setNotas] = useState([
        { notasID: 1, titulo: "Nota Inicial", contenido: "hola" },
        { notasID: 2, titulo: "Nota2", contenido: "word" },
        
    ]);

    const [mostrarVentana, setMostrarVentana] = useState(false);

    // Estado para la nueva nota
    const [nuevaNota, setNuevaNota] = useState({
        titulo: "",
        contenido: ""
    });

    // Abrir ventana
    const abrirVentana = () => {
        setMostrarVentana(true);
    };

    // Cerrar ventana y limpiar datos
    const cerrarVentana = () => {
        setMostrarVentana(false);
        setNuevaNota({ titulo: "", contenido: "" });
    };

    // Guardar nota
    const guardarNota = () => {
        if (nuevaNota.titulo.trim() === "" || nuevaNota.contenido.trim() === "") {
        alert("Por favor completa ambos campos");
        return;
        }

        const nueva = {
        notasID: notas.length + 1,
        titulo: nuevaNota.titulo,
        contenido: nuevaNota.contenido
        };

        setNotas([...notas, nueva]);
        cerrarVentana();
    };

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        setNuevaNota({
        ...nuevaNota,
        [e.target.name]: e.target.value
        });
    };

    return (
        <div className={style.Container}>
        <div className={style.header}>
            <h1>Bienvenido al blog de notas</h1>
        </div>

        <div className={style.body}>
            <h1>Notas:</h1>
            <ul className={style.gridNotas}>
                {notas.map((nota) => (
                    <li key={nota.notasID} className={style.notaItem}>
                    <h3>{nota.titulo}</h3>
                    <p>{nota.contenido}</p>
                    </li>
                ))}
            </ul>
        </div>

        <div className={style.footer}>
            <button onClick={abrirVentana} className={style.buttonCreate}>Crear Nota</button>
        </div>

        {/* Ventana flotante */}
        {mostrarVentana && (
            <div className={style.modal}>
            <div className={style.modalContent}>
                <h2>Crear Nueva Nota</h2>
                <input
                type="text"
                name="titulo"
                placeholder="Título"
                value={nuevaNota.titulo}
                onChange={handleChange}
                />
                <div className={style.contenedorTextarea}>  
                    <textarea
                    name="contenido"
                    placeholder="Contenido"
                    value={nuevaNota.contenido}
                    onChange={handleChange}
                    rows="4"
                    cols="40"
                    />
                </div>
                <div>
                <button onClick={guardarNota} className={style.buttonGuardar}>Guardar</button>
                <button onClick={cerrarVentana} className={style.buttonCancelar}>Cancelar</button>
                </div>
            </div>
            </div>
        )}
        </div>
    );
}

export default Home_blog;
