import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Macro/MyNavbar';

import LandingPage from './pages/LandingPage';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/galleries" component={Gallery} />
      </Switch>
    </Router>
  );
}

export default App;
