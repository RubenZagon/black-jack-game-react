import React, {FC} from 'react';
import {BodyCard, Value} from "./styles";
import {CardProps} from "./types";

export const ARIA_LABEL = 'card'

const Card: FC<CardProps> = ({stick, rank = '2'}) => {
  return (
    <BodyCard>
      <Value aria-label={ARIA_LABEL} color={stick}>{rank}{stick}</Value>
    </BodyCard>
  );
};

export default Card;
