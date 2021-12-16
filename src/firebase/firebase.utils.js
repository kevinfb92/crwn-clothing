import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDpLnPwZHGyEHjoH7w6htI-l4w1zIvZ_2k",
    authDomain: "crwn-store-5f2c4.firebaseapp.com",
    projectId: "crwn-store-5f2c4",
    storageBucket: "crwn-store-5f2c4.appspot.com",
    messagingSenderId: "747695748960",
    appId: "1:747695748960:web:ecadbee5c4e7a38e875005",
    measurementId: "G-1ZKE9KC7LS"
}

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
