import React, { FC } from 'react';
import styled from 'styled-components';

interface IButtonProps {
  onClick: () => void;
  color?: string;
  colorOnSelected? : string;
  textColor?: string;
}
const Button:FC<IButtonProps> = props => {
  const { onClick, children, color, colorOnSelected, textColor } = props;
  return (
    <StyledButton color={color} colorHover={colorOnSelected} textColor={textColor}
      onClick={() => onClick()}
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button.attrs(
  (props: {color: string, textColor: string, colorHover: string}) => props)`
  width: 100%;
  height: 40px;

  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;

  cursor: pointer;
	// box-shadow: 2px 0px 3px;

  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  background-color: ${props => props.color ? `${props.color}` : '#EA4C89'};
  color: ${props => props.textColor ? `${props.textColor}` : '#FFFFFF'};
}

  :hover,
  :focus {
    background-color: ${props => props.colorHover ? `${props.colorHover}` : '#F082AC'};
  }
`;

export default Button
