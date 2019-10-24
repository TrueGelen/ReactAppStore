export default class {
	constructor(rootStore) {
		this.items = getTVs()
	}
}

//it will be a server
function getTVs() {
	return [
		{
			id: 0,
			title: 'TV',
			price: 40000,
			rest: 20,
			description: {
				diagonal: "4.7",
				camera: "12",
				processor: "A11"
			}
		}
	];
}