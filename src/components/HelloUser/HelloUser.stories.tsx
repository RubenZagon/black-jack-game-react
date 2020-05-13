import React from 'react';
import HelloUser from "./HelloUser";
import {text, withKnobs} from "@storybook/addon-knobs";


export default {
  title: 'HelloUser',
  decorators: [withKnobs]
};

export const withName = () => <HelloUser name={text("Nombre", "Rubén")} />;
