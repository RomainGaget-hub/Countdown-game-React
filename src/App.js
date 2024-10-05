import './App.css';
import Challenge from './components/Challenge';
import Header from './components/Header';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="countdownWrapper">
          <Header />
          <User />
          <div className="challengesWrapper">
            <Challenge title="Challenge 1" targetTime={10} />
            <Challenge title="Challenge 2" targetTime={20} />
            <Challenge title="Challenge 3" targetTime={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
