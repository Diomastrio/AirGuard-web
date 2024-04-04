/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import client from "../services/connection";

// client.on("message", (topic, message) => {
//   if (topic === "/airguard/temp") {
//     console.log("Received message:", message.toString());
//   }
// });
export default function SensorData() {
  const [isRealMovementActive, setIsRealMovementActive] = useState(true);
  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [isGasActive, setIsGasActive] = useState(null);
  const [isMovementActive, setIsMovementActive] = useState(null);

  useEffect(() => {
    client.on("message", (topic, message) => {
      if (topic === "/airguard/temp") {
        setTemp(message.toString());
      }
    });
  }, []);
  useEffect(() => {
    client.on("message", (topic, message) => {
      if (topic === "/airguard/humidity") {
        setHumidity(message.toString());
      }
    });
  }, []);
  useEffect(() => {
    client.on("message", (topic, message) => {
      if (topic === "/airguard/gas-humo") {
        setIsGasActive(message.toString());
      }
    });
  }, []);
  useEffect(() => {
    client.on("message", (topic, message) => {
      if (topic === "/airguard/movement") {
        setIsMovementActive(message.toString());
      }
    });
  }, []);

  return (
    <div className="w-1/2 mx-auto my-8 p-8 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 ">
      <span className="text-gray-700 dark:text-white pb-3">Estado actual</span>
      <hr className="w-full my-6 h-2 border-gray-200 dark:border-gray-700" />
      <div className="flex flex-wrap justify-between pr-10">
        <ul
          role="list"
          className="max-w-sm ml-10 divide-y divide-gray-200 dark:divide-gray-700"
        >
          <h3 className="flex items-center ml-2">Temperatura actual</h3>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                {temp ? `${temp}°C` : "Cargando..."}
              </span>
            </div>
          </li>
        </ul>
        <ul
          role="list"
          className="max-w-sm ml-10 divide-y divide-gray-200 dark:divide-gray-700"
        >
          <h3 className="flex items-center ml-2">Humedad actual</h3>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                <span className="w-2 h-2 me-1 bg-yellow-500 rounded-full"></span>
                {humidity ? `${humidity}%` : "Cargando..."}
              </span>
            </div>
          </li>
        </ul>
        <ul
          role="list"
          className="max-w-sm ml-10 divide-y divide-gray-200 dark:divide-gray-700"
        >
          <h3 className="flex items-center ml-2">Movimiento</h3>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                <span className="w-2 h-2 me-1 bg-violet-500 rounded-full"></span>
                {isMovementActive ? `${isMovementActive}` : "Cargando..."}
              </span>
            </div>
          </li>
        </ul>
        <ul
          role="list"
          className="max-w-sm ml-10 divide-y divide-gray-200 dark:divide-gray-700"
        >
          <h3 className="flex items-center ml-2">Humo & Gas</h3>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                <span className="w-2 h-2 me-1 bg-yellow-500 rounded-full"></span>
                {isGasActive ? `${isGasActive}` : "Cargando..."}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
