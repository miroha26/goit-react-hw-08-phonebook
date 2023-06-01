import React from 'react';
import {  useDispatch } from 'react-redux';
import { filterSlice } from '../../redux/Filter/FilterSlice';
import { FilterTitle, FilterContainer } from './Filter.styled';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  
  return (
    <FilterContainer>
      <FilterTitle>Find contacts by name</FilterTitle>
      <TextField
        onChange={e => dispatch(filterSlice(e.target.value))}
        required
        type="text"
        name="name"
        label="Type name to filter contacts"
        variant="filled"
        InputLabelProps={{
          style: { color: '#fbcf1f' },
        }}
      />
    </FilterContainer>
  );
};

export default Filter;
