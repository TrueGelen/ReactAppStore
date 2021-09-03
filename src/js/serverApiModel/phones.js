import { db } from '../firebaseConfig/fbConfig'
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import collections from './collections'

export async function getPhones() {
	console.log("test api getPhones")
	const response = await getDocs(collection(db, collections.phones))
	console.log("test api getPhones response\n", response)
	return response.docs
}

export async function getPhoneById(id) {
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