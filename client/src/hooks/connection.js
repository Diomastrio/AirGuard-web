import mqtt from "mqtt";

// const clientId = "emqx_react_" + Math.random().toString(16).substring(2, 8);
const clientId = "mqttx_11095452";
const username = "andy";
const password = "12345678";

const options = {
  protocol: "ws", // Use WebSocket
  host: "broker.emqx.io",
  port: 8083, // WebSocket port
  clientId,
  username,
  password,
};

const client = mqtt.connect(options);

// Handle connection events
client.on("connect", () => {
  console.log("Connected to MQTT broker");
  // Subscribe to topics or publish messages here
});

client.on("error", (error) => {
  console.error("Error connecting to MQTT broker:", error);
});
