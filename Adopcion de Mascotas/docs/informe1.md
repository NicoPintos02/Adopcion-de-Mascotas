# Informe académico (entrega 1)

## Repositorio Git
Git es el sistema de control de versiones distribuido más utilizado. Es un software open source rápido y simple
desarrollado por Linus Torvalds en 2005, pensado en la eficiencia y la confiabilidad del mantenimiento de
versiones de aplicaciones. Permite manejar proyectos muy grandes y distribuidos.
Github es un servicio en la nube que nos permite tener nuestros repositorios de Git centralizados para poder
colaborar con otras personas en el desarrollo de un proyecto.
### Repositorio local y remoto
- Repositorio local: Es una copia del proyecto que reside en tu computadora personal. Es el espacio de trabajo donde puedes realizar cambios en el código, crear nuevas características, corregir errores y gestionar tus confirmaciones de cambios (commits) de manera privada. Aquí es donde utilizas comandos de Git para añadir archivos (git add), confirmar cambios (git commit), y gestionar ramas (git branch), todo esto sin necesidad de una conexión a internet. El repositorio local te permite trabajar de forma independiente y autónoma, manteniendo un historial de tus cambios hasta que estés listo para compartirlos con otros colaboradores en el repositorio remoto.

- Repositorios Remotos: Es una versión del proyecto alojada en un servidor accesible a través de internet. Funciona como el punto central de colaboración para todos los participantes del proyecto. En este repositorio, los colaboradores pueden subir (push) sus cambios locales, descargar (pull) las actualizaciones de otros, y trabajar juntos en el código de manera sincronizada. Los repositorios remotos son esenciales para el trabajo en equipo, ya que permiten compartir progresos, revisar el código de otros y fusionar cambios de diferentes ramas.
### Aplicación de Git
Se utiliza Git para controlar las versiones del proyecto. Se crea un repositorio remoto en GitHub, posteriormente a esto, cada integrante del equipo debe de tener una copia local en su dispositivo.
A lo largo del proyecto se utilizaran distintos comandos de git
-Comandos Utilizados: 
1. git init
2. git add
3. git status
4. git commit
5. git log
6. git branch
7. git merge
8. git remote
9. git push
10. git clone
11. git pull

##  Versionado
### Commit
Un "commit" es la acción de guardar los cambios realizados en tu repositorio local. Usa el mensaje de commit
para aportar contexto y explicar el por qué detrás de un cambio.
Cada commit del proyecto es un reflejo de nuestro trabajo. Nos organizamos de forma en que estos se encuentren
balanceados, a grandes rasgos, por cada integrante del equipo, mostrando que hubo un trabajo parejo en la
realización de este proyecto.

### Mensaje del Commit
Los mensajes de commit son una herramienta muy útil para el desarrollo de software, ya que nos permiten
encontrar cambios concretos en la historia de nuestro repositorio.
En nuestro equipo consideramos importantes los mensajes de commits por motivos de organización y fácil
identificación de los cambios realizados a lo largo del proyecto.

### Buenas prácticas de versionado
A través de la búsqueda de estándares para realizar mejor los mensajes de commits, se consideran las siguientes
reglas de estilo:
* Los mensajes de commit tienes dos partes principales: un asunto y un mensaje. Si el contenido del commit se
puede explicar en el asunto, no es necesario incluir un mensaje.

* La línea de asunto no debería extenderse más de 50 caracteres, y el cuerpo del mensaje debería tener una
extensión máxima por línea de 72 caracteres. Esto ayuda a su visualización en distintas plataformas y
dispositivos.

* La línea de asunto debe comenzar con letra mayúscula y terminar sin punto.

* Como equipo nos propusimos trabajar en ramas específicas según distintas tareas. Nos proponemos que el funcionamiento normal del proyecto sea así, dado que dividir el trabajo en pequeñas historias de usuario nos posibilita tener una branch por cada una de ellas. Es posible que un compañero requiera la colaboración del resto del equipo al encontrar una dificultad mientras trabaja en una historia de usuario. En este caso no creemos necesario ni conveniente agregar nuevas ramas que refieran a la misma historia. Lo ideal sería poder aportar ideas que el compañero pueda incorporar a su branch y así evitar posibles enredos en el manejo de las ramas a nivel remoto y además todo el equipo aprende al trabajar en el mismo problema. 

* Para mergear una rama en main, el dueño de dicha rama deberá solicitar al resto del equipo que revisen los cambios ahí introducidos. Una vez que estos cambios hayan sido aprobados, se debe mergear la rama mediante línea de comandos.

### Evolución del proyecto
El proyecto comienza con la rama principal main, de donde deriban las demas ramas creadas a partir de esta, para la realización de cambios, agregar o quitar información, etc. Para la documentación del informe se realizarón las ramas con el nombre de cada área, estás son: "Elicitación", "Versionado", "Repositorio", "Especificación", "Validación y Verificación", "Reflexión" y "Anexos". Para luego al terminar se unificarán todos los cambios realizados en main.

## Elicitación
Es el proceso de identificar las necesidades y limitaciones de las diferentes partes interesadas de un sistema de software y se utiliza para descubrir requisitos comerciales, de usuario, funcionales y no funcionales, y otros tipos de información.
    
- Letra del Problema:
"Adopción de mascotas: permitir subir fichas de mascotas para adopción, 
permitir a los adoptantes buscar por características, realizar una solicitud de 
visita."

- Grupos de Interes
Todas las personas interesadas en adoptar una mascota para regalar a otra o para sí mismo. Además de estas las protectoras de animales interesadas en una mayor visualización de sus animales disponibles para adopción.

### Actividades de investigación
#### Técnicas de elicitación
A través de un análisis específico de las diferentes maneras de elicitar, descubrimos cuáles se adaptan mejor a las necesidades del proyecto, que se detallan a continuación:
1. User Personas
2. Análisis GUI - Ingeniería inversa - Descomposición funcional
3. Tormenta de ideas
4. Entrevistas
5. Cuestionarios

#### User Personas
Se basa en producir de manera ficticia los perfiles de los usuarios, de modo que en todo momento se tenga en cuenta al posible comprador del producto en cuestión.
En el fin de examinar cuáles eran los posibles usuarios del sistema, se tiene en cuenta que los siguientes rasgos fundamentales son necesarios para representar la forma en que una persona se comportaría si estuviera interesada en el sistema.
* Nombre
* Edad
* Sexo
* Estado civil
* Hijos
* Ocupación
* Contexto
* Preferencias de búsqueda 
* Experiencia tecnológica

Se considera los siguientes atributos claves como pertinentes para representar los perfiles de una empresa: 
* Nombre
* Contexto

#### Análisis GUI - Ingeniería inversa - Descomposición funcional
Es el camino inversión al desarrollo de una tecnología. Se parte de la solución buscada y se recorre el camino inverso para comprender paso por paso cómo se puede llegar a dicha solución. Esto implica profundizar en el estudio de una tecnología para poder mejorarla. 
La idea es analizar sitios web de adopción de mascotas. Los sitios analizados son: 
* http://www.animalessinhogar.com.uy/
* https://www.laika.com.uy/adopciones
* https://www.apaelrefugio.org/
* https://unidosporlosanimales.com/

A través de las páginas anteriormente mencionadas, se logra identificar nuevos atributos de los perros (mascotas) que creemos oportunos para mostrar al usuario como “Bueno con los niños”. En otro orden de cosas, este estudio ayudó a reforzar las ideas sobre la importancia de los diferentes requisitos con el objetivo de dar un mayor enfoque a los más relevante para el usuario y reducir la complejidad del sistema. Así mismo, sirvió para comprender el funcionamiento de ciertos procesos, relacionados a la adopción, donación, entre otros, generando diferentes alternativas de secuencias para la obtención de estos.

#### Tormenta de ideas
La tormenta de ideas también conocido como lluvia de ideas, es una técnica para generar ideas de forma creativa en un ambiente grupal. En una sesión de lluvia de ideas, los participantes comparten libremente sus ideas sobre un tema específico sin censura ni críticas a medida que se generan.
Es una técnica grupal para generar ideas originales en un ambiente relajado. Es útil cuando se desea liberar la creatividad de los equipos y generar un número extenso de ideas.
Se considero que la tormenta de ideas es un excelente ejercicio para generar ideas originales, es por esto que, se decidió comenzar cada reunión grupal utilizando esta práctica de diez minutos, donde cada integrante puede liberar su creatividad permitiendo generar un número extenso de ideas. 

#### Entrevista
Consiste en un conjunto de preguntas especialmente diseñadas y pensadas para ser dirigidas al usuario, con el objetivo de averiguar qué necesitan para el sistema de software.
- Preguntas realizadas:
1. ¿Cuál es tu nombre?
2. ¿Qué edad tienes?
3. ¿A qué te dedicas?
4. ¿Qué medios has utilizado/recurrirías para la adopción?
5. ¿Te resulta sencillo utilizar tecnología?
6. ¿Qué utilidades te gustaría encontrar en la aplicación?
7. ¿Qué funciones consideras mas importantes a la hora de implementar?
8. ¿Cómo se realiza el proceso de adopción tradicionalmente?
9. ¿Cómo te imaginas que se haría digitalmente?
10. ¿Algo que quieras mencionar o agregar?

Nuestras entrevistas se encuentran en la carpeta /docs/Anexos: https://github.com/IngSoft-FIS-2024-1/proyecto-n3aan-n3a-collazo-coll-pintos/tree/main/docs/Anexos

#### Encuesta - Cuestionario
Consiste en un conjunto de preguntas especialmente diseñadas y pensadas para entrevistar a grandes grupos para comprender sus necesidades.
- Preguntas realizadas:
1. ¿Tuviste alguna experiencia con la adopción de animales?
2. ¿Elegirías contar con una aplicación que te facilite la adopción?
3. ¿Cómo te gustaría que se presentase? ¿Como aplicación web, móvil o de escritorio?

Partiendo de las preguntas mencionadas anteriormente se realiza una encuesta utilizando la red social Instagram, logrando tener una gran aceptación, por lo que se consiguió recabar mucha información útil para el proyecto. 
Basándose en los resultados de la práctica se identificó que, entre las personas encuestadas existe un balance de quienes tuvieron alguna experiencia con la adopción de animales y quienes no, y de las personas que cuentan con experiencia, el medio más recurrido para adoptar fue Facebook. A pesar de esto, la gran mayoría de los encuestados eligieron contar con una aplicación que les facilite el proceso de adopción, con una presentación web y móvil.

### Caracterización de usuarios
Luego de realizado el estudio de cuáles podrían ser los usuarios potenciales para el sistema, se logra identificar algunos perfiles de usuarios y los atributos personales que los caracterizan, que vuelve probable la utilización de AmigoFiel como medio de adopción / dar en adopción. A continuación, se muestran algunos ejemplos ficticios:
1.  Nombre: Alvaro Collazo
    Edad: 31 años
    Sexo: Masculino 
    Estado civil: Casado
    Hijos: No 
    Ocupación: Desarrollo de Software
    Contexto: Persona casada que necesita una mascota
    Preferencias de búsqueda: San Bernardo 
    Experiencia tecnológica: 90%

2.  Nombre: Lucia Coll
    Edad: 45 años
    Sexo: Femenino
    Estado civil: Casada
    Hijos: 2
    Ocupación: Soporte Técnico
    Contexto: Persona que busca incluir un nuevo integrante a la familia
    Preferencias de búsqueda: Labrador
    Experiencia tecnológica: 95%

3.  Nombre: Matías Pintos 
    Edad: 21
    Sexo: Masculino
    Estado civil: Soltero
    Hijos: 0
    Ocupación: Estudiante
    Contexto: Persona solitaria en busca de un compañero
    Preferencias de búsqueda: Caniche
    Experiencia tecnológica: 80%

4.  Nombre: Refugio canino 
    Contexto: Refugio que busca publicar sus perros en adopción

### Modelo conceptual del problema
![dPBVQi8m5CRl-nIvLCGNA4DqjJ31sRAEtOvZSfGpqiGbfoAClVlIFyD5nOlTb9partmdt_dcdi5nK-j4Ql1UF8ENba5y9K9C1QbKaE5klR7rrc4gAdPazjrMhk0Fa843oUZ8CqdmgLY7rKEFppe2WvYo2sKFagn9HHxL0Pa82MuFhaIt8pqQf-9eIINVoT1TYp8Onl_qrwk9](https://github.com/IngSoft-FIS-2024-1/proyecto-n3aan-n3a-collazo-coll-pintos/assets/163940063/f7c14ee7-3cf0-4120-9d93-c0a318680a84)

## Referencias a fuentes de información

- **Teórico FSI .pdf**
- **Libro Sommerville Software Ingeniería de Software**
- **Diapositvas del curso**

## Especificación
Los requerimientos de un sistema describen lo que debe hacer, incluidos sus servicios y limitaciones de operación. Descubrimos, analizamos, documentamos y verificamos estos servicios y restricciones a través del proceso de ingeniería de requerimientos.

Con el objetivo de que cumplan con las características deseables (completo, consistente, modificable y rastreable), decidimos utilizar buenas prácticas para detallar los requerimientos, tales como asignarles un atributo identificador y de prioridad, mantener un formato de redacción en común, marcar las palabras clave en negrita y darles una interpretación única.

### Requerimientos funcionales y no funcionales
#### Requerimientos de negocio

| ID | Prioridad | Requerimiento |
| - | - | - |
| **RF-N-01** | Alta | Permitir la adopción de mascotas |
| **RF-N-02** | Alta | Estimular el proceso de adopción de mascotas |
| **RF-N-03** | Alta | Alentar la tenencia responsabele |

#### Requerimientos de Usuario
| ID | Prioridad | Requerimiento |
| - | - | - |
| **RF-U-01** | Alta | El sistema debe poder crear, modificar y eliminar usuarios |
| **RF-U-02** | Alta | De los usuarios se necesita conocer nombre, dirección, teléfono, correo electrónico y contraseña |
| **RF-U-03** | Media| De los usuarios se quiere registrar además su calificación dada por otros usuarios dentro del sistema |
| **RF-U-04** | Alta | Los usuarios deben poder crear, modificar y eliminar publicaciones para la adopción de mascotas |
| **RF-U-05** | Alta | De los animales se quiere conocer, nombre, edad, tamaño, sexo, raza, si posee las vacunas al dia, si esta castrada, si fue entrenado en casa y es amigable con los niños |
| **RF-U-06** | Alta | El sistema debe poder mostrar las publicaciones para poder adoptar mascotas |
| **RF-U-07** | Media| Los usuarios deben poder filtrar las publicaciones para adoptar en base a los atributos de los animales |
| **RF-U-08** | Media| El sistema debe poder mostrar información básica de los usuarios propietarios de la publicaciones para la adopción, tal como su nombre y calificación |
| **RF-U-09**| Alta | Los usuarios deben poder realizar una petición de adopción |
| **RF-U-10**| Media| Los usuarios deben poder realizar una petición de visita |

#### Usabilidad
| ID | Prioridad | Requerimiento |
| - | - | - |
| **RNF-US-01** | Alta | El sistema debe ser fácil de operar |
| **RNF-US-02** | Media| El sistema debe soportar múltiples lenguajes y desarrollarse inicialmente en español |
| **RNF-US-03** | Alta | El sistema debe contar con un diseño “Responsive” |

#### Seguridad
| ID | Prioridad | Requerimiento |
| - | - | - |
| **RNF-S-01** | Alta | El sistema debe contar con inicio de sesión para los usuarios a través de su nombre de usuario o correo electrónico y contraseña |
| **RNF-S-02** | Alta | Los datos de los usuarios en el sistema deben estar encriptados |
| **RNF-S-03** | Alta | El sistema debe utilizar el protocolo HTTPS |

#### Rendimiento
| ID | Prioridad | Requerimiento |
| - | - | - |
| **RNF-R-01** | Alta | Toda funcionalidad del sistema debe responder al usuario en menos de 3 segundos|

#### Confiabilidad
| ID | Prioridad | Requerimiento |
| - | - | - |
| **RNF-C-01** | Alta | El sistema debe ser especificado teniendo en cuenta las normas para la tenencia responsable de animales y las buenas prácticas para la adopcion |

#### Escalabilidad
| ID | Prioridad | Requerimiento |
| - | - | - |
| **RNF-E-01** | Alta | El sistema debe contar con la posibilidad de escalar a la adopción de distintos animales |

#### Portabilidad
| ID | Prioridad | Requerimiento |
| - | - | - |
| **RNF-P-01** | Media | El sistema debe contar con una aplicación web |
| **RNF-P-02** | Media | El sistema debe contar con una aplicación móvil compatible con iOS 15 o superior y con Android 10 o superior |

#### Disponibilidad
| ID | Prioridad | Requerimiento |
| - | - | - |
| **RNF-D-01** | Alta | El sistema debe estar disponible en todo momento (durante las 24 horas del día, los 7 días de la semana y sin excepciones) |
| **RNF-D-02** | Alta | El tiempo necesario para iniciar o reiniciar el sistema debe ser menor a 4 minutos |

#### Mantenibilidad
| ID | Prioridad | Requerimiento |
| - | - | - |
| **RNF-M-01** | Alta | La aplicación web debe estar desarrollada con HTML, y JavaScript |
| **RNF-M-02** | Alta | El código del sistema debe seguir un estándar en común y encontrarse ordenado |

#### Testeabilidad
| ID | Prioridad | Requerimiento |
| - | - | - |
| **RNF-T-01** | Alta | El sistema debe ser probado por el mismo equipo de desarrollo |
| **RNF-T-02** | Alta | El sistema debe ser probado mediante el framework de test unitario: Jest |

### User stories
| **ID: US-01** ||
|-|-|
| **Título** | Registro de usuarios |
| **Narrativa** | Como persona interesada en adoptar una mascota, quiero poder registrarme en la plataforma con mi información personal para poder acceder a las funciones de búsqueda y solicitud de adopción de mascotas.|
| **Criterios de aceptación** | El formulario de registro debe incluir los siguientes campos: Id(int), Nombre(String), Edad(int), Estado Civil(String), Hijos(Int), Ocupacion(String), Contexto(String), Preferencia de busqueda(string), Experiencia tecnologica(int), caracteristicasDeseadas(List<String>)
. El usuario debe poder crear una contraseña segura |

| **ID: US-02** ||
|-|-|
| **Título** | Subir ficha de mascota para adopción |
| **Narrativa** | Como organización de rescate de animales, quiero poder subir fichas de mascotas para adopción en la plataforma con información detallada sobre cada animal para aumentar la visibilidad de las mascotas y encontrarles un hogar adecuado.|
| **Criterios de aceptación** | Se debe poder subir fotos de la mascota (aún no contamos con un tamaño máximo del archivo pero no debería ser muy superior a los 30kb, de todas maneras es posible que el sistema termine soportando archivos más pesados). La organización debe poder seleccionar la categoría de la mascota. La organización debe poder indicar si la mascota está esterilizada o castrada.|

| **ID: US-03** ||
|-|-|
| **Título** | Buscar mascotas para adopción |
| **Narrativa** | Como persona interesada en adoptar una mascota, quiero poder buscar mascotas para adopción en la plataforma utilizando diferentes filtros para encontrar la mascota que mejor se adapte a mis necesidades y estilo de vida.|
| **Criterios de aceptación** | La página de búsqueda debe incluir filtros para todas las características relevantes de las mascotas. El sistema debe mostrar los resultados de búsqueda de forma ordenada y paginada.|

| **ID: US-04** ||
|-|-|
| **Título** | Ver ficha de mascota |
| **Narrativa** | Como persona interesada en adoptar una mascota, quiero poder ver la ficha completa de una mascota para obtener información detallada sobre ella antes de decidir si estoy interesado en adoptarla.|
| **Criterios de aceptación** | La ficha de la mascota debe incluir toda la información relevante sobre ella. La ficha debe incluir la información de contacto de la organización responsable de la mascota.|

| **ID: US-05** ||
|-|-|
| **Título** | Solicitar visita para adoptar una mascota |
| **Narrativa** |Como persona interesada en adoptar una mascota, quiero poder solicitar una visita para conocer a la mascota y evaluar si es adecuada para mí antes de tomar la decisión final de adopción.|
| **Criterios de aceptación** | El formulario de solicitud de visita debe incluir campos para la información del usuario. El usuario debe poder indicar la fecha y hora en la que desea realizar la visita. La organización debe poder aceptar o rechazar la solicitud de visita.|

### Use cases
|**ID: CU-01**||
|-|-|
| **Descripción** | Subir ficha de mascota |
| **Actor** | Usuario o Empresa Registrada |
| **Precondiciones** | El usuario debe estar registrado en el sistema. La mascota debe estar bajo el cuidado del usuario. |
| **Curso Normal** ||
| 1.| El usuario accede al módulo de gestión de mascotas |
| 2.| El usuario selecciona la opción "Subir ficha de mascota". |
| 3.| El usuario ingresa la información de la mascota, incluyendo fotos |
| 4.| El usuario selecciona la categoría de la mascota (perro, gato, otro) |
| 5.| El usuario selecciona si la mascota está en adopción o no. |
| 6.| El usuario guarda la ficha de la mascota. |
| 7.| El sistema muestra la ficha de la mascota para que los eventuales adoptantes puedan verla. |
|**Curso Alternativo**||
| 1.1| Si el usuario no está registrado en el sistema, el sistema le muestra un mensaje indicando que debe registrarse primero. |
| 3.1|Si la mascota no está bajo el cuidado del albergue de animales, el sistema le muestra un mensaje indicando que solo puede subir fichas de mascotas que estén bajo su cuidado. |

|**ID: CU-02**||
|-|-|
| **Descripción** | Buscar mascota |
| **Actor** | Adoptante |
| **Precondiciones** | El usuario debe estar registrado en el sistema. La mascota debe estar bajo el cuidado del usuario. |
| **Curso Normal** |
| 1.| El usuario accede al sitio web del sistema. |
| 2.| El usuario selecciona la opción "Buscar mascota" |
| 3.| El usuario puede filtrar la búsqueda por categoría (perro, gato, otro) |
| 4.| El sistema muestra las fichas de las mascotas que coinciden con los criterios de búsqueda previamente ingresados. |
| 5.| El usuario puede seleccionar una ficha de mascota para ver más detalles. |
|**Curso Alternativo**||
| 1.1| Si el usuario no está registrado en el sistema, el sistema le muestra un mensaje indicando que debe registrarse primero. |
| 3.1| Si no hay mascotas que coincidan con los criterios de búsqueda del usuario, el sistema le muestra un mensaje indicando que no hay resultados para su búsqueda. |

|**ID: CU-03**||
|-|-|
| **Descripción** | Solicitar visita |
| **Actor** | Adoptante |
| **Precondiciones** | El usuario debe estar registrado en el sistema. La mascota debe estar en adopción.|
| **Curso Normal** |
| 1.| El usuario accede a la ficha de la mascota que le interesa. |
| 2.| El usuario selecciona la opción "Solicitar visita". |
| 3.| El usuario completa el formulario de solicitud de visita. |
| 4.| El usuario envía la solicitud de visita. |
| 5.| El sistema envía una solicitud de visita al usuario que había subido la ficha para que la revise. |
| 6.| Si la solicitud es aprobada, el usuario que subió la ficha se contacta con el adoptante para confirmar la fecha y hora de la visita. |
|**Curso Alternativo**||
| 1.1| Si el usuario no está registrado en el sistema, el sistema le muestra un mensaje indicando que debe registrarse primero. |
| 2.1| Si la mascota no está en adopción, el sistema le muestra un mensaje indicando que la mascota no está disponible para adopción. |
| 6.1| Si el albergue de animales no aprueba la solicitud de visita, el sistema le muestra un mensaje al adoptante indicando los motivos del rechazo. |

|**ID: CU-04**||
|-|-|
| **Descripción** | Gestionar solicitudes de visita |
| **Actor** | Usuarios o Empresas |
| **Precondiciones** | El usuario debe estar registrado en el sistema. La mascota debe estar disponinble para la adopción.|
| **Curso Normal** |
| 1.| El usuario accede al módulo de gestión de solicitudes de visita. |
| 2.| El usuario visualiza la lista de solicitudes de visita pendientes. |
| 3.| El usuario puede seleccionar una solicitud de visita para verla en detalle. |
| 4.| El usuario puede aprobar o rechazar la solicitud de visita. |
| 5.| Si el usuario aprueba la solicitud de visita, el sistema le avisa al adoptante para confirmar la fecha y hora de la visita. |
|**Curso Alternativo**||
| 1.1| Si el usuario no tiene solicitudes de visita pendientes, el sistema le muestra un mensaje indicando que no hay solicitudes nuevas. |
| 5.1| Si el usuario rechaza la solicitud de visita, el sistema le envía un correo electrónico al adoptante para explicarle los motivos del rechazo. |

|**ID: CU-05**||
|-|-|
| **Descripción** | Registrarse como usuario adoptante o empresa |
| **Actor** | Usuarios |
| **Precondiciones** | El usuario no debe estar registrado en el sistema.|
| **Curso Normal** |
| 1.| El usuario accede al sitio web del sistema. |
| 2.| El usuario selecciona la opción "Registrarse". |
| 3.| El usuario completa el formulario de registro. |
| 4.| El usuario acepta los términos y condiciones del servicio. |
| 5.| El usuario hace clic en el botón "Registrarse". |
|**Curso Alternativo**||
| 3.1| Si el usuario ya está registrado en el sistema, el sistema le muestra un mensaje indicando que ya tiene una cuenta registrada. |

## Validación y verificación
### Verificación
El proceso de verificación se realiza para la seccion de especificación, mas especificamente sobre "Requerimientos Funcionales y No Funcionales", "Historias de Usuario", "Casos de Uso".

#### Requerimientos
En el caso de los requerimientos, para verificar que se realizaron correctamente, debian de cumplir con determinadas características, estos debían evitar la ambiguedad para tener una única interpretación independientemente del lector; que sea correcto, siendo que caiga dentro del espacio del producto; que sea completo reflejando las necesidades del usuario; que sea consistente y no se contradiga con otro requerimiento y por último, que estos sean verificables y factibles, todo esto se tomó en cuenta a la hora de realizar los requerimientos.

#### Casos de Uso
En otro orden de cosas, para verificar que los casos de uso estén correctamente hechos, se toma en cuenta que "describen QUE hace el sistema sin decir COMO lo hace", siendo importante separar las vistas, respondiendo las preguntas de Jacobson en su libro para un CU eficaz, las cuales cito:
- "¿Quién es el actor principal y los actores secundarios?"
- "¿Cuáles son los objetivos de los actores?"
- "¿Qué precondiciones deben existir antes de comenzar la historia?"
- "¿Qué tareas o funciones principales son realizadas por el actor?"
- "¿Qué información del sistema adquiere, produce o modifica el actor?"
- "¿Qué información desea obtener el actor del sistema?"
- "¿Quiere el actor ser informado sobre cambios inesperados?"

#### Historias de Usuario
Para finalizar, al momento de la creación de las historias de usuario, siempre se tuvo presente que una buena historia de usuario, es **independiente** evitando dependencias con otras historias ya que generan problemas; **negociables**; **valiosas**; **estimables** tomando en cuenta el tiempo que puede tomar pasar esa historia a codigo; **corta** y **testeable**, pudiendose probar todas para confirmar que esten terminadas la implementacion de estas.

### Validación
Al realizar la validación se tomaron en cuenta las personas no involucradas en el proyecto, tanto en las encuestas como en las entrevistas, mencionadas en el proceso de elicitación. En donde se mencionó el proyecto y los objetivos, obteniendo de estos información valiosa como necesidades más específicas o funciones que tendrían mas importancia a la hora de implementar o que si o si debería de estar, ya que se repetían. Todo con el fin de lograr un sistema que sea sencillo de usar, independientemente de la experiencia que se tenga con la tecnología y beneficioso tanto para un usuario como hasta cualquier organización que lo quiera utilizar. 

**Consideraciones**

Desde las organizaciones que se dedican a la adopción de animales se recibió mucha información de interés sobre cómo se realiza un proceso de adopción de mascotas y sugerencias que les gustaría tener de funciones para facilitar este dicho proceso, logrando una simplicidad y facilidad para esa gente.

En otro orden de cosas, de los usuarios encuestados que funcionarían con el rol de adoptantes, también se recibió información de interés sobre si han tenido experiencia en la adopción de mascotas y como les gustaría que se presente una solución de software de este tipo.

## Reflexión
### Trabajo individual

A continuación se detalla lo que realizó cada integrante del equipo. 

**Álvaro Collazo**:
1) Corrección según feedback en issue de especificación
2) Definir la política de versionado
3) Explicar al equipo sobre cómo usar git
4) Estudio de los grupos de interés

**Lucía Coll**:
1) Realización y recolección de respuestas a entrevistados
2) Bocetos
3) Documentación Versionado
    - Evolución del Proyecto
4) Documentación Elicitación
    - Tormenta de ideas    
5) Corrección de ortografía

**Nicolás Pintos**:
1) Documentación Repositorio GIT
    - Creación de repositorio
    - Comandos ejecutados
2) Documentación Versionado
3) Documentación Elicitación
    - Creación de preguntas encuesta
    - Recolección de respuestas a personas encuestadas
    - Creación de preguntas entrevista
    - Caracterización de usuarios
    - Creación del modelo conceptual
4) Documentación Especificación
    - Creación de requerimientos funcionales y no funcionales
    - Creación de Casos de Uso y Historias de Usuario
5) Documentación Validación y Verificación

### Técnicas aplicadas y aprendizajes

**Álvaro Collazo**:
Mejoré mi conocimiento sobre cómo usar git desde línea de comandos. Había cosas como los pull y merges que solo los sabía hacer desde una interface gráfica. Ahora sé hacer pull y merge e incluso solucionar confictos en los merges usando sólo comandos.
También aprendí lo que era la elicitación, nunca había escuchado de este concepto.
En cuanto a la parte de especificación, aprendí sobre la utilidad de los casos de uso. Nunca había trabajado con casos de uso anteriormente, sí con historias de usuario. Me parecen una herramienta super útil para tener una comprensión más en detalle de distintos escenarios que en general las historias de usuario no llegan a cubrir.
También aprendí a diferenciar entre requerimientos funcionales y no funcionales. En general no había visto muchas especificaciones de requerimientos no funcionales en los proyectos en los que había trabajado. Muchas veces la especificación se reduce a lo funcional y luego surgen reclamos sobre características no funcionales, lo que lleva a iterar más de lo deseado en una misma historia de usuario.

**Lucía Coll**:
Aprendí a trabajar con git y git hub ya que nunca había trabajado con estas herramientas. 
En lo que más experiencia tenía en forma previa al curso, es en los requerimientos funcionales y no funcionales. 
Con respecto a especificaciones aprendí sobre los casos de uso y las historias de usuarios.
Para mi hacer este proyecto es una experiencia totalmente enriquecedora, que espero poder aplicarla pronto en el plano profesional. 
Para finalizar, y comparto con mis compañeros, las técnicas de elicitación - muy novedosas- que vimos fueron un campo que descubrí en el curso, y realmente muy motivadores.

**Nicolás Pintos**:
A lo largo del proyecto aprendí más en profundidad sobre la gestión de repositorios con git en la terminal, si bien nunca había utilizado github y mucho menos git, logré aplicar lo aprendido en el curso hacia el proyecto. En otro orden de cosas, si bien ya había realizado casos de uso, historias de usuario y/o requerimientos funcionales o no funcionales; logré tener otra visión de cómo hacerlos ya que yo anteriormente no los hacía de la manera en la cual se mostró a lo largo del curso.
Para finalizar, las técnicas de elicitación fueron un campo nuevo en el cual nunca había realizado y fue una experiencia espectacular.
