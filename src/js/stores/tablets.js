import { observable, action, computed } from "mobx"

export default class {
  @observable tabletsFromServer = []
  @observable tablets = []

  @observable product = null

  @observable filters = {}

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

  @action filter = (parameter, value) => {
    this.tablets = [...this.tabletsFromServer]
    this.filters[parameter][value] = !this.filters[parameter][value]

    for (let param in this.filters) {
      this.tablets = this.tablets.filter(
        tv => Object.keys(this.filters[param])
          .some(val => this.filters[param][val] && val === tv.data().description[param].toString())
      )
    }
  }

  @action setFilters = () => {
    for (let key in this.labels) {
      if (key !== "about") {
        [...new Set(this.tabletsFromServer.map(prod => prod.data().description[key]))]
          .forEach(val => {
            this.filters[key] = { ...this.filters[key], [val]: true }
          })
      }
    }
  }

  @action getTablets = async () => {
    this.tabletsFromServer = await this.api.getTablets()
    this.tablets = [...this.tabletsFromServer]

    this.setFilters()
  }
  @action getProduct = async (id) => this.product = { id, ...await this.api.getTabletById(id) }

  urlToImg = (url) => `${this.baseUrlImgs}${url}`
}