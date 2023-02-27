import logo from './logo.svg';
import './App.css';
import BasicCard from './components/BasicCard';


function App() {
  var btnstyle = {
    'background-color' : "#112233",
    'height': "100vh"
  };
  return (
    <div style={btnstyle}>
      <p>Hello World</p>
      <BasicCard />
    </div>
  );
}

export default App;
