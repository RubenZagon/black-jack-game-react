import React from 'react';
import HelloUser from "./HelloUser";


export default {
  title: 'HelloUser',
};

export const withName = () => <HelloUser name={'Ruben'} />;
