import { db } from '../firebaseConfig/fbConfig'
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import collections from './collections'

async function getPhones() {
	return (await getDocs(collection(db, collections.phones))).docs
}

async function getPhoneById(id) {
	try {
		const docSnap = await getDoc(doc(db, collections.phones, id));
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

export { getPhones, getPhoneById }