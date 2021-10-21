import Header from './components/header/Header.component';
import Home from './page/Home.component';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Home />
    </div>
  );
}

export default App;
