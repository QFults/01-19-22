import { useEffect } from 'react'
import Form from './components/Form'
import SongCard from './components/SongCard'
import SongAPI from './utils/SongAPI'

const App = () => {

  useEffect(() => {
    SongAPI.getSongs()
      .then(songs => {
        console.log(songs)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="container">
      <div class="row bg-light p-5 rounded-lg m-3">
        <h1 class="display-4">Song App</h1>
        <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex a inventore quis laboriosam, quae nihil. Veritatis, aut voluptatem! Minima consectetur, modi consequuntur qui neque expedita? Beatae omnis ipsa quos dolor.
        Corrupti dolor repellat non accusamus nostrum necessitatibus, dicta libero. Dolorum blanditiis incidunt similique nesciunt laudantium est maiores deleniti consequatur debitis ipsam, animi eligendi alias suscipit error, doloremque facilis! Quod, saepe?</p>
        <hr class="my-4" />
      </div>
      <div className="row">
        <div className="col-md-6">
          <h5>Add A Song</h5>
          <hr />
          <Form />
        </div>
        <div className="col-md-6">
          <h5>Your Songs</h5>
          <hr />
          <SongCard />
        </div>
      </div>
    </div>
  )
}

export default App
