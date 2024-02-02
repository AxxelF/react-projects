import './App.css';
import Info from './components/Info';
import NewInfo from './components/NewInfo';

function App() {
  return (
    <div className='App'>
      <Info />
      <NewInfo />
      <div className='info'>
        <h1>App component heading</h1>
        <h2>Heading in App</h2>
        <button className='my-button'>App component button</button>
      </div>
    </div>
  );
}

export default App;
