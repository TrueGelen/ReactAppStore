import { EN_LOC, RU_LOC } from "../constants/constants";

export type TLanguage = typeof RU_LOC | typeof EN_LOC;
export type TLocData = {
	[RU_LOC]: string;
	[EN_LOC]: string;
};

export class Localization {
	private language: TLanguage = EN_LOC;
	constructor(language: TLanguage) {
		this.language = language;
	}

	getLanguage() {
		return this.language;
	}

	getLocalized(data: TLocData) {
		return data[this.language];
	}

	getLanguageList(): TLanguage[] {
		return [RU_LOC, EN_LOC];
	}
}
