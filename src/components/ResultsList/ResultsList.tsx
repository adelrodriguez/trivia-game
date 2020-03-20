import React from 'react';
import { List, Card } from 'semantic-ui-react';
import { ResultsItem } from '../ResultsItem';
import styles from './ResultsList.module.css';

interface Props {
  results: Result[];
}

export function ResultsList({ results }: Props) {
  return (
    <Card centered className={styles.card}>
      <Card.Content>
        <List size="large" relaxed divided verticalAlign="middle">
          {results.map(result => (
            <ResultsItem
              key={result.id}
              answer={result.answer}
              correct={result.correct}
              question={result.question}
            />
          ))}
        </List>
      </Card.Content>
    </Card>
  );
}
