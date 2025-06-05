import { useState, useEffect } from "react";
import { useAuth } from "../firebase/authContex";
import { crearNota, obtenerNotas, actualizarNota } from "../components/Notas_setting";
import Ventana_modal from "../components/ventana_modal";
import VentanaVerNota from "../components/ventana_Ver_nota";
import Nota from "../components/note_componet";
import style from "./home_blog.module.css";

function Home_blog() {
    const { user } = useAuth();
    const [notas, setNotas] = useState([]);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [notaEditandoId, setNotaEditandoId] = useState(null);
    const [notaVer, setNotaVer] = useState(null);
    const [mostrarVerNota, setMostrarVerNota] = useState(false);

    const abrirVerNota = (nota) => {
        setNotaVer(nota);
        setMostrarVerNota(true);
    };

    const cerrarVerNota = () => {
        setMostrarVerNota(false);
        setNotaVer(null);
    };


    const comenzarEdicion = (nota) => {
        setModoEdicion(true);
        setNotaEditandoId(nota.notasID);
        setNuevaNota({ titulo: nota.titulo, contenido: nota.contenido });
        setMostrarVentana(true);
    };

    const [mostrarVentana, setMostrarVentana] = useState(false);

    const [nuevaNota, setNuevaNota] = useState({
        titulo: "",
        contenido: ""
    });

    // Cargar notas desde Firebase en tiempo real
    useEffect(() => {
        if (user) {
            obtenerNotas(user.uid, setNotas); // Escucha en tiempo real
        }
    }, [user]);

    const abrirVentana = () => {
        setMostrarVentana(true);
    };

    const cerrarVentana = () => {
        setMostrarVentana(false);
        setNuevaNota({ titulo: "", contenido: "" });
        setModoEdicion(false);
        setNotaEditandoId(null);
    };

    const guardarNota = async () => {
        if (nuevaNota.titulo.trim() === "" || nuevaNota.contenido.trim() === "") {
            alert("Por favor completa ambos campos");
            return;
        }

        if (user) {
            if (modoEdicion && notaEditandoId) {
            await actualizarNota(user.uid, notaEditandoId, nuevaNota); // NUEVO: actualiza nota
            } else {
            await crearNota(user.uid, nuevaNota); // Crear nueva nota
            }
        }

        cerrarVentana();    
    };

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
                        <Nota key={nota.notasID} user={user.uid} id={nota.notasID} 
                        titulo={nota.titulo} contenido={nota.contenido} 
                        onEditar={comenzarEdicion} onVer={abrirVerNota} />
                    ))}
                </ul>
            </div>

            <div className={style.footer}>
                <button onClick={abrirVentana} className={style.buttonCreate}>Crear Nota</button>
            </div>

            {mostrarVentana && (
                <Ventana_modal
                    titulo={modoEdicion ? "Editar Nota" : "Crear Nueva Nota"}
                    nota={nuevaNota}
                    onChange={handleChange}
                    onGuardar={guardarNota}
                    onCancelar={cerrarVentana}
                />
            )}
            {mostrarVerNota && (
            <VentanaVerNota
                nota={notaVer}
                onCerrar={cerrarVerNota}
                />
            )}
        </div>
    );
}

export default Home_blog;
