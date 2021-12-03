import Petey from './Petey.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= {Petey} width="200" height ="300" alt="Petey from the Little Rascals" />
        <p>
          Let's get started.
        </p>
      </header>
    </div>
  );
}

export default App;
