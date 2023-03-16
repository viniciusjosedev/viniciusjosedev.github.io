import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navegation from './components/Navegation';
import WidthProvider from './context/WidthProvider';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (
          <Home { ...props  }/>
        )}
      />
      <Route
        exact
        path="/teste"
        render={({ location, history, match }) => (
          <WidthProvider location={location} history={history} match={match}>
            <Navegation />
            <Home />
          </WidthProvider>
        )}
      />
    </Switch>
  );
}

export default App;
