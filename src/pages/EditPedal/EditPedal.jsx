import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


function EditPedal(props){
  const location = useLocation()
  const [photoData, setPhotoData] = useState({})
  const [formData, setFormData] = useState(location.state.pedal)
  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  const formElement = useRef()
  const [validForm, setValidForm] = useState(true)

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChangePhoto = (evt) => {
		setPhotoData({ photo: evt.target.files[0] })
	}

	const handleSubmit = evt => {
		evt.preventDefault()
    props.handleUpdatePedal(formData, photoData.photo)
	}


  return (
    <>
      <h1>Edit Pedal</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}> 
        <div className="form-group mb-3">
        <div className="form-group mb-4">
					<label htmlFor="photo-upload" className="form-label">
						{formData.photo ? "Replace existing photo" : "Add Photo"}
					</label>
					<input
						type="file"
						className="form-control"
						id="photo-upload"
						name="photo"
						onChange={handleChangePhoto}
					/>
				</div>
          <label htmlFor="name-input" className="form-label">
            Pedal's Name (required)
          </label>
          <input 
            type="text"
            className="form-control"
            id="name-input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="type-input" className="form-label">
            Pedal Type (required)
          </label>
          <input 
            type="text"
            className="form-control"
            id="type-input"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="description-input" className="form-label">
            Pedal Description
          </label>
          <input 
            type="text"
            className="form-control"
            id="description-input"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary btn-fluid"
            disabled={!validForm}
          >
            Save Pedal
          </button>
          <Link
						to="/"
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
        </div>
      </form>
    </>
  )
}

export default EditPedal
