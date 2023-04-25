import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navegation from './components/Navegation';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading';
import Projects from './pages/Projects';
import ProjectsAll from './pages/ProjectsAll';
import Technologies from './pages/Technologies';
import Contacts from './pages/Contacts';

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
        path="/projects/all"
        render={() => (
          <ProjectsAll />
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
          <Technologies />
        )}
      />
			<Route
        exact
        path="/contact"
        render={() => (
          <Contacts />
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
