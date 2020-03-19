import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useStoreActions } from './hooks';
import { IntroScreen, QuizScreen, ResultsScreen } from './screens';
import styles from './App.module.css';

function App() {
  const { getQuestions } = useStoreActions(actions => actions.questions);

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/quiz">
            <QuizScreen />
          </Route>
          <Route path="/results">
            <ResultsScreen />
          </Route>
          <Route path="/">
            <IntroScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
