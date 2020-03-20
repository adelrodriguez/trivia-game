import React from 'react';
import { List } from 'semantic-ui-react';
import startCase from 'lodash/startCase';

interface Props {
  question: string;
  correct: boolean;
  answer: boolean;
}

export function ResultsItem({ question, correct, answer }: Props) {
  return (
    <List.Item>
      <List.Icon
        name={correct ? 'check' : 'cancel'}
        color={correct ? 'green' : 'red'}
        fitted
        size="large"
      />
      <List.Content>
        <List.Header>{question}</List.Header>
        <List.Description>
          Your answer: <strong>{startCase(answer.toString())}</strong>
        </List.Description>
      </List.Content>
    </List.Item>
  );
}
