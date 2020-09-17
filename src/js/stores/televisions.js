import { observable, action, computed } from "mobx"

export default class {
  @observable televisions = []

  @observable tv = null

  constructor(rootStore) {
    this.api = rootStore.api.televisions

    this.baseUrlImgs = rootStore.baseUrlImgs.televisions

    this.labels = {
      diagonal: 'Диагональ',
      hz: 'Частота обновления экрана (Гц)',
      screenResolution: 'Разрешение экрана',
      wifi: 'Wi-Fi'
    }
  }

  @action getTelevisions = async () => this.televisions = await this.api.getTelevisions()
  @action getTv = async (id) => {
    console.log("getTV in store", id)
    this.tv = { id, ...await this.api.getTvById(id) }
    console.log("some in store", some)
    // return some
  }

  urlToImg = (url) => `${this.baseUrlImgs}${url}`
}