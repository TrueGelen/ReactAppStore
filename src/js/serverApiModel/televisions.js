import firebase from '../firebaseConfig/fbConfig'
import collections from './collections'

async function getTelevisions() {
  let response = await firebase.firestore().collection(collections.televisions).get()

  return response.docs
}

async function getTvById(id) {
  console.log(collections.televisions, id)
  try {
    let product = await firebase.firestore().collection(collections.televisions).doc(id).get()
    return product.exists ? product.data() : new Error('no such doc');
  }
  catch (err) {
    console.log(err)
  }
}

export { getTelevisions, getTvById }