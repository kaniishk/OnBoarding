import './App.css';
import FormComponent from './components/FormComponent';
import Logo from './Logo.png';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
            <img className="logo" src={Logo} alt="Logo"/>
            <h3 style={{margin:0}}><strong>Eden</strong></h3>
      </header>
      <FormComponent />
    </div>
  );
}

export default App;
