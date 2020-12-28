import './App.scss';
import PersonalInformation from './components/PersonalInformation';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Work from './components/Work';
import Cours from './components/Cours';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <PersonalInformation />
          </Route>

          <Route path="/work">
            <Work />
          </Route>

          <Route path="/cours">
            <Cours />
          </Route>

          <Route path="/education">
            <Education />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
