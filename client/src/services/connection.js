import mqtt from "mqtt";

const clientId = "mqttx_4f1cc386";
const Username = "andy";
const Password = "andy6060";
const options = {
  protocol: "wss", // Use WebSocket
  port: 8084, // WebSocket port
  host: "broker.emqx.io", // Ensure correct address
  path: "/mqtt",
  clientId,
  Username,
  Password,
};

const client = mqtt.connect(options); // Connect to EMQX broker

client.on("connect", () => {
  console.log("Connected to MQTT broker");
});

client.on("error", (error) => {
  console.error("Error connecting to MQTT broker:", error);

  if (error.message.includes("WebSocket connection failed")) {
    console.error(
      "WebSocket connection failed. Check network or broker status."
    );
  } else if (error.message.includes("Connection refused")) {
    console.error(
      "Connection refused. Check broker address or security settings."
    );
  }
});

export default client;
