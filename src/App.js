
import Header from './components/header/Header.component';
import Home from './page/Home/Home.component';
import './sass/App.scss';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Switch >
          <Route path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;
