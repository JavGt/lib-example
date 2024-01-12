// Button.tsx
"use client";
import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #2980b9;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
