# Informe de testing 
Proyecto asignado: [https://github.com/IngSoft-FIS-2024-1/proyecto-n3aan-n3a-vergara-falcon-gonzalez]

## Test de sistema
### Diseño de casos de prueba

Para la realizacion de los casos de prueba se tomaron en cuenta dos factores importantes: funcionalidades presentadas en el alcance del proyecto y los principios de testing. Estos principios son focalizarse en identificar defectos en el sistema, eligiendo realizar casos de prueba que tengan un mayor impacto en el sistema y siempre comenzando en etapas tempranas de desarrollo para enfocarse en modulos mas criticos de este. Una consideracion importante que hay que tener es una frase que dice "La ausencia de errores no implica que no existan". En otro orden de cosas, en torno a la ejecucion de los casos de prueba, es necesario que se sigan determinados pasos como la preparacion en donde se asegura que el entorno de pruebas este listo; se realicen las pruebas diseñadas que posteriormente los resultados se documentan y se comparan con los resultados esperados, en cualquier caso si se determinan defectos, se deben de reportar.

| ID | TITULO | DESCRIPCIÓN| PRECONDICIONES | PASOS A SEGUIR | RESULTADOS ESPERADOS |
| - | - | - | - | - | - |
| **CP-01** | Visualización de artículos | Verificar que los artículos se muestren correctamente |El usuario ingreso a la mesa y tiene artículos en su mesa |1.Abrir la aplicación 2.Ingresar con nombre a la mesa 3.Verificar la lista de artículos | Los artículos deben mostrarse con nombre, cantidad, precio unitario y precio total. El precio total debe mostrarse de manera destacada con tamaño de fuente grande y legible|

| ID | TITULO | DESCRIPCIÓN| PRECONDICIONES | PASOS A SEGUIR | RESULTADOS ESPERADOS |
| - | - | - | - | - | - |
| **CP-02** | Selección de artículos | Verificar que los artículos se muestren correctamente |El usuario tiene artículos en su mesa |1.Abrir la aplicación 2.Navegar a la vista de la mesa 3.Seleccionar artículos usando las casillas de verificación o botones | Los artículos deben poder seleccionarse individualmente o en grupo. Los artículos seleccionados deben mostrarse correctamente|

| ID | TITULO | DESCRIPCIÓN| PRECONDICIONES | PASOS A SEGUIR | RESULTADOS ESPERADOS |
| - | - | - | - | - | - |
| **CP-03** | Multi-pago de artículos | Verificar que el usuario puede pagar una parte de un artículo seleccionado |El usuario ha seleccionado un artículo para pagar parcialmente|1.Seleccionar un artículo 2.Especificar la cantidad a pagar 3.Confirmar el pago | El sistema debe actualizar el total a pagar para el usuario. El total debe incluir IVA y otros impuestos. El total debe mostrarse con tamaño de fuente grande y legible|

| ID | TITULO | DESCRIPCIÓN| PRECONDICIONES | PASOS A SEGUIR | RESULTADOS ESPERADOS |
| - | - | - | - | - | - |
| **CP-04** | Visualización de selectores de artículo | Verificar quiénes han seleccionado artículos para pagar |El usuario ha seleccionado un artículo para pagar |1.Seleccionar un artículo 2.Ver la lista de usuarios que han seleccionado el artículo | Debe mostrarse una lista con los nombres de los usuarios y las cantidades que desean pagar. Los usuarios deben identificarse con colores o íconos distintivos |

| ID | TITULO | DESCRIPCIÓN| PRECONDICIONES | PASOS A SEGUIR | RESULTADOS ESPERADOS |
| - | - | - | - | - | - |
| **CP-05** | Diseño responsive | Verificar el diseño responsive de la aplicación |El usuario accede a la aplicación desde diferentes dispositivos |1.Abrir la aplicación en dispositivos de diferentes tamaños 2.Navegar a la vista de la mesa 3.Verificar la disposición y legibilidad de los elementos| La UI debe adaptarse a diferentes tamaños de pantalla. Todos los elementos deben ser accesibles y legibles |

### Ejecución de casos de prueba

| ID-DEFECTOS | FECHA | TESTER | ESTADO | RESULTADO OBTENIDO | DATOS DE PRUEBA |
| - | - | - | - | - | - |
| **ID-D1** | 23/06/2024 | Nicolas | APROBADO | Se ingresa y se visualiza en la mesa los productos y se ve el precio total correctamente | Nombre: Juan |

| ID-DEFECTOS | FECHA | TESTER | ESTADO | RESULTADO OBTENIDO | DATOS DE PRUEBA |
| - | - | - | - | - | - |
| **ID-D2** | 23/06/2024 | Nicolas | APROBADO | Se visualizan correctamente seleccionados todos los productos | - |

| ID-DEFECTOS | FECHA | TESTER | ESTADO | RESULTADO OBTENIDO | DATOS DE PRUEBA |
| - | - | - | - | - | - |
| **ID-D3** | 23/06/2024 | Nicolas | APROBADO | Se comprueba correctamente que se pueda pagar parcialmente los productos | 600 |

| ID-DEFECTOS | FECHA | TESTER | ESTADO | RESULTADO OBTENIDO | DATOS DE PRUEBA |
| - | - | - | - | - | - |
| **ID-D4** | 23/06/2024 | Nicolas | APROBADO | Se visualizan los dos usuarios seleccionando un producto | Usuario1: Juan - Usuario2: Pedro |

### Sesiones de pruebas exploratorias

| ID-DEFECTOS | FECHA | TESTER | ESTADO | RESULTADO OBTENIDO | DATOS DE PRUEBA |
| - | - | - | - | - | - |
| **ID-D5** | 23/06/2024 | Nicolas | RECHAZADO | No se visualiza correctamente la informacion de los productos cuando el ancho de la pantalla es de 320p | - |

![Bug Responsive](https://github.com/IngSoft-FIS-2024-1/proyecto-n3aan-n3a-pintos/assets/163940063/b579aa57-c5d8-43e1-ba8c-72a0f0a6413a)

| ID-DEFECTOS | FECHA | TESTER | ESTADO | RESULTADO OBTENIDO | DATOS DE PRUEBA |
| - | - | - | - | - | - |
| **SPE-01** | 23/06/2024 | Nicolas | RECHAZADO | Cuando se selecciona cuanto se quiere pagar, permite el ingreso de caracteres como "," y "-" | 78-9,-0 |

![Bug Ingreso de Caracteres](https://github.com/IngSoft-FIS-2024-1/proyecto-n3aan-n3a-pintos/assets/163940063/28d875a7-1211-4884-abd1-b7fd47fba934)

## Reporte de issues
Durante las pruebas exploratorias, se identifico dos defectos en el sistema relacionado con la responsividad de la pagina y el igreso de datos, dado que cuando una pantalla es de 320p de ancho, no se permite visualizar informacion importante del producto; ademas permite el ingreso de caracteres que no deberian de permitir. En otro orden de cosas, ademas de esto se encontro una oportunidad de mejora en donde el ingreso a la pagina con nombre, permite el ingreso numerico; y dado que es un sistema en donde se maneja un sistema de negocio incluyendo el dinero de por medio, es importante reconocer quien es quien con claridad. A continuación se presenta un resumen del defecto y la oportunidad de mejoras encontrados:

| DEFECTO-ID | PRIORIDAD | SEVERIDAD | DESCRIPCION | ENTORNO |
| - | - | - | - | - |
| **ID-D5** | Alta | Alta | El sistema no permite ver la informaicion completamente de los productos. | Microsoft Edge|

| DEFECTO-ID | PRIORIDAD | SEVERIDAD | DESCRIPCION | ENTORNO |
| - | - | - | - | - |
| **SPE-01** | Media | Alta | Si se selecciona un producto y se visualiza el panel de monto de pago, se logra seleccionar caracteres especiales como "," y "-". | Microsoft Edge|

**OPORTUNIDAD DE MEJORA:** A pesar de que no influye en el uso del sistema directamente, seria bueno que el campo de ingreso "nombre" este limitado a ingreso unicamente de tipo string, ya que actualmente permite ingresar tanto numeros como caracteres especiales.

### Buenas prácticas
A la hora de aplicar buenas practicas se pueden realizar varias:
- El equipo de testing debe de brindar la información necesaria para que el equipo de desarrollo pueda localizar de manera sencilla el issue y repararlo
- Se debe de priorizar los issues encontrados, para esto se pueden clasificar dependiendo de si es considerado crítico o bloqueante para el usuario, si tiene prioridad media o baja, si tiene oportunidad de mejora, pero no afecta al usuario, entre otros.
- Se debe asignar a algún responsable el issue y categorizarlos
- Se debe de seguir algún tipo de template a la hora de reportar issues

### Clasificación
De los issues creados se realizaron clasificaciones:

Prioridad Alta: Bug Responsive

Prioridad Media: Ingreso de caracteres especiales

Prioridad Baja: Oportunidad de Mejora

En estos casos se utilizaron los labels "bug" para los casos donde la página no debería tener ese issuey el label "enhancement" para una posible mejora para agregar en un futuro.

## Informe de calidad del sistema
### Resumen de issues
Se encontraron 2 bugs y una oportunidad de mejora, sin embargo a pesar de eso, el sistema cumple con todas las funciones correctamente y no se encuentran inconvenientes a la hora de utilizarse mas alla de los detalles encontrados

### Evaluación global de calidad
Como evaluacion global del proyecto se detecta un muy buen desemepeño a lo largo y ancho de este, se detecta una interfaz simple aunque util, cumpliendo con todas las necesidades basicas solicitadas; sin embargo a titulo personal me hubiera gustado saber que estaria haciendo el sistema cuando se selecciona el boton "pagar", aunque hay que recordar que eso no estaba en los requerimientos iniciales.

## Reflexión
### Trabajo individual
A la hora de la realización de las pruebas, se emplearon diversas técnicas y herramientas que permitieron una evaluación exhaustiva del sistema, mas alla que en el proyecto fue dificil encontrar errores o bugs, hablando muy bien de los creadores; La experiencia obtenida a lo largo de este proceso es impresindible y hay que destacar lo importante que es una estrategia de pruebas planificada para una correcta realizacion de esta.

Se utilizo el testing funcional y exploratorio para encontrar defectos o evaluar funcionalidades principales en el sistema, identificando areas problematicas en diferentes escenarios posibles

### Técnicas aplicadas y aprendizajes
Se aplico validacion de datos de entrada para identificar posibles defectos con exito en el ingreso de datos invalidos; posteriormente se prepararon escenarios para testear el desempeño cuando se enfrenta a distintas situaciones con la esperanza de encontrar defectos. En otro orden de cosas, el diseño de casos de prueba se aplicaron correctamente para determinar una prioridad de cual realizar para maximizar el alcance en el proyecto, logrando realizar un reporte de incidentes de manera objetiva y constructiva, con su determinada priorizacion.

