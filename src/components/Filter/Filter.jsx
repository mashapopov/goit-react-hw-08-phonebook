import React from 'react';
import { Input, Label } from './Filter.styled';
import { changeFilter } from '../../redux/filter/slice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Фильтр по имени
      <Input
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </Label>
  );
};
