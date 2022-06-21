import wifi from "node-wifi";

wifi.init({
  iface: null,
});

wifi.scan((error, _networks) => {
  if (error) console.log(error);
});

wifi.connect({ ssid: "TELLO-C714C7", password: "" }, () => {
  console.log("Connected to tello wifi");
});
