import React from 'react';
import { FlexContainer } from '../../shared/flexContainer';
import { InputLabel, InputBox } from './styles';

const Input = ({ name, type, label, register, inputError, ...props }) => {
  return (
    <FlexContainer
      flexDirection='column'
      justifyContainer='center'
      padding='1rem'
    >
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <InputBox
        name={name}
        inputError={inputError}
        // {...register(`${name}`, { required: { required } })}
      />
    </FlexContainer>
  );
};

export default Input;
