import React from 'react';
import { Header, Button, Transition } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from '../hooks';
import { ResultsList } from '../components/ResultsList';

export function ResultsScreen() {
  const score = useStoreState(state => state.questions.score);
  const results = useStoreState(state => state.questions.results);
  const { reset } = useStoreActions(actions => actions.questions);

  if (!results.length) {
    return <Redirect to="/" />;
  }

  return (
    <Transition animation="fade up" duration={1000} transitionOnMount>
      <div>
        <Header size="huge" textAlign="center">
          You scored
          <Header.Subheader>
            {score}/{results.length}
          </Header.Subheader>
        </Header>
        <ResultsList results={results} />
        <Link to="/">
          <Button fluid onClick={() => reset()}>
            PLAY AGAIN?
          </Button>
        </Link>
      </div>
    </Transition>
  );
}
