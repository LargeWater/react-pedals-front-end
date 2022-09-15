import styles from './PedalList.module.css';
import PedalCard from '../../components/PedalCard/PedalCard';

function PedalList(props) {
  return (
    <>
      <h1>Pedal List</h1>
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