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



// todo: settled on 31.08.21 
// обновил запросы в serverApiModel getTelevisions в televisions.js и getProductById в cart.js
/* Сейчас план такой: просто обновить как есть все запросы и обновить mobX просто что бы работал и без декораторов.
Далее внедрить ts, затестить его как то по быстрому и локально. А потом сразу внедрить преттир и писать уже все по нормальному
с моделями, тайпскриптом и архитектурой. */

export { getTelevisions, getTvById }