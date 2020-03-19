import React from 'react';
import { Header, Progress } from 'semantic-ui-react';
import { QuestionCard } from '../QuestionCard';
import { AnswerButton } from '../AnswerButton';
import styles from './QuestionStep.module.css';

interface Props {
  step: number;
  steps: number;
  question: Question;
  onAnswerPress: (answer: boolean) => void;
}

export function QuestionStep({ step, steps, question, onAnswerPress }: Props) {
  return (
    <div className={styles.container}>
      <Header>{question.category}</Header>
      <QuestionCard text={question.question} />
      <div className={styles.progress}>
        <Progress value={step} total={steps} indicating progress="percent" />
      </div>
      <div className={styles.buttons}>
        <AnswerButton type="true" onPress={() => onAnswerPress(true)} />
        <AnswerButton type="false" onPress={() => onAnswerPress(false)} />
      </div>
    </div>
  );
}
