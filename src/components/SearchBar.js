import React, { Fragment } from 'react';
import '../Styles/searchbar.css';

const SearchBar = ({ searchfield, searchChange }) => {
  return (
    <Fragment>
      <input
        className="search"
        type="search"
        placeholder="search for robots boi"
        onChange={searchChange}
      />
    </Fragment>
  );
}

export default SearchBar;