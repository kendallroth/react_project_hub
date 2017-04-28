//File:     /src/components/FilterBar/FilterBar.js
//Purpose:  FilterBar presentational component

import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from 'components/SearchBar';
import Button from 'components/Button';
import './FilterBar.css';

const FilterBar = ({ filterBarValue, onFilterTextChange, onFilterButtonClick }) => {
	return (
		<div className='filter-bar input-group'>
			<SearchBar classes='input-group-field' value={filterBarValue} placeholder='Filter...' onChange={onFilterTextChange} />
			<Button type='icon' classes='input-group-button' icon='fi-filter' onClick={onFilterButtonClick} />
		</div>
	);
};

FilterBar.propTypes = {
	filterBarValue: PropTypes.string,
	onFilterTextChange: PropTypes.func,
	onFilterButtonClick: PropTypes.func
};

export default FilterBar;
