import React, {CSSProperties} from 'react';
import Card from "./Card";
import {number, select, withKnobs} from "@storybook/addon-knobs";
import {withA11y} from "@storybook/addon-a11y";

const styles = {
  background:'darkgreen',
  height:'100vh',
  margin: '0px',
  padding: '0px',
};

export default {
  title: 'Card',
  decorators: [
    withKnobs,
    withA11y,
    (storyFn:any) => <div style={styles}> {storyFn()} </div>]
};

const numberAtb = {
  label: 'Valor',
  defaultValue: 9,
  options: {
    range: true,
    min: 1,
    max: 13,
    step: 1,
  }
};

const selectAtb = {
  label: 'Palo',
  options: {
    Corazones: '♥',
    Picas: '♠',
    Rombos: '♦',
    Tréboles: '♣',
  },
  defaultValue: '♥',
};


export const Default = () => <Card stick={select(selectAtb.label, selectAtb.options, selectAtb.defaultValue)}
                                   rank={number(numberAtb.label, numberAtb.defaultValue, numberAtb.options)}/>;

// const RANKS =  'A,2,3,4,5,6,7,8,9,10,J,Q,K'.split(",");
const VALUE_NUMBER =  '1,2,3,4,5,6,7,8,9,10,11,12,13'.split(",").map(value => parseInt(value));
export const Deck = () => VALUE_NUMBER.map(rank => <Card key={rank}
                                                         stick={select(selectAtb.label, selectAtb.options, selectAtb.defaultValue)}
                                                         rank={rank}/>);
