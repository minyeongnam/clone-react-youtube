import axios, { type AxiosInstance } from 'axios';
import { type MostPopurType, type KeywordType } from '../type/youtube';

export default class Youtube {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3/',
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  async search(keyword: string | undefined) {
    return keyword === undefined ? await this.#mostPopular() : await this.#searchByKeyword(keyword);
  }

  async #searchByKeyword(keyword: string): Promise<KeywordType[]> {
    return await this.httpClient
      .get(`search`, {
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item: any) => ({ ...item, id: item.id.viedoId })));
  }

  async #mostPopular(): Promise<MostPopurType[]> {
    return await this.httpClient
      .get(`videos`, {
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
          regionCode: 'KR',
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item: any) => ({ ...item, id: item.id.viedoId })));
  }
}
