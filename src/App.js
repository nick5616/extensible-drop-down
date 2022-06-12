import logo from './logo.svg';
import './App.css';
import DropDown from './Components/dropDown';

function App() {
  return (
    <div className="main flex">
      <DropDown label="Tag" multi></DropDown>
      <DropDown label="Age"></DropDown>
    </div>
  );
}

export default App;
