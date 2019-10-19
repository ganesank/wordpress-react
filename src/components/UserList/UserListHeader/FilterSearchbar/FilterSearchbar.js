import React from 'react';


import css from './FilterSearchbar.css';
import searchIcon from '../../../../assets/images/icons/Assets_Svg/Search_Filter.svg';



const filterSearchbar = (props) => {
  let placeholder = null;
  // const userType = cookies.get('userType');
  const userType = window.sessionStorage.getItem('userType');
  if (userType === 'JPJC') {
    placeholder = 'Search for SO by name';
  } else {
    placeholder = 'Search for Retailer by mobile number';
  }
  return (
    <div className={css.searchFilter}>
      <input
        type="text"
        ref={ip => this.myInp}
        onChange={props.filterList}
        value={props.searchText}
        className={['form-control ', css.fC1].join(' ')}
        placeholder={placeholder}
      />
      {props.searchText !== '' ? <span className={css.clear} onClick={props.clkClear}>Cancel</span> : <span><img className={css.searchIcon} src={searchIcon} alt="search" /></span>}
    </div>
  );
};


export default filterSearchbar;
