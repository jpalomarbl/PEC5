1. **¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?**
 *FormControl* representa un solo campo de entrada en un formulario con métodos para rastrear su valor y estado. *FormGroup* es un conjunto de *FormControl* que permite manejar un grupo de campos como una sola entidad, útil para formularios más complejos. *FormBuilder* es una utilidad que simplifica la creación de instancias de *FormControl* y *FormGroup* al proporcionar métodos para definir campos y grupos de manera más concisa y legible. Estas clases permiten la creación, validación y gestión del estado de los formularios de manera dinámica y reactiva en las aplicaciones Angular.

2. **Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.**

| Validador         | Descripción                                                |
|-------------------|------------------------------------------------------------|
| `required`        | Campo obligatorio.                                         |
| `minLength`       | Longitud mínima permitida para un campo de texto.           |
| `maxLength`       | Longitud máxima permitida para un campo de texto.           |
| `pattern`         | Verificación de patrón utilizando una expresión regular.    |
| `email`           | Verifica si el valor se ajusta a un formato de correo.      |
| `min`             | Valor mínimo permitido para un campo numérico.              |
| `max`             | Valor máximo permitido para un campo numérico.              |
| `nullValidator`   | Valida que el valor sea nulo.                              |
| `compose`         | Combina varios validadores para su uso conjunto.            |
| `async`           | Permite validación asincrónica con Observable o Promise.    |


3. **¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?**
Los estados en los formularios reactivos de Angular representan la condición actual de cada campo, indicando si han sido modificados, tocados por el usuario, su validez y si están en su estado inicial. Estos estados, como "pristine" para campos sin cambios, "dirty" para campos modificados, "valid" para campos correctos, entre otros, son fundamentales para adaptar la experiencia del usuario, validar datos, ofrecer retroalimentación visual y tomar decisiones lógicas en base a la interacción del usuario con el formulario.