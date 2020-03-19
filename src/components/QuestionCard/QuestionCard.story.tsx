import React from 'react';
import { text } from '@storybook/addon-knobs';
import { QuestionCard } from './QuestionCard';

export default {
  title: 'QuestionCard',
  component: QuestionCard,
};

export const Default = () => (
  <QuestionCard text={text('text', 'Is this a story?')} />
);
