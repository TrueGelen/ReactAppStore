import { collection, getDocs } from "firebase/firestore";
import { isNil } from "lodash";
import { db } from "../firebaseConfig/fbConfig";
import { TProductData } from "../models/parentModels/ProductModel";

export class ProductApi {

	async getProducts(collectionName: string) {
		const querySnapshot = await getDocs(collection(db, collectionName)).catch(err => {
			console.error("Не удалось получить товары! Не удачный запрос\n", err)
			return null
		});

		if (isNil(querySnapshot)) {
			return null
		}

		const products: TProductData[] = []
		querySnapshot.forEach((doc) => {
			products.push({ ...doc.data() as TProductData, id: doc.id })
		});

		return products
	}

}