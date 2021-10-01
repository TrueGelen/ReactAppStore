import { EN_LOC, RU_LOC } from "../constants/constants";

export type TLoc = typeof RU_LOC | typeof EN_LOC;
export type TLocData = {
  [RU_LOC]: string;
  [EN_LOC]: string;
};

export class Localization {
  private language: TLoc = EN_LOC;
  constructor(language: TLoc) {
    this.language = language;
  }

  getLanguage() {
    return this.language;
  }

  getLocalized(data: TLocData) {
    return data[this.language];
  }

  getLocList(): TLoc[] {
    return [RU_LOC, EN_LOC];
  }
}
