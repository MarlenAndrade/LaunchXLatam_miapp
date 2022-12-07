import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import './App.css';


function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
    const element = (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Marlen Andrade</h1>
          <h2>Son las {new Date().toLocaleTimeString()}</h2>
        </header>
      </div>
    );

    root.render(element);
}

export default App;
