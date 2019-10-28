import firebase from '../firebaseConfig/fbConfig'

async function getTelevisions() {
	let response = await firebase.firestore().collection('televisions').get()

	return response.docs
}

export { getTelevisions }