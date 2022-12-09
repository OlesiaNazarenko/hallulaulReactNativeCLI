import React from 'react';
import styled from 'styled-components/native';
import {BodyView} from '../typography/bodyText';

interface ButtonSourceProps {
  label: string;
  color: string;
  background: string;
}

const ButtonSourceStyled = styled.TouchableOpacity<ButtonSourceProps>`
  background: ${(props: ButtonSourceProps) => props.background};
  border-radius: 40px;
  border: 1px solid transparent;
  padding-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  width: 312px;
  height: 56px;
`;

export const ButtonSource = (props: ButtonSourceProps) => {
  return (
    <ButtonSourceStyled {...props}>
      <BodyView color={props.color} text={props.label} alignment={'center'} />
    </ButtonSourceStyled>
  );
};
