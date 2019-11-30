import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyANWEenp_EilWF5aXmVSgeRJkXltWbe5ck",
    authDomain: "crwn-db-bec11.firebaseapp.com",
    databaseURL: "https://crwn-db-bec11.firebaseio.com",
    projectId: "crwn-db-bec11",
    storageBucket: "crwn-db-bec11.appspot.com",
    messagingSenderId: "446398687220",
    appId: "1:446398687220:web:82ddeb64b80a1b80e37ba1",
    measurementId: "G-3MSKJX3HWZ"
};

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef= firestore.doc( `users/${userAuth.uid} `); 

    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const { displayName,email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error happened while creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;