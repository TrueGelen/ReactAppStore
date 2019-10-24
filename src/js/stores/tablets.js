export default class {
	constructor(rootStore) {
		this.items = getTablets()
	}
}

//it will be a server
function getTablets() {
	return [
		{
			id: 0,
			title: 'Tablet',
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