export default class {
	constructor(rootStore) {
		this.items = getPhones()
	}
}

//it will be a server
function getPhones() {
	return [
		{
			id: 0,
			title: 'Ipnone 8',
			price: 40000,
			rest: 20,
			description: {
				diagonal: "4.7",
				camera: "12",
				processor: "A11"
			}
		},
		{
			id: 1,
			title: 'Ipnone X',
			price: 50000,
			rest: 20,
			description: {
				diagonal: "5.8",
				camera: "12",
				processor: "A11"
			}
		}, {
			id: 2,
			title: 'Ipnone 7',
			price: 30000,
			rest: 30,
			description: {
				diagonal: "4.5",
				camera: "10",
				processor: "A10"
			}
		}, {
			id: 3,
			title: 'Ipnone 7 Plus',
			price: 35000,
			rest: 10,
			description: {
				diagonal: "4.7",
				camera: "12",
				processor: "A10"
			}
		}, {
			id: 4,
			title: 'Ipnone 8 Plus',
			price: 45000,
			rest: 10,
			description: {
				diagonal: "5",
				camera: "11",
				processor: "A11"
			}
		}, {
			id: 5,
			title: 'Ipnone 6',
			price: 20000,
			rest: 5,
			description: {
				diagonal: "4.3",
				camera: "8",
				processor: "A9"
			}
		}, {
			id: 6,
			title: 'Ipnone 8 Plus',
			price: 40000,
			rest: 8,
			description: {
				diagonal: "4.5",
				camera: "10",
				processor: "A9"
			}
		}, {
			id: 7,
			title: 'Ipnone 6S',
			price: 25000,
			rest: 7,
			description: {
				diagonal: "4.4",
				camera: "12",
				processor: "A10"
			}
		},
		{
			id: 8,
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
			id: 9,
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
			id: 10,
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
			id: 11,
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
			id: 12,
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
			id: 13,
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
			id: 14,
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
			id: 15,
			title: 'Huawei M8',
			price: 50000,
			rest: 30,
			description: {
				diagonal: "6.2",
				camera: "12",
				processor: "DD31"
			}
		}
	];
}