import { observable, action, computed } from "mobx"

export default class {
  @observable televisions = []

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

  urlToImg = (url) => `${this.baseUrlImgs}${url}`
}