import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import WidthProvider from './context/WidthProvider';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={({ location, history, match }) => (
          <WidthProvider location={location} history={history} match={match}>
            <Header />
            <Home />
          </WidthProvider>
        )}
      />
      {/* <Route
        exact
        path="/"
        render={({ location, history, match }) => (
          <Home location={location} history={history} match={match} />
        )}
      /> */}
    </Switch>
  );
}

export default App;
