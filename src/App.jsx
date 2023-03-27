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
        path="/portfolio"
        render={() => (
          <Navegation />
        )}
      />
			<Route
        exact
        path="/technologies"
        render={() => (
          <Navegation />
        )}
      />
			<Route
        exact
        path="/contact"
        render={() => (
          <Navegation />
        )}
      />
			<Route
        exact
        path="/"
        render={(props) => (
          <Home { ...props  }/>	
        )}
      />
			<Route
        exact
        path="*"
        render={(props) => (
          <Home { ...props  }/>
        )}
      />
    </Switch>
  );
}

export default App;
