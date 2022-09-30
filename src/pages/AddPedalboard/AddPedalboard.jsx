import { useState, useRef, useEffect } from "react"
import styles from './AddPedalBoard.module.css'

function AddPedalBoard(props) {
  const formElement = useRef()
	const [validForm, setValidForm] = useState(false)


  const [formData, setFormData] = useState({
    name: "",
    description: "",
  })

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddPedalBoard(formData)
  }

  return (
    <>
      <h1>Add Pedal Board</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit} className={styles.form}>
        <div className="form-group mb-3">
          <label htmlFor="description-input" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description-input"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-xs"
          disabled={!validForm}
        >
          ADD PEDAL BOARD
        </button>
      </form>
    </>
  )
}


export default AddPedalBoard
