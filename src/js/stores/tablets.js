import { observable, action, computed } from "mobx"

export default class {
  @observable tablets = []

  constructor(rootStore) {
    this.api = rootStore.api.tablets

    this.baseUrlImgs = rootStore.baseUrlImgs.tablets

    this.labels = {
      diagonal: "Диагональ",
      frontCamera: "Фронтальная камера (МП):",
      mainCamera: "Основная камера (МП):",
      processor: "Процессор",
      memory: "Объем памяти (Гб)"
    }
  }

  @action getTablets = async () => this.tablets = await this.api.getTablets()

  urlToImg = (url) => `${this.baseUrlImgs}${url}`
}