import { useEffect, useState } from 'react'
import SongForm from '../../components/SongForm'
import SongCard from '../../components/SongCard'
import SongAPI from '../../utils/SongAPI'
import UserAPI from '../../utils/UserAPI'
import { Button } from 'reactstrap'

const Home = () => {

  const [songState, setSongState] = useState({
    title: '',
    artist: '',
    album: '',
    songs: []
  })

  const handleInputChange = ({ target: { name, value } }) => setSongState({ ...songState, [name]: value })

  const handleAddSong = event => {
    event.preventDefault()
    SongAPI.createSong({
      title: songState.title,
      artist: songState.artist,
      album: songState.album
    })
      .then(song => {
        console.log(song)
        const songs = JSON.parse(JSON.stringify(songState.songs))
        songs.push(song)
        setSongState({ ...songState, songs, title: '', artist: '', album: '' })
      })
  }

  useEffect(() => {
    UserAPI.getUser()
      .then(user => {
        setSongState({ ...songState, songs: user.songs })
      })
      .catch(err => {
        window.location = '/login'
      })
  }, [])

  return (
    <div className="container">
      <div className="row bg-light p-5 rounded-lg m-3">
        <h1 className="display-4">Song App</h1>
        <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex a inventore quis laboriosam, quae nihil. Veritatis, aut voluptatem! Minima consectetur, modi consequuntur qui neque expedita? Beatae omnis ipsa quos dolor.
          Corrupti dolor repellat non accusamus nostrum necessitatibus, dicta libero. Dolorum blanditiis incidunt similique nesciunt laudantium est maiores deleniti consequatur debitis ipsam, animi eligendi alias suscipit error, doloremque facilis! Quod, saepe?</p>
        <hr className="my-4" />
        {/* <Button color="danger">Click Me</Button> */}
      </div>
      <div className="row">
        <div className="col-md-6">
          <h5>Add A Song</h5>
          <hr />
          <SongForm
            title={songState.title}
            artist={songState.artist}
            album={songState.album}
            handleInputChange={handleInputChange}
            handleAddSong={handleAddSong} />
        </div>
        <div className="col-md-6">
          <h5>Your Songs</h5>
          <hr />
          {
            songState.songs.map(song => <SongCard key={song._id} title={song.title} artist={song.artist} album={song.album} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Home
