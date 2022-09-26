import styles from './PedalList.module.css';
import PedalCard from '../../components/PedalCard/PedalCard';
import { Link } from 'react-router-dom';

function PedalList(props) {
  return (
    <>
      <h1>Pedal List</h1>
      {props.user ?
      <Link to="/add" style={{fontSize: '1.5rem', marginBottom: '20px', backgroundColor: 'var(--d-900)', alignItems: 'right', textAlign: 'right', }}><img alt='pedal icon' src='/ts9.png' height='65px' width='auto' style={{filter: 'invert(84%)'}}></img>Add a Pedal</Link>
      : null}
      <div className={styles.container}>
        {props.pedals.map(pedal => 
          <PedalCard 
            key={pedal._id} 
            pedal={pedal}
            handleDeletePedal={props.handleDeletePedal}
            user={props.user}
          />
        )}
      </div>
    </>
  );
}

export default PedalList;