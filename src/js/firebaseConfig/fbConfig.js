import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// todo: уже не помню для чего они нужны и нужны ли
// import "firebase/auth"
// import "firebase/firebase-firestore"

const firebaseConfig = {
	apiKey: "AIzaSyDX0t1_h2GCY_IlDqwynOo9QuE64slu32c",
	authDomain: "gparodystore.firebaseapp.com",
	databaseURL: "https://gparodystore.firebaseio.com",
	projectId: "gparodystore",
	storageBucket: "gparodystore.appspot.com",
	messagingSenderId: "1009917265996",
	appId: "1:1009917265996:web:e2d684751d1b4f7ae14ce9"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);