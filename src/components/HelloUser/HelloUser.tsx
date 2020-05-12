import React, {FC} from 'react';

interface HelloUserProps {
    name:string
}

const HelloUser:FC<HelloUserProps> = ({name}) => {
    return (
        <div>
            <h1>Hello, {name}</h1>
        </div>
    );
};

export default HelloUser;
