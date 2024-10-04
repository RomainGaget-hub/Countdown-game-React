import './App.css';
import Header from './components/Header';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="countdownWrapper">
          <Header />
          <User />
        </div>
      </div>
    </div>
  );
}

export default App;
