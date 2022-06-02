import Commands from "./command";
import DroneMessage from "./hooks/useDroneMessage";
import DroneState from "./hooks/useDroneState";


function App() {
  return( <><Commands /><DroneState /><DroneMessage /></>)

 
}

export default App;
