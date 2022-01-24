import { Form, Label, Input, Button } from 'reactstrap'

const SongForm = ({
  title,
  artist,
  album,
  handleInputChange,
  handleAddSong
}) => {
  return (
    <Form>
      <div className="mb-3">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          className="form-control"
          name="title"
          value={title}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <Label htmlFor="artist">Artist</Label>
        <Input
          type="text"
          className="form-control"
          name="artist"
          value={artist}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <Label htmlFor="album">Album</Label>
        <Input
          type="text"
          className="form-control"
          name="album"
          value={album}
          onChange={handleInputChange} />
      </div>
      <Button
        color="primary"
        onClick={handleAddSong} >
        Add Song
      </Button>
    </Form>
  )
}

export default SongForm
