import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export function IntroScreen() {
  return (
    <>
      <Header>Welcome to the Trivia Challenge!</Header>
      <p>You will be presented 10 True of False questions.</p>
      <p>Can you score 100%?</p>
      <Link to="/quiz">
        <Button>BEGIN</Button>
      </Link>
    </>
  );
}
