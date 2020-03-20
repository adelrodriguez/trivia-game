import React from 'react';
import { number } from '@storybook/addon-knobs';
import { ResultsList } from './ResultsList';

export default {
  title: 'ResultsList',
  component: ResultsList,
};

export const Default = () => (
  <ResultsList
    results={Array(number('results', 3))
      .fill(undefined)
      .map(() => ({
        id: `${new Date().getTime()}`,
        answer: true,
        correct: true,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      }))}
  />
);
