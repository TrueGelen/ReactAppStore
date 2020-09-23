import { observable, action, computed } from "mobx"

export default class {
  @observable phones = []

  @observable product = null

  constructor(rootStore) {
    this.api = rootStore.api.phones

    this.baseUrlImgs = rootStore.baseUrlImgs.phones

    this.labels = {
      diagonal: "Диагональ",
      frontCamera: "Фронтальная камера (МП):",
      mainCamera: "Основная камера (МП):",
      processor: "Процессор",
      memory: "Объем памяти (Гб)",
      about: 'О товаре'
    }
  }

  @action getPhones = async () => this.phones = await this.api.getPhones()
  @action getProduct = async (id) => this.product = { id, ...await this.api.getPhoneById(id) }

  urlToImg = (url) => `${this.baseUrlImgs}${url}`
	/* @action getPhones = async () => {
		this.phones = ['one', 'two', 'three']
	} */
}
