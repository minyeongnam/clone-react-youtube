import { type MostPopurType, type KeywordType } from '../type/youtube';
import type Youtubeclient from './youtubeClient';
import type YoutubeFake from './youtubeFake';

export default class Youtube {
  apiClient;

  constructor(apiClient: Youtubeclient | YoutubeFake) {
    this.apiClient = apiClient;
  }

  async search(keyword: string | undefined) {
    return keyword === undefined ? await this.#mostPopular() : await this.#searchByKeyword(keyword);
  }

  async #searchByKeyword(keyword: string): Promise<KeywordType[]> {
    return await this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: any) => ({ ...item, id: item.id.videoId ?? item.id.channelId })),
      );
  }

  async #mostPopular(): Promise<MostPopurType[]> {
    return await this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
          regionCode: 'KR',
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: any) => ({ ...item, id: item.id.videoId ?? item.id.channelId })),
      );
  }

  channelIconUrl(channelId: string): any {
    return this.apiClient
      .channel({
        params: {
          part: 'snippet,contentDetails,statistics',
          id: channelId,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }
}
