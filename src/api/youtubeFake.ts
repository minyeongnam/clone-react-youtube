import axios from 'axios';

export default class YoutubeFake {
  async search(params: {
    params: {
      part: string;
      maxResults: number;
      type: string;
      q?: string;
      relatedToVideoId?: string;
    };
  }) {
    return params.params.relatedToVideoId === undefined
      ? await axios.get('/mock/keyword.json')
      : await axios.get('/mock/relatedVidoes.json');
  }

  async videos() {
    return await axios.get(`/mock/mostPopular.json`);
  }

  async channel() {
    return await axios.get(`/mock/channel.json`);
  }
}
