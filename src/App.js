import logo from './logo.svg';
import './App.css';
import DropDown from './Components/dropDown';

function App() {
  return (
    <div className="main flex">
      <DropDown label="Tag" multi options={["Billy Bop", "Oliver Hansen", "Van Henry"]}></DropDown>
      <DropDown label="Age" multi={false} ></DropDown>
    </div>
  );
}

export default App;
