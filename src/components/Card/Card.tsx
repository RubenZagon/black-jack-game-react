import React, {FC} from 'react';
import {BodyCard, Value} from "./styles";
import {CardProps} from "./types";

const Card: FC<CardProps> = ({stick, rank = '2'}) => {
  return (
    <BodyCard>
      <Value color={stick}>{rank}{stick}</Value>
    </BodyCard>
  );
};

export default Card;
