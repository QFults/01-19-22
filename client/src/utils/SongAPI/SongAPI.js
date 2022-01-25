import axios from 'axios'


const SongAPI = {
  getSongs: async function () {
    const { data: songs } = await axios.get('/api/songs')
    return songs
  },
  createSong: async function (data) {
    const { data: song } = await axios.post('/api/songs', data, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
    })
    return song
  }
}

export default SongAPI
