import axios, { type AxiosInstance } from 'axios';

export default class Youtubeclient {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3/',
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  async search(params: {
    params: {
      part: 'snippet';
      maxResults: number;
      type: 'video';
      q: string;
    };
  }) {
    return await this.httpClient.get('search', params);
  }

  async videos(params: {
    params: {
      part: 'snippet';
      maxResults: number;
      chart: 'mostPopular';
      regionCode: 'KR';
    };
  }) {
    return await this.httpClient.get('search', params);
  }
}
