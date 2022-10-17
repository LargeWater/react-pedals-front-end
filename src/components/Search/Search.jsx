import { useState } from 'react';
import SearchList from '../../pages/SearchList/SearchList';
import Scroll from '../Scroll/Scroll';

function Search({pedals}){
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredPedals = pedals.filter(pedal => pedal.name.toLowerCase().includes(searchField.toLowerCase()));

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredPedals={filteredPedals} />
        </Scroll>
      );
    }
  }

  return (
    <div>
      <input type="search" placeholder="Search" value={searchField} onChange={handleChange} />
      {searchList()}
    </div>
  )
}

export default Search
