function PedalCard({pedal}) {
  return(
    <div className="card">
      <div className="card-body">
        <h2 className="card-text">{pedal.name} - {pedal.type}</h2>
        <p className="card-text">{pedal.description}</p>
      </div>
    </div>
  )
}

export default PedalCard