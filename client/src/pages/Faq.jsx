export default function Faq() {
  return (
    <div className=" bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Preguntas frecuentes</h2>
      <ul className="space-y-4">
        <li>
          <h3 className="text-lg font-medium">
            ¿Dónde puedo comprar el dispositivo?
          </h3>
          <p className="text-gray-600">
            Contactanos al siguiente numero (+52) 618-432-2309
          </p>
        </li>
        <li>
          <h3 className="text-lg font-medium">
            ¿Cómo funciona la sección de establecer temperatura?
          </h3>
          <p className="text-gray-600">
            Para establecer la temperatura debes mover el control deslizante y
            presionar el boton que dice establecer temperatura
          </p>
        </li>
        <li>
          <h3 className="text-lg font-medium">
            ¿Cómo restablecer la sección de movimiento?
          </h3>
          <p className="text-gray-600">
            Simplemente hacer clic en el boton de establecer movimiento
          </p>
        </li>
        <li>
          <h3 className="text-lg font-medium">
            ¿Cómo establecer parámetros en la sección de gas y humo?
          </h3>
          <p className="text-gray-600">
            Para establecer el umbral de gas & humo ajusta el valor en el
            control deslizante seguido de un clic en el boton establecer
            movimiento{" "}
          </p>
        </li>
        <li>
          <h3 className="text-lg font-medium">
            ¿Dónde se ven los datos de los sensores?
          </h3>
          <p className="text-gray-600">
            En la sección de Estado actual se muestran los valores de los
            sensores de temperatura, movimiento, gas y humo
          </p>
        </li>
      </ul>
    </div>
  );
}
