import './App.css';
import AuthContainer from './components/AuthContainer';
import RegistrationContainer from './components/RegistrationContainer';

function App() {
  return (
    <div className="App">
      <h1>App code...</h1>
      <div className="App-wrapper">
        <AuthContainer />
        <RegistrationContainer />
      </div>
    </div>
  );
}

export default App;
