import React from 'react';
import { Icon, Header } from 'semantic-ui-react';
import styles from './QuestionResult.module.css';

interface Props {
  question: string;
  correct: boolean;
  answer: boolean;
}

export function QuestionResult({ question, correct, answer }: Props) {
  return (
    <div className={styles.container}>
      <Icon.Group size="big" className={styles.icon}>
        <Icon
          size="large"
          name="circle outline"
          color={correct ? 'green' : 'red'}
          fitted
        />
        <Icon
          name={correct ? 'check' : 'cancel'}
          color={correct ? 'green' : 'red'}
          fitted
        />
      </Icon.Group>
      <div>
        <Header>{question}</Header>
        <p>Your answer: {answer.toString()}</p>
      </div>
    </div>
  );
}
