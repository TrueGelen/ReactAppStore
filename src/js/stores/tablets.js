import { observable, action, computed } from "mobx"

export default class {
  @observable tablets = []

  @observable product = null

  constructor(rootStore) {
    this.api = rootStore.api.tablets

    this.baseUrlImgs = rootStore.baseUrlImgs.tablets

    this.labels = {
      diagonal: "Диагональ",
      frontCamera: "Фронтальная камера (МП)",
      mainCamera: "Основная камера (МП)",
      processor: "Процессор",
      memory: "Объем памяти (Гб)",
      about: 'О товаре'
    }
  }

  @action getTablets = async () => this.tablets = await this.api.getTablets()
  @action getProduct = async (id) => this.product = { id, ...await this.api.getTabletById(id) }

  urlToImg = (url) => `${this.baseUrlImgs}${url}`
}