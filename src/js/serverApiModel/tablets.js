import firebase from '../firebaseConfig/fbConfig'

async function getTablets() {
	let response = await firebase.firestore().collection('tablets').get()

	return response.docs
}

export { getTablets }