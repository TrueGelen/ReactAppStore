import firebase from '../firebaseConfig/fbConfig'

// this was added
/* let tablets = [
	{
		title: 'Ipad Air',
		price: 40000,
		rest: 25,
		description: {
			diagonal: "10.5",
			camera: "14",
			matrixTechnology: "Retina IPS"
		}
	},
	{
		title: 'Ipad',
		price: 20000,
		rest: 20,
		description: {
			diagonal: "9.7",
			camera: "12",
			matrixTechnology: "IPS"
		}
	},
	{
		title: 'Ipad Pro',
		price: 60000,
		rest: 15,
		description: {
			diagonal: "11",
			camera: "16",
			matrixTechnology: "IPS"
		}
	},
	{
		title: 'Ipad mini',
		price: 37000,
		rest: 20,
		description: {
			diagonal: "7.9",
			camera: "12",
			matrixTechnology: "Retina IPS"
		}
	},
	{
		title: 'Samsung Galaxy Tab A',
		price: 15000,
		rest: 20,
		description: {
			diagonal: "10.1",
			camera: "10",
			matrixTechnology: "PLS"
		}
	},
	{
		title: 'Samsung Galaxy Tab S5',
		price: 33000,
		rest: 20,
		description: {
			diagonal: "10.5",
			camera: "12",
			matrixTechnology: "TFT"
		}
	},
	{
		title: 'Samsung Galaxy Tab S6',
		price: 59000,
		rest: 20,
		description: {
			diagonal: "10.1",
			camera: "14",
			matrixTechnology: "TFT"
		}
	},
	{
		title: 'Samsung Galaxy Tab S4',
		price: 45000,
		rest: 25,
		description: {
			diagonal: "10.5",
			camera: "12",
			matrixTechnology: "IPS"
		}
	},
	{
		title: 'Xiaomi Mi Pad 4',
		price: 18000,
		rest: 20,
		description: {
			diagonal: "8",
			camera: "12",
			matrixTechnology: "IPS"
		}
	},
	{
		title: 'Xiaomi Mi Pad 5',
		price: 30000,
		rest: 20,
		description: {
			diagonal: "9",
			camera: "14",
			matrixTechnology: "IPS"
		}
	}
]

tablets.forEach(tablet => {
	firebase.firestore().collection("tablets").add(tablet)
		.then(function (docRef) {
			console.log("docRef: ", docRef)
			console.log("Document written with ID: ", docRef.id)
		})
		.catch(function (error) {
			console.error("Error adding document: ", error);
		});
}) */


// this was added
/* let phones = [
	{
		title: 'Iphone 8',
		price: 40000,
		rest: 20,
		description: {
			diagonal: "4.7",
			camera: "12",
			processor: "A11"
		}
	},
	{
		title: 'Iphone X',
		price: 50000,
		rest: 20,
		description: {
			diagonal: "5.8",
			camera: "12",
			processor: "A11"
		}
	}, {
		title: 'Iphone 7',
		price: 30000,
		rest: 30,
		description: {
			diagonal: "4.5",
			camera: "10",
			processor: "A10"
		}
	}, {
		title: 'Iphone 7 Plus',
		price: 35000,
		rest: 10,
		description: {
			diagonal: "4.7",
			camera: "12",
			processor: "A10"
		}
	}, {
		title: 'Iphone 8 Plus',
		price: 45000,
		rest: 10,
		description: {
			diagonal: "5",
			camera: "11",
			processor: "A11"
		}
	}, {
		title: 'Iphone 6',
		price: 20000,
		rest: 5,
		description: {
			diagonal: "4.3",
			camera: "8",
			processor: "A9"
		}
	}, {
		title: 'Iphone 8 Plus',
		price: 40000,
		rest: 8,
		description: {
			diagonal: "4.5",
			camera: "10",
			processor: "A9"
		}
	}, {
		title: 'Iphone 6S',
		price: 25000,
		rest: 7,
		description: {
			diagonal: "4.4",
			camera: "12",
			processor: "A10"
		}
	},
	{
		title: 'Samsung Galaxy S10',
		price: 60000,
		rest: 30,
		description: {
			diagonal: "6.4",
			camera: "16",
			processor: "SD33"
		}
	},
	{
		title: 'Samsung Galaxy S9',
		price: 50000,
		rest: 30,
		description: {
			diagonal: "6.2",
			camera: "14",
			processor: "SD30"
		}
	},
	{
		title: 'Samsung Galaxy S8',
		price: 40000,
		rest: 30,
		description: {
			diagonal: "6",
			camera: "12",
			processor: "SD29"
		}
	},
	{
		title: 'Samsung Galaxy S8',
		price: 35000,
		rest: 30,
		description: {
			diagonal: "5.9",
			camera: "12",
			processor: "SD28"
		}
	},
	{
		title: 'Samsung Galaxy S7',
		price: 30000,
		rest: 30,
		description: {
			diagonal: "5.8",
			camera: "10",
			processor: "SD27"
		}
	},
	{
		title: 'Huawei M10',
		price: 50000,
		rest: 30,
		description: {
			diagonal: "6.4",
			camera: "16",
			processor: "DD33"
		}
	},
	{
		title: 'Huawei M9',
		price: 50000,
		rest: 30,
		description: {
			diagonal: "6.4",
			camera: "14",
			processor: "DD32"
		}
	},
	{
		title: 'Huawei M8',
		price: 50000,
		rest: 30,
		description: {
			diagonal: "6.2",
			camera: "12",
			processor: "DD31"
		}
	}
]

phones.forEach(phone => {
	firebase.firestore().collection("phones").add(phone)
		.then(function (docRef) {
			console.log("docRef: ", docRef)
			console.log("Document written with ID: ", docRef.id)
		})
		.catch(function (error) {
			console.error("Error adding document: ", error);
		});
}) */

/* let televisions = [
	{
		title: 'Samsung U3',
		price: 20000,
		rest: 20,
		description: {
			diagonal: "31",
			screenResolution: "1366x768",
			wifi: "true"
		}
	},
	{
		title: 'Samsung U4',
		price: 30000,
		rest: 25,
		description: {
			diagonal: "29",
			screenResolution: "1920x1080",
			wifi: "true"
		}
	},
	{
		title: 'Samsung U5',
		price: 40000,
		rest: 30,
		description: {
			diagonal: "35",
			screenResolution: "1920x1080",
			wifi: "true"
		}
	},
	{
		title: 'Panasonic TX-2',
		price: 15000,
		rest: 20,
		description: {
			diagonal: "26",
			screenResolution: "1366x768",
			wifi: "false"
		}
	},
	{
		title: 'Panasonic TX-3',
		price: 25000,
		rest: 20,
		description: {
			diagonal: "29",
			screenResolution: "1366x768",
			wifi: "true"
		}
	},
	{
		title: 'Panasonic TX-4',
		price: 35000,
		rest: 25,
		description: {
			diagonal: "31",
			screenResolution: "1920x1080",
			wifi: "true"
		}
	},
	{
		title: 'Philips 22',
		price: 20000,
		rest: 20,
		description: {
			diagonal: "29",
			screenResolution: "1366x768",
			wifi: "false"
		}
	},
	{
		title: 'Philips 23',
		price: 30000,
		rest: 20,
		description: {
			diagonal: "31",
			screenResolution: "1920x1080",
			wifi: "true"
		}
	},
	{
		title: 'Philips 24',
		price: 40000,
		rest: 20,
		description: {
			diagonal: "34",
			screenResolution: "1920x1080",
			wifi: "true"
		}
	}
]

televisions.forEach(tv => {
	firebase.firestore().collection("televisions").add(tv)
		.then(function (docRef) {
			console.log("docRef: ", docRef)
			console.log("Document written with ID: ", docRef.id)
		})
		.catch(function (error) {
			console.error("Error adding document: ", error);
		});
}) */