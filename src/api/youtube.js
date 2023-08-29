export const search = async () =>
  axios.get(`/mock/${keyword ?? 'videos'}.json`).then((res) => res.data.items);
