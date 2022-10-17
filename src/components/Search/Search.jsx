import { useState } from 'react';
import SearchList from '../../pages/SearchList/SearchList';
import styles from './Search.module.css';

function Search({pedals}){
  const [searchField, setSearchField] = useState("");

  const filteredPedals = pedals.filter(pedal => pedal.name.toLowerCase().includes(searchField.toLowerCase()));

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
      return (
        <>
          <SearchList filteredPedals={filteredPedals} />
        </>
      );
  }

  return (
    <>
    <h1>Search for a pedal</h1>
    <div className={styles.searchBar}>
      <input type="search" placeholder="Search" value={searchField} onChange={handleChange} />
    </div>
    <div className={styles.container}>
      {searchList()}
    </div>
    </>
  )
}

export default Search
