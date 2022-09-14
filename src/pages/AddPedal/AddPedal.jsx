import { useState, useRef, useEffect } from "react"

function AddPedal(props) {
  const [formData, setFormData] = useState({
    name: "",
		type: "",
    description: "",
  })

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleSubmit = evt => {
		evt.preventDefault()
    props.handleAddPedal(formData)
	}

	return (
		<>
			<h1>Add Pedal</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
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
						Add Pedal
					</button>
				</div>
			</form>
		</>
	)
}

export default AddPedal