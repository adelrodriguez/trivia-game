import React from 'react';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { AnswerButton } from './AnswerButton';

export default {
  title: 'AnswerButton',
  component: AnswerButton,
};

export const Default = () => (
  <AnswerButton
    type={select('type', ['true', 'false'], 'true')}
    onPress={action('onPress called')}
  />
);
