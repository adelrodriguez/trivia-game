import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { IntroScreen, QuizScreen, ResultsScreen } from './screens';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <HashRouter>
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
      </HashRouter>
    </div>
  );
}

export default App;
