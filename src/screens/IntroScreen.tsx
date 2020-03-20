import React, { useEffect } from 'react';
import {
  Transition,
  Button,
  Header,
  Icon,
  Container,
  Loader,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from '../hooks';

export function IntroScreen() {
  const loading = useStoreState(state => state.questions.loading);
  const error = useStoreState(state => state.questions.error);

  const { getQuestions } = useStoreActions(actions => actions.questions);

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  if (loading) {
    return (
      <div>
        <Loader active>Loading</Loader>
      </div>
    );
  }

  if (error) {
    return (
      <Transition animation="fade up" duration={1000} transitionOnMount>
        <Header size="huge" textAlign="center" icon>
          <Icon name="warning" />
          Error
          <Header.Subheader>
            There was an error while loading the questions. Please refresh the
            page.
          </Header.Subheader>
        </Header>
      </Transition>
    );
  }

  return (
    <Transition animation="fade up" duration={1000} transitionOnMount>
      <Container textAlign="center">
        <Header size="huge" textAlign="center" icon>
          <Icon name="question circle outline" />
          Welcome to the Trivia Challenge!
          <Header.Subheader>
            You will be presented 10 True of False questions.
          </Header.Subheader>
        </Header>
        <p>Can you score 100%?</p>
        <Link to="/quiz">
          <Button>BEGIN</Button>
        </Link>
      </Container>
    </Transition>
  );
}
