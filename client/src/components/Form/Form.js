const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" name="title"/>
      </div>
      <div className="mb-3">
        <label htmlFor="artist" className="form-label">Artist</label>
        <input type="text" className="form-control" name="artist"/>
      </div>
      <div className="mb-3">
        <label htmlFor="album" className="form-label">Album</label>
        <input type="text" className="form-control" name="album"/>
      </div>
      <button type="submit" className="btn btn-primary">Add Song</button>
    </form>
  )
}

export default Form
