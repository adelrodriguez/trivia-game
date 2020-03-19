import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { QuestionResult } from './QuestionResult';

export default {
  title: 'QuestionResult',
  component: QuestionResult,
};

export const Default = () => (
  <QuestionResult
    question={text('question', 'Is this a story?')}
    correct={boolean('correct', true)}
    answer={boolean('answer', true)}
  />
);
