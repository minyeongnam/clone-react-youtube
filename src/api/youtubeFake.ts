import axios from 'axios';

export default class YoutubeFake {
  async search() {
    return await axios.get('/mock/keyword.json');
  }

  async videos() {
    return await axios.get(`/mock/mostPopular.json`);
  }
}
