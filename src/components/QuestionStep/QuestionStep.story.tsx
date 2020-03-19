import React from 'react';
import { text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { QuestionStep } from './QuestionStep';

export default {
  title: 'QuestionStep',
  component: QuestionStep,
};

export const Default = () => (
  <QuestionStep
    step={number('step', 1)}
    steps={number('steps', 10)}
    question={{
      id: '1',
      category: text('category', 'Storybook'),
      question: text(
        'question',
        'Are you using Storybook to develop your components?'
      ),
      correctAnswer: true,
    }}
    onAnswerPress={action('onAnswerPress')}
  />
);
