import PedalCard from "../../components/PedalCard/PedalCard";
import styles from './SearchList.module.css';


function SearchList({filteredPedals}) {
  const filtered = filteredPedals.map(pedal => <PedalCard key={pedal._id} pedal={pedal}/>)
  return (
    <div className={styles.container}>
      {filtered}
    </div>
  );
}

export default SearchList;