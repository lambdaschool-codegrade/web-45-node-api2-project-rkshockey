import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h1>Simple posts</h1>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
