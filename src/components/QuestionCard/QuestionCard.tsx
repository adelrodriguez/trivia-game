import React, { useState, useEffect } from 'react';
import { Transition, Card, Header } from 'semantic-ui-react';
import styles from './QuestionCard.module.css';

interface Props {
  text: string;
}

export function QuestionCard({ text }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Transition visible={visible} animation="scale" duration={500}>
      <Card centered className={styles.card}>
        <Card.Content textAlign="center" className={styles.content}>
          <Header>{text}</Header>
        </Card.Content>
      </Card>
    </Transition>
  );
}
