import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch} from 'firebase/firestore';

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
export const db = getFirestore();
export {onSnapshot} from 'firebase/firestore';
export {createUserWithEmailAndPassword} from 'firebase/auth';
export {signInWithEmailAndPassword} from 'firebase/auth';


export const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if(!userAuth){ return; }
    const docRef = doc(db, "users", userAuth.uid);
    const docSnapshot = await getDoc(docRef);

    if(!docSnapshot.exists()){
        try{
            const {displayName, email} = userAuth;
            const createdAt = new Date();
            const docData = {displayName, email, createdAt, additionalData}
            await setDoc(docRef, docData);
            console.log("User ref: "+ docRef);
        }
        catch(error){
            console.log("User not created: "+error.message);
        }
    }

    return(docRef);
}

export const addCollectionsAndDocuments = async (collectionKey, objetsToAdd) => {
    const colRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    console.log(objetsToAdd);

    objetsToAdd.forEach(
        obj => {
            const docRef = doc(colRef);
            batch.set(docRef, obj);
        }
    );

    return await batch.commit();
}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);


