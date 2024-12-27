# Informe académico (entrega 2)

## Construcción
### Implementación de funciones principales
- El objetivo fue desarrollar y evaluar las funciones principales del sistema, para la gestión de solicitudes de adopción y visitas, así como la creación y visualización de perfiles de mascotas.

**Funcionalidades Desarrolladas**
**Publicar Mascota en Adopción (RF-U-04-05):**
- Implementación de la funcionalidad que permite a los usuarios crear, modificar y eliminar publicaciones de adopción de mascotas.
- Inclusión de campos de especificacion tales como: nombre, edad, tamaño, sexo, raza, foto, vacunas, estado de castración, entrenado en casa y amigable con los niños.
- Permitir la carga de imágenes de las mascotas y posterior validacion de la información ingresada para garantizar la integridad de esta.

**Listar Mascotas para Adoptar (RF-U-06-07):**
- Visualizacion de publicaciones de mascotas de manera atractiva y organizada, utilizando recursos visuales como imágenes y descripciones breves.
- Permitir la navegación por categorías de mascotas.
- Implementacion de filtros para las publicaciones en base a atributos como nombre, edad, tamaño, sexo y raza(a consideracion).

**Petición de Mascota (RF-U-09):**
- Implementación de funcionalidad para permitir a los usuarios realizar una petición de adopción de una mascota de manera sencilla y segura
- Implementación de un formulario de solicitud de adopción que incluya campos para el nombre del usuario, correo electrónico, mensaje y la mascota deseada.
- Proteccion de la privacidad de los datos de los usuarios durante el proceso de solicitud.

**Petición de Visita (RF-U-10):**
- Implementación de un formulario de solicitud de visita para conocer a las mascotas, incluyendo campos para el nombre del usuario, correo electrónico, mensaje, la mascota a visitar y la fecha y hora propuesta.
- Implementacion de gestión de calendario de visitas para evitar conflictos.

**Consideraciones que deben tener en cuenta:**
- No se deben implementar manejo de roles ni usuarios (no login ni registro).
- Los datos de las listas que necesiten como usuarios, tipo de animal, raza, ubicación etc. pueden estar precargados al iniciar el sistema.
- Puediendo simular el acceso al sistema con un usuario con rol de adoptante y con otro con rol de responsable de mascota.
- Tener en cuenta que uno de los requerimientos del obligatorio es que la interfaz de usuario debe ser web y responsive.

### Librerías externas
- En el desarrollo del Sistema de Gestión de Adopcion de Mascotas, se utilizaron varias librerías externas para facilitar y optimizar la implementación de diversas funcionalidades. A continuación se detallan las principales librerías utilizadas:

- **Bootstrap:** Es un popular framework CSS que facilita el diseño de sitios web responsivos y móviles, proporcionando estilos predefinidos y componentes como botones, formularios, modales, y mucho más. En este caso, en el proyecto se utiliza para dar estilo a la interfaz, incluyendo la barra de navegación, botones y modales. Proporciona una estructura de grid que facilita el diseño responsivo.

- **FullCalendar:** Es un plugin jQuery para crear calendarios interactivos en la web permitiendo visualizar y gestionar eventos en un calendario. En este caso, en el proyecto se utiliza en la sección de reserva de horas para gestionar y mostrar fechas disponibles.

- **jQuery UI:** Es una biblioteca que agrega widgets interactivos y efectos a la biblioteca jQuery incluyendo elementos como datepickers, dialog boxes, sliders, y más. En este caso, en el proyecto se utiliza para el datepicker en el formulario de reserva de visitas, facilitando la selección de fechas de una manera visual y amigable.

- **Google Fonts:** Proporciona una manera fácil de agregar fuentes tipográficas personalizadas a los sitios web, mejorando la estética y la legibilidad del texto en la página

- **jQuery:** Es una biblioteca JavaScript que simplifica la manipulación del DOM, el manejo de eventos, las animaciones, y las solicitudes AJAX. En este caso, en el proyecto facilita las interacciones del usuario con el formulario de adopción y las tarjetas de las mascotas. Usado en combinación con jQuery UI y FullCalendar para funcionalidades adicionales.

- **Popper.js:** Es una biblioteca para la gestión de tooltips y pop-ups posicionados de manera correcta. En este caso, en el proyecto se utiliza en conjunto con Bootstrap para la funcionalidad de los tooltips y dropdowns.

## Interfaz de usuario
### Buenas prácticas
- Se aplicaron varias buenas practicas a lo largo del proyecto, desde estandares de codificacion de google para html y javascript, hasta los estandares de accesibilidad WCAG. Entre otras menciones el análisis estático de código ESLint para la deteccion y correcion de errores, aplicacion de principios del paradigma programacion orientada a objetos y por ultimo la aplicacion de contenido responsive. En otro orden de cosas, la aplicacion de las "Heurísticas de Nielsen":

1. **Visibilidad del Estado del Sistema:** El sistema debe mantener informados a los usuarios sobre lo que está ocurriendo, proporcionando retroalimentación adecuada y en un tiempo razonable. En este caso, en el proyecto el uso de alertas para informar a los usuarios cuando se han completado ciertas acciones, como la eliminación de una ficha de adopción. 

2. **Compatibilidad entre el Sistema y el Mundo Real:** El sistema debe hablar el lenguaje del usuario, con palabras, frases y conceptos familiares para el usuario, en lugar de términos orientados al sistema. Sigue las convenciones del mundo real, haciendo que la información aparezca en un orden natural y lógico. En este caso, en el proyecto se utilizan el uso de términos claros y conocidos: La interfaz utiliza términos claros y familiares para los usuarios, como "Nombre", "Correo Electrónico", "Edad", etc.

3. **Control y Libertad del Usuario:** Los usuarios suelen elegir funciones del sistema por error y necesitarán una "salida de emergencia" claramente marcada para salir del estado no deseado sin tener que pasar por un diálogo extendido. Soporte para deshacer y rehacer. En este caso, en el proyecto los usuarios pueden modificar o eliminar fichas de adopción fácilmente.

4. **Prevención de Errores:** Mejor que buenos mensajes de error es un diseño cuidadoso que previene que ocurra un problema en primer lugar. En este caso, en el proyecto se utiliza la validación de entradas en formularios para evitar errores antes de que el usuario pueda enviar información incorrecta.

5. **Ayudar a los Usuarios a Reconocer, Diagnosticar y Recuperarse de Errores:** Los mensajes de error deben expresarse en lenguaje claro (sin códigos), indicar precisamente el problema y sugerir una solución constructiva. En este caso, en el proyecto los mensajes de alerta proporcionan información clara sobre qué está mal y cómo solucionarlo.

- **Código Limpio y Documentado:** El programa en cuestión se rige por normas de codificación muy específicas y está bien justificado y comentado. Esto ayuda a su preservación y escalabilidad, de modo que otros programadores puedan entenderse y colaborar con el programa de manera eficaz.

### Usabilidad
 - **Validación de Formularios:** Garantiza que los usuarios ingresen datos correctos y completos proporcionando retroalimentación inmediata sobre errores, lo que mejora la experiencia del usuario.

 - **Interactividad con Retroalimentación Inmediata:** Las acciones como eliminar o modificar elementos proporcionan retroalimentación instantánea al usuario, mejorando la interactividad y la experiencia general.

 - **Diseño Responsivo:** Asegura que la interfaz se vea bien y sea funcional en diferentes dispositivos y tamaños de pantalla.

### Accesibilidad
- **Uso de Etiquetas y Atributos ARIA:** Mejora la accesibilidad para usuarios con discapacidades, permitiendo que los lectores de pantalla interpreten correctamente el contenido.

- **Uso de Elementos HTML Semánticos:** Facilita la navegación y comprensión del contenido para todos los usuarios, incluidos aquellos que usan tecnologías asistivas.

- **Contraste Adecuado de Colores:** Asegura que el texto sea legible para usuarios con discapacidades visuales, como daltonismo.

Para la correcta aplicacion de los estandares de accesibilidad se utilizo la herramienta WAVE, en donde se visualizan todos los errores de contraste, de codificacion, entre otros. Es importante recalcar que la herramienta sigue los estandares de accesibilidad WCAG.

![WCAG](https://github.com/IngSoft-FIS-2024-1/proyecto-n3aan-n3a-pintos/assets/163940063/566209dd-cef0-4c11-a3d1-c3a6033f9295)

## Codificación
### Configuración de entorno de desarrollo
**Instalación de herramientas necesarias:**
- VSCode : Editor de código fuente utilizado para el desarrollo del proyecto.
- Git : Sistema de control de versiones para gestionar el código fuente.
- Node.js : Entorno de ejecución de JavaScript utilizado para el desarrollo del backend.
- Bootstrap : Framework CSS utilizado para el diseño responsivo de la UI.
- Live Server: Lanzador de servidor local de desarrollo con función de recarga en vivo para páginas estáticas y dinámicas

**Configuracion del Entorno de Desarrollo:**
1. Instalar VSCode
2. Instalar Git
3. Loguearse en Git
4. Instalación de Node.js
5. Clonacion del Repositorio
6. Instalación de dependencias con npm
7. Configuración de esLint
8. Instalacion de Live Server

### Estándares de codificación
**Estándares de ESLint:** Es una herramienta de linting para JavaScript que ayuda a identificar y reportar patrones problemáticos en el código; en este caso en los archivo ".eslintrc.cjs" y "package.json" muestran que el proyecto utiliza ESLint con una configuración basada en las reglas de estilo de Google y algunos plugins adicionales.
### Buenas prácticas de OOP
**SEPARACION DE LOGICA E INTERFAZ:**
**Definición de Clases:**
- Las clases se utilizan para definir entidades con propiedades y métodos, encapsulando datos y comportamiento relacionados.

**Encapsulamiento:**
- Los datos están encapsulados dentro de las clases, y el acceso a ellos se proporciona mediante métodos públicos.

**Uso de Constructores:**
- Se utilizan constructores para inicializar objetos con valores específicos cuando se crean instancias de la clase.

**Métodos de Acceso (Getters y Setters):**
- Los métodos getter y setter se utilizan para proporcionar acceso controlado a las propiedades de la clase.

### Análisis estático de código
- Para el analisis estatico de codigo, se Utilizo ESLint, en este caso, estrictamente para la verificación de código estático, detectando problemas potenciales y asegurando el cumplimiento de las mejores prácticas de codificación a lo largo de todo el proyecto.

![ANALISIS DE CODIGO](https://github.com/IngSoft-FIS-2024-1/proyecto-n3aan-n3a-pintos/assets/163940063/28267789-e66f-4ea5-b93a-ed74d6928d23)

## Test unitario
### Buenas prácticas
- Una buena practica es la cobertura de pruebas, en donde se asegura en cumplir con todas las funcionalidades principales del sistema, considerando que estas, esten adecuadamente probadas, siempre manteniendo un alto nivel de cobertura(100%) para garantizar la calidad del software; para esto se debieron aplicar pruebas unitarias cubriendo todas las funcionalidades.

### Informe de cobertura
Para la realizacion de pruebas unitarias se utilizo el framework "Jest" como base de pruebas. Jest es útil para probar cualquier aplicación  con JavaScript, incluyendo  un corredor de pruebas, un aserción de pruebas, y una herramienta de cobertura de código puediendo generar informes de cobertura.

**Análisis del Informe de Cobertura**
El informe de cobertura de Jest se visualiza en formato tabla en terminal, o generando un archivo para su posterior analisis. En este caso se visualiza un ejemplo del informe de cobertura generado con algunas explicaciones:

- **Cobertura de Líneas:** Indica el porcentaje de líneas de código que han sido ejecutadas durante las pruebas.
- **Cobertura de Funciones:** Muestra qué porcentaje de las funciones han sido llamadas durante las pruebas.
- **Cobertura de Ramas:** Indica el porcentaje de las ramas de control (if, switch, etc.) que han sido ejecutadas.
- **Cobertura de Archivos:** Proporciona un desglose por archivo del porcentaje de cobertura.

![Pruebas Unitarias](https://github.com/IngSoft-FIS-2024-1/proyecto-n3aan-n3a-pintos/assets/163940063/696d4a91-b298-42d0-bcf2-b24c32818de5)

## Reflexión
### Trabajo individual
- Cuando decidi arrancar con el desarrollo del proyecto, comence con la parte que mas me resultaba interesante, el frontend. Y considerando que para mi, el desarrollo de una pagina web independientemnte del negocio o la tematica, la parte visual es muy importante ya que ayuda que sea agradable para el cliente o el usuario y facilita la utilizacion de la misma; le aplique muchas horas mas dedicadas que al backend o a las pruebas unitarias, tanto asi que con mucho gusto y disfrute pasaba mas de 12 horas diarias delante de la computadora para realizar una intefaz intuitiva, responsive y estetica, tan asi que maneje dos posibilidades: dividr funcionalides en paginas distintas o agrupar una todas las funcionalidades en una sola pagina, dividiendo por secciones y utilizando una barra de navegacion para el facil acceso a estas. Luego de haber probado ambas opciones, opte por la segunda opcion. Habiendo terminado el diseño, se realizo un analisis con la herramienta WAVE para asegurar un estandar de accesibilidad y cualquier persona independientemente si contiene discapacidades o no, pueda visualizar correctamente la pagina. Limitandome en la eleccion y utilizacion de una paleta de colores pero bueno, es lo que hay, habia que seguir el estandar. En otro orden de cosas, a la hora de aplicar las funcionalidades me encontre con la dificultad de que la "Peticion de Visita" y la "Peticion de Mascota" eran muy parecidas y no sabia como exactamente incorporarlas en la pagina sin que se genere una confusion de cual es cual o cual hace que, por ende para solucionar este problema se me ocurrio la idea de meter esas funcionalidades en formularios que aparezcan al disparar determinados botones. Una consideracion importante que tuve en cuenta que a la hora de aplicar los cambios para que cumpla con los estandares de accesibilidad WCAG, pude solucionar la gran mayoria menos unos errores en los labels que a pesar de intenrarlo varias veces, no pude lograr que se solucionaran. Y para finalizar se realizo la logica del proyecto, el backend y las pruebas unitarias sin inconvenientes mas alla de algunas configuraciones necesarias para abarcar todo el proyecto y solucionar errores con esLint.

### Técnicas aplicadas y aprendizajes
- En base  a las tecnicas aplicadas y aprendizajes, se realizo toda una gestion de versiones con git, mas especificamente un flujo de tranajo con ramas, siendo que actualmente el proyecto entero se encuentra en main. En otro orden de cosas como tecnica en el diseño de interfaz se realizaron bocetos que ayudaron a mas o menos tener alguna idea de como podria ser la version final. 
- Asi mismo, se realizaron validaciones en formularios para asegurar que los datos ingresados por el usuario sean correctos y completos antes de ser procesados; se integraron varias librerías y frameworks externos para facilitar el desarrollo y mejorar la experiencia del usuario; Uso de funciones y clases para encapsular y modularizar el código, facilitando su mantenimiento y reutilización.; Implementación de pruebas unitarias utilizando Jest para asegurar que las diferentes partes del código funcionen correctamente, entre otras tecnicas y aprendizajes aplicadas a lo largo del proyecto correctamente y sirvio de mucho a la hora de aprender.

En resumen, en el proyecto se aplicaron una distintiva cantidad de técnicas y se logro adquirir conocimiento y experiencia en distintas áreas del desarrollo de software, la gestión de proyectos y el diseño de interfaces. Esta experiencia mejoró mis habilidades técnicas y tambien la manera de gestionar un proyecto de manera eficiente con respecto a tiempos.




