import { ref, set, push, onValue, remove, update } from "firebase/database";
import { db } from "../firebase/firebase_config";


export const crearNota = async (uid, nota) => {
  const notaRef = ref(db, `usuarios/${uid}/notas`);
  const nuevaNotaRef = push(notaRef);
  await set(nuevaNotaRef, nota);
};

export const obtenerNotas = (uid, setNotas) => {
  const notasRef = ref(db, `usuarios/${uid}/notas`);
  onValue(notasRef, (snapshot) => {
    const data = snapshot.val();
    const notasArray = data
      ? Object.entries(data).map(([key, value]) => ({
          notasID: key,
          ...value,
        }))
      : [];
    setNotas(notasArray);
  });
};

export const actualizarNota = (userId, notaId, nuevaData) => {
  return set(ref(db, `usuarios/${userId}/notas/${notaId}`), nuevaData);
};

export const eliminarNota = (userId, notaId) => {
  return remove(ref(db, `usuarios/${userId}/notas/${notaId}`));
};


