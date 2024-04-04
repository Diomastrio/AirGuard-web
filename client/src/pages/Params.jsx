import SetParams from "../components/SetParams";
import SensorData from "../components/SensorData";
import { initFlowbite } from "flowbite";
import client from "../services/connection";
client.on("connect", () => {
  console.log("Connected to MQTT broker");
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

// client.on("message", (topic, message) => {
//   if (topic === "/airguard/temp") {
//     console.log("Received message:", message.toString());
//   }
// });
// Initialize Flowbite
initFlowbite();
export default function Params() {
  return (
    <div className="flex flex-wrap gap-6 p-20 px-3 mx-auto sm: items-center">
      <div className="w-full">
        {" "}
        <h4 className="mb-4 font-bold lg:text-4xl  text-gray-900 dark:text-white md:text-5xl">
          Monitorea y gestiona la{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            energía{" "}
          </span>
          de tu habitación.
        </h4>
      </div>
      <SetParams />
      <SensorData />
    </div>
  );
}
