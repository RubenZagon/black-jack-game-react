import React, {FC} from 'react';
import {Greeting} from "./styles";

interface HelloUserProps {
    name:string
}

const HelloUser:FC<HelloUserProps> = ({name}) => {
  return (
    <Greeting aria-label={'greeting'}>Hello, {name}</Greeting>
  )
};

export default HelloUser;
