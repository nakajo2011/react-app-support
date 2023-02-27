import './App.css';
import BasicCard from './components/BasicCard';


function App() {
  var btnstyle = {
    'background-color' : "#EDE6E6",
    'height': "100vh"
  };
  return (
    <div style={btnstyle}>
  
      <BasicCard />
    </div>
  );
}

export default App;
