import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { List } from 'semantic-ui-react';
import { ResultsItem } from './ResultsItem';

export default {
  title: 'ResultsItem',
  component: ResultsItem,
};

export const Default = () => (
  <List size="huge">
    <ResultsItem
      question={text('question', 'Is this a story?')}
      correct={boolean('correct', true)}
      answer={boolean('answer', true)}
    />
  </List>
);
