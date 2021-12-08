import './App.css';
import { BrowserRouter  as Router, SWitch, Route} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
