import { clearSocket } from "./socket";
import Button from "./Components/Button";
import styled from "@emotion/styled";

const StyledHeader = styled.h3`
  :hover {
    color: white;
    border-color: coral;
  }
`;

const Commands = () => {
  return (
    <div>
      <Button
        onClick={() => {
          clearSocket.emit("command", "battery");
        }}
        img="emergency.jpeg"
      >
        <StyledHeader>battery</StyledHeader>
      </Button>
      <button
        onClick={() => {
          clearSocket.emit("command", "command");
        }}
      >
        READY
      </button>
      <button
        onClick={() => {
          clearSocket.emit("command", "takeoff");
        }}
      >
        TAKE OFF
      </button>
      <button
        onClick={() => {
          clearSocket.emit("command", "land");
        }}
      >
        LAND
      </button>
      <button
        onClick={() => {
          clearSocket.emit("command", "up 20");
        }}
      >
        UP 20
      </button>
      <button
        onClick={() => {
          clearSocket.emit("command", "down 20");
        }}
      >
        DOWN 20
      </button>
      <button
        onClick={() => {
          clearSocket.emit("command", "flip l");
        }}
      >
        FLIP LEFT
      </button>
      <button
        onClick={() => {
          clearSocket.emit("command", "flip r");
        }}
      >
        FLIP RIGGHT
      </button>
      <button
        onClick={() => {
          clearSocket.emit("command", "flip f");
        }}
      >
        FLIP FORWARD
      </button>
      <button
        onClick={() => {
          clearSocket.emit("command", "flip b");
        }}
      >
        FLIP BACK
      </button>
      <button
        onClick={() => {
          clearSocket.emit("command", "emergency");
        }}
      >
        EMERGENCY
      </button>
    </div>
  );
};
export default Commands;
