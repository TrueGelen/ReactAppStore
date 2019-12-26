import firebase from '../firebaseConfig/fbConfig'

async function getProductById(id) {
	try {
		let product = await firebase.firestore().collection('phones').doc(id).get()
		return product.exists ? product.data() : new Error('no such doc');
	}
	catch (err) {
		console.log(err)
	}
}

export { getProductById }