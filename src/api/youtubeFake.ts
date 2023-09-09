import axios from 'axios';
import { type MostPopurType, type KeywordType } from '../type/youtube';

export default class YoutubeFake {
  async search(keyword: string | undefined) {
    return keyword === undefined ? await this.#mostPopular() : await this.#searchByKeyword();
  }

  async #searchByKeyword(): Promise<KeywordType[]> {
    return await axios
      .get(`/mock/keyword.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item: any) => ({ ...item, id: item.id.viedoId })));
  }

  async #mostPopular(): Promise<MostPopurType[]> {
    return await axios
      .get(`/mock/mostPopular.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item: any) => ({ ...item, id: item.id.viedoId })));
  }
}
