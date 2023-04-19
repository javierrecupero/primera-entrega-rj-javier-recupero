import MOCK_DATA from '../data/MOCK_DATA.json' assert {type: "json"}
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBIqy_2SvDuX57WNlQdQtSx76W2tOt9eIo",
    authDomain: "rj-javier-recupero.firebaseapp.com",
    projectId: "rj-javier-recupero",
    storageBucket: "rj-javier-recupero.appspot.com",
    messagingSenderId: "398726884071",
    appId: "1:398726884071:web:27cea4d59e40408c325042"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const productosRef = collection(db, 'productos')

MOCK_DATA.forEach((item) => {
    delete item.id

    addDoc(productosRef, item)
})