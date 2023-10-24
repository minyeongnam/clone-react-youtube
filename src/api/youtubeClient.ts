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
      part: string;
      maxResults: number;
      type: string;
      q?: string;
      channelId?: string;
    };
  }) {
    return await this.httpClient.get('search', params);
  }

  async videos(params: {
    params: {
      part: string;
      maxResults: number;
      chart: string;
      regionCode: string;
    };
  }) {
    return await this.httpClient.get('search', params);
  }

  async channel(params: {
    params: {
      part: string;
      id: string;
    };
  }) {
    return await this.httpClient.get('channels', params);
  }
}
