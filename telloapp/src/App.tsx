import Commands from "./command";
import DroneMessage from "./hooks/droneMessage";
import DroneState from "./hooks/droneState";


function App() {
  return( <><Commands /><DroneState /><DroneMessage /></>)

 
}

export default App;
