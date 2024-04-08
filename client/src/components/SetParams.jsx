/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { initFlowbite } from "flowbite";
import client from "../../../api/services/connection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SetParams() {
  initFlowbite();

  const [temp, setTempValue] = useState(24);
  const handleChange = (e) => {
    setTempValue(e.target.value);
  };
  const [gasNum, setGasNum] = useState(20);
  const handleGasChange = (e) => {
    setGasNum(e.target.value);
  };

  return (
    //descripción: "Este es un componente deslizante de rango simple que le permite configurar la temperatura, la detección de gas y la detección de movimiento".
    <div className="w-1/2 mx-auto my-8 p-8 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 ">
      <ToastContainer />
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
              Gas & humo
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
            el control deslizante funciona para ajustar el umbral el cual al ser
            sobrepasado dara una alerta.
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
              Gas & humo
            </strong>{" "}
            el control deslizante funciona para ajustar el umbral el cual al ser
            sobrepasado dara una alerta.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="styled-settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            En el boton de{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Movimiento
            </strong>{" "}
            puedes restablecer la distancia del sensor ultrasonico.
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
      <div className=" pb-6"></div>
      <h3 className="flex items-center mr-4">Gas</h3>
      <span className="text-gray-700 dark:text-white pb-3">{gasNum} ppm</span>
      <input
        type="range"
        min="0"
        max="100"
        value={gasNum}
        onChange={handleGasChange}
        className="mx-4 w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        style={{
          backgroundImage: `linear-gradient(to right, #4299e1 0%, #4299e1 ${0}%, #d1d5db ${gasNum}%, #d1d5db 100%)`,
        }}
      />
      <div className=" pb-6"></div>
      <h3 className="flex items-center ml-2">Movimiento</h3>
      <div className=" pb-6"></div>
      <div className="flex flex-wrap justify-between">
        <div className=" px-2"></div>
        <div className="flex px-2">
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => {
              // Usa el cliente MQTT para publicar un mensaje en el tema "/airguard/set/temp/max" con la constante `temp` como carga útil
              client.publish("/airguard/set/temp/max", temp.toString());
              toast("Temperatura establecida!", {
                type: "success",
                position: "bottom-center",
              });
            }}
          >
            Establecer Temperatura
          </button>
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => {
              // Usa el cliente MQTT para publicar un mensaje en el tema "/airguard/set/humo-gas" con la constante `gasNum` como carga útil
              client.publish("/airguard/set/humo-gas", gasNum.toString());
              toast("Gas establecido!", {
                type: "success",
                position: "bottom-center",
              });
            }}
          >
            Establecer Gas
          </button>
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => {
              // usa el cliente MQTT para publicar un mensaje en el tema "/airguard/set/movement" con la constante `message` como carga útil
              const message = "setDistance";
              client.publish("/airguard/set/movement", message);
              toast("Distancia restablecida!", {
                type: "success",
                position: "bottom-center",
              });
            }}
          >
            Establecer Movimiento
          </button>
        </div>
      </div>
    </div>
  );
}
