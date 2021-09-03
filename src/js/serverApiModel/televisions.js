import { db } from '../firebaseConfig/fbConfig'
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import collections from './collections'

export async function getTelevisions() {
	return (await getDocs(collection(db, collections.televisions))).docs
}

export async function getTvById(id) {
	try {
		const docSnap = await getDoc(doc(db, collections.televisions, id));
		if (docSnap.exists()) {
			return docSnap.data()
		} else {
			new Error('no such doc');
		}
	}
	catch (err) {
		console.log(err)
	}
}