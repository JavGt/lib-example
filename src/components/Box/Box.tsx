// Card.tsx
"use client";
import React from "react";
import styled from "styled-components";

interface CardProps {
  title: string;
  description: string;
}

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardHeader = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ddd;
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 1em;
  color: #555;
`;

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default Card;
