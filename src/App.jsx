import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navegation from './components/Navegation';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading';
import Projects from './pages/Projects';
import ProjectsFilter from './pages/ProjectsFilter';

function App() {
  return (
    <Switch>
			<Route
        exact
        path="/projects/filter/:details"
        render={() => (
          <Projects />
        )}
      />
			<Route
        exact
        path="/projects/filter"
        render={() => (
          <ProjectsFilter />
        )}
      />
      <Route
        exact
        path="/projects"
        render={() => (
          <Projects />
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
        path="/home"
        render={(props) => (
          <Home { ...props } />
        )}
      />
			<Route
        exact
        path="/"
        render={() => (
          <Loading />
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
