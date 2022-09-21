import { Link } from "react-router-dom"
// import styles from './PedalCard.module.css'

function PedalCard({pedal, handleDeletePedal, user}) {
  return(
    <div className="card" style={{width: "640px"}}>
      <img
        src={pedal.photo}
        alt="pedal"
        className="card-img-top"
        style={{width: "auto", height: "auto", objectFit: "contain", maxHeight: "400px", backgroundColor: "#F7F0F5", mixBlendMode: "multiply"}}
      />
      <div className="card-body" style={{backgroundColor: "#F7F0F5", mixBlendMode: "multiply"}}>
        <h2 className="card-text">{pedal.name}</h2>
        <h5 className="card-text">{pedal.type}</h5>
        <p className="card-text">{pedal.description}</p>
      </div>
      {user?.profile === pedal.owner._id &&
        <div className="card-footer" style={{backgroundColor: "#F7F0F5"}}>
          <Link
            className='btn btn-sm'
            style={{backgroundColor:"#8D6A9F", color: "#f7f0f5"}}
            to='/edit'
            state={{pedal}}
          >
            Edit
          </Link>
          <button 
            className="btn btn-sm m-left"
            style={{backgroundColor:"#8D6A9F", color: "#f7f0f5"}}
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