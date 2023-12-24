1. **¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?**

Los formularios dirigidos por template se basan en HTML para crear y manejar formularios, resultando más adecuados para situaciones donde no se requiere sino una lógica más básica. Son más fáciles para principiantes, ya que la estructura se mantiene en la plantilla HTML, pero pueden volverse complejos y menos eficientes para formularios grandes o con lógica sofisticada, dificultando la reutilización y modularidad.

Por otro lado, los formularios reactivos se construyen mediante código TypeScript, ofreciendo mayor flexibilidad y control. Son ideales para situaciones complejas, permiten manejar dependencias entre campos, validaciones avanzadas y facilitan el testing. Aunque su curva de aprendizaje es mayor, son más poderosos y eficientes para aplicaciones con formularios dinámicos y avanzados.


2. **¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?**

ngModel es una directiva de Angular que permite la vinculación bidireccional entre los elementos de formulario HTML y el modelo de datos en TypeScript, actualizando automáticamente los valores entre ambos. Por otro lado, ngModelChange es una directiva utilizada para capturar eventos de cambio específicos en el control asociado a ngModel, permitiéndote ejecutar funciones adicionales cuando se modifica el valor del control, lo que resulta útil para realizar acciones complementarias o validaciones específicas en respuesta a esos cambios.


3. **¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?**

En los formularios dirigidos por templates en Angular, los estados son valores que definen la condición actual de un control en el formulario. Estos estados son proporcionados por Angular y ofrecen información sobre la interacción del usuario y la validez del control.

Los principales estados en los formularios dirigidos por templates son:

* **Untouched** (Intocado): El usuario no ha interactuado con el control.
* **Touched** (Tocado): El usuario ha interactuado con el control.
* **Pristine** (Puro): El valor original del control no ha sido modificado por el usuario.
* **Dirty** (Sucio): El usuario ha modificado el valor original del control.
* **Valid** (Válido): El valor del control cumple con todas las validaciones definidas.
* **Invalid** (Inválido): El valor del control no cumple con alguna validación definida.


4. **¿Qué ventajas aportan los FormGroup en la composición de formularios?**

Los FormGroup en Angular ofrecen una forma organizada y estructurada de manejar formularios al agrupar controles relacionados. Esto simplifica la comprensión y el mantenimiento de formularios complejos al permitir la organización jerárquica de controles. Además, su capacidad para aplicar validaciones a nivel de grupo simplifica la gestión de reglas de validación para conjuntos de controles, lo que facilita mantener la coherencia en la validación de datos y simplifica el acceso y procesamiento de los valores del formulario de manera unificada, mejorando así la experiencia de desarrollo en aplicaciones con formularios extensos y estructurados.