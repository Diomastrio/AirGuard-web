import RangeSlider from "../components/RangeSlider";
import { initFlowbite } from "flowbite";

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
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Bienvenido.
        </p>
      </div>
      <RangeSlider />
    </div>
  );
}
