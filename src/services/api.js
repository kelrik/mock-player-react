import playlist from '../mock/playlist.json';

const fetchPlaylist = () => {
  return fetch('/some/endpoint/')
      .then((response) => {
        return playlist; // Return mock data
      })
      .catch((error) => {
        console.log('error', error);
      })
};

export default {
  fetchPlaylist: fetchPlaylist
};