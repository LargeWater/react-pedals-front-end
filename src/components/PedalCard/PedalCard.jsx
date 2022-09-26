import { Link } from "react-router-dom"
// import styles from './PedalCard.module.css'

function PedalCard({pedal, handleDeletePedal, user}) {
  return(
    <div className="card" style={{width: "444px"}}>
      <img
        src={pedal.photo}
        alt="pedal"
        className="card-img-top"
        style={{width: "auto", height: "auto", objectFit: "contain", maxHeight: "300px", borderBottom: "1px solid #a6acb196", padding: '20px'}}
      />
      <div className="card-body">
        <h2 className="card-text">{pedal.name}</h2>
        <h5 className="card-text">{pedal.type}</h5>
        <h6 className="card-text">Added by {pedal.owner.name}</h6>
        <p className="card-text">{pedal.description}</p>
      </div>
      {user?.profile === pedal.owner._id &&
        <div className="card-footer">
          <Link
            className='btn btn-sm'
            style={{backgroundColor:"#5a4366", color: "#f7f0f5"}}
            to='/edit'
            state={{pedal}}
          >
            Edit
          </Link>
          <button 
            className="btn btn-sm m-left"
            style={{backgroundColor:"#5a4366", color: "#f7f0f5"}}
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