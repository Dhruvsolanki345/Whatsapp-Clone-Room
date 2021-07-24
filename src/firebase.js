import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA_Fvr5pS1QrUm9jb5gXGm-qyGh1FtDqwE",
    authDomain: "whatsapp-clone-c571e.firebaseapp.com",
    projectId: "whatsapp-clone-c571e",
    storageBucket: "whatsapp-clone-c571e.appspot.com",
    messagingSenderId: "507669984237",
    appId: "1:507669984237:web:5cdb7823b26bd0d6e36de4",
    measurementId: "G-ZBP34TXFEK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;