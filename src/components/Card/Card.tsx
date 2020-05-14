import React, {FC} from 'react';
import {BodyCard, Value} from "./styles";

type StickCard = '♥' | '♠' | '♦' | '♣'

interface CardProps {
  stick: StickCard | string;
  number: number;
}


const Card: FC<CardProps> = ({stick, number = '2'}) => {
  return (
    <BodyCard>
      <Value color={stick}>{number}{stick}</Value>
    </BodyCard>
  );
};

export default Card;
