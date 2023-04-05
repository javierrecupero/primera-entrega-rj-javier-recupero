import { initializeApp } from "firebase/app";
import { getFirestore } from firebase/firestore


const firebaseConfig = {
  apiKey: "AIzaSyBIqy_2SvDuX57WNlQdQtSx76W2tOt9eIo",
  authDomain: "rj-javier-recupero.firebaseapp.com",
  projectId: "rj-javier-recupero",
  storageBucket: "rj-javier-recupero.appspot.com",
  messagingSenderId: "398726884071",
  appId: "1:398726884071:web:27cea4d59e40408c325042"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
