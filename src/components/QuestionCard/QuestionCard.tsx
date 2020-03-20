import React from 'react';
import { Transition, Card, Header } from 'semantic-ui-react';
import styles from './QuestionCard.module.css';

interface Props {
  text: string;
}

export function QuestionCard({ text }: Props) {
  return (
    <Transition animation="fade left" duration={1000} transitionOnMount>
      <Card centered className={styles.card}>
        <Card.Content textAlign="center" className={styles.content}>
          <Header>{text}</Header>
        </Card.Content>
      </Card>
    </Transition>
  );
}
