import mqtt from "mqtt";

const clientId = "mqttx_c6237596";
const username = "andy";
const password = "1560";
const client = mqtt.connect("ws://broker.emqx.io:8083/mqtt", {
  clientId,
  username,
  password,
  //   // ...other options
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
  client.publish("/airguard/set/temp/max");
  client.publish("/airguard/set/humo-gas");
  client.publish("/airguard/set/movement");
});

client.on("error", (error) => {
  console.error("Error conectando al broker:", error);

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
