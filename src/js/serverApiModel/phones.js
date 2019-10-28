import firebase from '../firebaseConfig/fbConfig'

async function getPhones() {
	let response = await firebase.firestore().collection('phones').get()
	return response.docs
}

export { getPhones }