import mqtt from "mqtt";

const clientId = "mqttx_c6237596";
const username = "andy";
const password = "1560";
const client = mqtt.connect("wss://broker.emqx.io:8084/mqtt", {
  clientId,
  username,
  password,
});
// broker.hivemq.com
client.on("connect", () => {
  console.log("Conectado al broker MQTT");
  client.subscribe("/airguard/temp");
  client.subscribe("/airguard/temp/alert");
  client.subscribe("/airguard/humidity");
  client.subscribe("/airguard/gas-humo");
  client.subscribe("/airguard/humo-gas/alert");
  client.subscribe("/airguard/movement");
});

client.on("error", (error) => {
  console.error("Error conectando al broker:", error);

  if (error.message.includes("WebSocket connection failed")) {
    console.error("Conexion de websocket fallida, revisa conexion.");
  } else if (error.message.includes("Connection refused")) {
    console.error(
      "Conexion denegada. Revisa direccion del broker o ajustes de seguridad."
    );
  }
});

export default client;
