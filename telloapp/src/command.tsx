import { clearSocket } from "./socket";
import Button from "./Components/Button";
import styled from "@emotion/styled";

const StyledPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;
const Commands = () => {
  return (
    <StyledPanel>
      <Button
        onClick={() => {
          clearSocket.emit("command", "battery?");
        }}
        img="emergency.jpeg"
      >
        BATERY
      </Button>
      <Button
        onClick={() => {
          clearSocket.emit("command", "command");
        }}
        img=""
      >
        READY
      </Button>
      <Button
        onClick={() => {
          clearSocket.emit("command", "takeoff");
        }}
        img=""
      >
        TAKE OFF
      </Button>
      <Button
        onClick={() => {
          clearSocket.emit("command", "land");
        }}
        img=""
      >
        LAND
      </Button>
      <Button
        onClick={() => {
          clearSocket.emit("command", "up 20");
        }}
        img=""
      >
        UP 20
      </Button>
      <Button
        onClick={() => {
          clearSocket.emit("command", "down 20");
        }}
        img=""
      >
        DOWN 20
      </Button>
      <Button
        onClick={() => {
          clearSocket.emit("command", "flip l");
        }}
        img=""
      >
        FLIP LEFT
      </Button>
      <Button
        onClick={() => {
          clearSocket.emit("command", "flip r");
        }}
        img=""
      >
        FLIP RIGGHT
      </Button>
      <Button
        onClick={() => {
          clearSocket.emit("command", "flip f");
        }}
        img=""
      >
        FLIP FORWARD
      </Button>
      <Button
        onClick={() => {
          clearSocket.emit("command", "flip b");
        }}
        img=""
      >
        FLIP BACK
      </Button>
      <Button
        onClick={() => {
          clearSocket.emit("command", "emergency");
        }}
        img=""
      >
        EMERGENCY
      </Button>
      <Button
        onClick={() => {
          clearSocket.emit("command", "streamon");
        }}
        img=""
      >
        STREAM ON
      </Button>
      <Button
        onClick={() => {
          clearSocket.emit("command", "streamoff");
        }}
        img=""
      >
        STREAM OFF
      </Button>
    </StyledPanel>
  );
};
export default Commands;
