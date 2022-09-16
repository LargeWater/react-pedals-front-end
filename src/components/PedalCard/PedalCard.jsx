import { Link } from "react-router-dom"

function PedalCard({pedal, handleDeletePedal, user}) {
  return(
    <div className="card">
      <img
        src={pedal.photo}
        alt="pedal"
        className="card-img-top"
        style={{width: "640px"}}
      />
      <div className="card-body">
        <h2 className="card-text">{pedal.name} - {pedal.type}</h2>
        <p className="card-text">{pedal.description}</p>
      </div>
      {user?.profile === pedal.owner._id &&
        <div className="card-footer">
          <Link
            className='btn btn-sm btn-warning'
            to='/edit'
            state={{pedal}}
          >
            Edit
          </Link>
          <button 
            className="btn btn-sm btn-danger m-left"
            onClick={() => handleDeletePedal(pedal._id)}
          >
            Delete
          </button>
        </div>
      }
    </div>
  )
}

export default PedalCard