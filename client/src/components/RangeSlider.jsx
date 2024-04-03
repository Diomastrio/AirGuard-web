/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { initFlowbite } from "flowbite";
import RadioWithToggleText from "./RadioInput";
import client from "../services/connection";
client.on("connect", () => {
  console.log("Connected to MQTT broker");
  client.subscribe("temp");
});

client.on("message", (topic, message) => {
  if (topic === "temp") {
    // Handle the received message here
    console.log("Received message:", message.toString());
  }
});
export default function RangeSlider() {
  initFlowbite();

  const [temp, setTempValue] = useState(24);
  const handleChange = (e) => {
    setTempValue(e.target.value);
  };

  const [isGasActive, setIsGasActive] = useState(true);
  const [isMovementActive, setIsMovementActive] = useState(true);
  const [isRealMovementActive, setIsRealMovementActive] = useState(true);

  return (
    //description: "This is a simple range slider component that allows you to set the temperature, gas detection and movement detection."
    <div className="w-1/2 mx-auto my-8 p-8 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 ">
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-styled-tab"
          data-tabs-toggle="#default-styled-tab-content"
          data-tabs-active-classnames="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
          data-tabs-inactive-classnames="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg"
              id="profile-styled-tab"
              data-tabs-target="#styled-profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Temperatura
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="dashboard-styled-tab"
              data-tabs-target="#styled-dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Deteccion de gas
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="settings-styled-tab"
              data-tabs-target="#styled-settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Movimiento
            </button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content">
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="styled-profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            En la seccion de{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Temperatura
            </strong>{" "}
            Puedes ajustar el umbral el cual al ser sobrepasado dara una alerta.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="styled-dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            En la seccion de{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Gas
            </strong>{" "}
            puedes ver si existe alguna contaminacion de gas en el aire.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="styled-settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            En la seccion de{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Movimiento
            </strong>{" "}
            puedes ver si hay algun movimiento en la habitacion.
          </p>
        </div>
      </div>
      <h3>Temperatura</h3>
      <span className="text-gray-700 dark:text-white pb-3">{temp}°C</span>
      <input
        type="range"
        min="-10"
        max="100"
        value={temp}
        onChange={handleChange}
        className="mx-4 w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        style={{
          backgroundImage: `linear-gradient(to right, #4299e1 0%, #4299e1 ${0}%, #d1d5db ${temp}%, #d1d5db 100%)`,
        }}
      />
      <span className="text-gray-700"> </span>
      {/* description: below is the way of figuring if there is gas detected and movement */}
      <div className=" pb-6"></div>
      <div className="flex flex-wrap justify-between">
        <h3 className="flex items-center mr-4">Gas</h3>
        <ul
          role="list"
          className="max-w-sm mr-30 divide-y divide-gray-200 dark:divide-gray-700"
        >
          {isGasActive ? (
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                  Sin riesgo
                </span>
              </div>
            </li>
          ) : (
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                  <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                  Riesgo
                </span>
              </div>
            </li>
          )}
        </ul>
        <div className=" px-2"></div>
        <h3 className="flex items-center ml-2">Movimiento</h3>
        <ul
          role="list"
          className="max-w-sm ml-10 divide-y divide-gray-200 dark:divide-gray-700"
        >
          {isMovementActive ? (
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                  Activo
                </span>
              </div>
            </li>
          ) : (
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                  <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                  Desactivo
                </span>
              </div>
            </li>
          )}
          <RadioWithToggleText />
        </ul>
      </div>
      <hr className="w-full my-6 h-6 border-width-2 border-gray-700 dark:border-gray-200" />
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
                24°C
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
                18%
              </span>
            </div>
          </li>
        </ul>
        <ul
          role="list"
          className="max-w-sm ml-10 divide-y divide-gray-200 dark:divide-gray-700"
        >
          <h3 className="flex items-center ml-2">Movimiento</h3>
          {isRealMovementActive ? (
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                  Activo
                </span>
              </div>
            </li>
          ) : (
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                  <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                  Desactivo
                </span>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
