import { db } from '../firebaseConfig/fbConfig'
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import collections from './collections'

async function getTelevisions() {
	return (await getDocs(collection(db, collections.televisions))).docs
}

async function getTvById(id) {
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

export { getTelevisions, getTvById }