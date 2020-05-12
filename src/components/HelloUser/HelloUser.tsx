import React, {FC} from 'react';
import {Greeting} from "./styles";

interface HelloUserProps {
    name:string
}

const HelloUser:FC<HelloUserProps> = ({name}) => <Greeting>Hello, {name}</Greeting>;

export default HelloUser;
