/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
export default function Comprar() {
  return (
    <div
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          AirGuardian-1
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Estas listo para mantener el control y la seguridad de tu habitacion?
        </p>
        <Link to={"/params"}>
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none bg-gradient-to-r from-blue-950 via-teal-600 to-emerald-600 rounded-lg text-white"
            style={{ width: "fit-content" }} // Add this line to make the button less wide
          >
            Utilizar servicio de monitoreo
          </Button>
        </Link>
      </div>
    </div>
  );
}
