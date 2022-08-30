import logo from './logo.svg';
import './App.css';
import ButtonComponent from './MyComponents/ButtonComponent';
import ImageComponent from './MyComponents/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ImageComponent/>
        <ButtonComponent text="click me"/>
      </header>
    </div>
  );
}

export default App;
