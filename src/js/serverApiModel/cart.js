import { db } from '../firebaseConfig/fbConfig'
import { doc, getDoc } from "firebase/firestore";
import collections from './collections'

// todo: наверное не оч подход бежать по всем коллекциям и запрашивать наличие id
async function getProductById(id) {
	try {
		for (let collection in collections) {
			const docRef = doc(db, collection, id);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				console.log("Document data:", docSnap.data());
				return docSnap.data()
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
		}
		new Error('no such doc');
	}
	catch (err) {
		console.log(err)
	}
}

export { getProductById }