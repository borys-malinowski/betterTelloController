import Commands from "./command";
import DroneMessage from "./hooks/useDroneMessage";
import DroneState from "./hooks/useDroneState";
import DroneStream from "./hooks/useDroneStream";


 
function App() {
  return( <><Commands /><DroneState /><DroneMessage /><DroneStream/></>)

 
}

export default App;
