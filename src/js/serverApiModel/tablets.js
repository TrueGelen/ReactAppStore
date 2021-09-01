import { db } from '../firebaseConfig/fbConfig'
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import collections from './collections'

async function getTablets() {
	return (await getDocs(collection(db, collections.tablets))).docs
}

async function getTabletById(id) {
	try {
		const docSnap = await getDoc(doc(db, collections.tablets, id));
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

export { getTablets, getTabletById }