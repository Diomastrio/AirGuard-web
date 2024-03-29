/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function RadioWithToggleText() {
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center mb-4">
      <input
        id="default-radio-1"
        type="checkbox" // Change the type to "checkbox"
        value=""
        name="default-radio"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        checked={isChecked} // Add the checked attribute
        onChange={handleRadioChange}
      />
      <label
        htmlFor="default-radio-1"
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {isChecked ? "Activo" : "Desactivo"}
      </label>
    </div>
  );
}

export default RadioWithToggleText;
