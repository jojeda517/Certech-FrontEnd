
1. *Introducción:*

El proyecto CerTech se enfoca en desarrollar un sistema integral de gestión de certificados, desde la planificación hasta la implementación, definiendo recursos y tecnologías. Este informe resalta la importancia de cada fase, desde la planificación hasta el diseño del software, con énfasis en la evaluación y análisis de herramientas para lograr una solución que satisfaga las necesidades del proyecto y mejore la eficiencia y seguridad en la emisión de certificados. Se detalla la fase de diseño del software, la planificación del proyecto y las metodologías de gestión implementadas, destacando la importancia de la toma de decisiones informada. 

2. *Requisitos del Sistema:*

**Hardware:

- **Especificaciones Mínimas:**
  - Procesador: Procesador de doble núcleo a 1.8 GHz o equivalente.
  - Memoria RAM: 4 GB.
  - Almacenamiento: 20 GB de espacio disponible en disco.
- **Especificaciones Recomendadas:**
  - Procesador: Procesador de cuatro núcleos a 2.5 GHz o equivalente.
  - Memoria RAM: 8 GB o superior.
  - Almacenamiento: 50 GB de espacio disponible en disco.

Software:

- **Sistema Operativo:**
  - Windows 10 (versión 1809 o superior) / macOS 10.14 o superior / Linux (distribuciones compatibles con Angular y Python).
- **Dependencias:**
  - **Angular:**
    - Angular CLI: versión 12.0.0 o superior.
    - Node.js: versión 14.17.0 o superior.
      [![Angular](https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2020/09/angular-homepage.jpg)](https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2020/09/angular-homepage.jpg)

  - **XAMPP:**
    - Apache: versión 2.4.46 o superior.
    - MySQL: versión 8.0 o superior.
      [![XAMPP](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/XAMPP_Windows_10.PNG/420px-XAMPP_Windows_10.PNG)](https://www.apachefriends.org/index.html)

  - **Python:**
    - Python: versión 3.8 o superior.
    - Bibliotecas Python:
      - openpyxl: versión 3.0.7 o superior.
      - pandas: versión 1.3.0 o superior.
      - reportlab: versión 3.5.67 o superior.
      - PyPDF2: versión 1.26.0 o superior.
[![Python](https://1000marcas.net/wp-content/uploads/2020/11/Python-logo-768x223.png)](https://www.python.org/)

**Nota:** Se recomienda utilizar Visual Studio Code como entorno de desarrollo.

3. *Configuración del Entorno de Desarrollo:*

Instalación de Herramientas Básicas:

1. **Instalar Node.js y npm:**
   - Descarga e instala Node.js desde <https://nodejs.org/>.
   - Verifica la instalación ejecutando **node -v** y **npm -v**.
2. **Instalar Angular CLI:**
   - Ejecuta **npm install -g @angular/cli** para instalar Angular CLI globalmente.
3. **Instalar Visual Studio Code:**
   - Descarga e instala Visual Studio Code desde https://code.visualstudio.com/.
3.1  **Configuración del Backend con Django y MySQL:**
1. **Instalar Python y pip:**
   - Descarga e instala Python desde <https://www.python.org/>.
   - Verifica la instalación ejecutando **python --version** y **pip --version**.
2. **Configurar un entorno virtual:**
   - En el directorio del proyecto, ejecuta:

|<p>python -m venv venv</p><p>source venv/bin/activate   # Para sistemas Unix/Linux</p><p># o</p><p>.\venv\Scripts\activate    # Para sistemas Windows</p>|
| :- |

3. **Instalar Django y bibliotecas requeridas:**
   - Ejecuta **pip install django mysqlclient**.
4. **Configurar la base de datos MySQL:**
   - Crea una base de datos en MySQL llamada certech y actualiza la configuración en el archivo **settings.py** de Django.
3.2 Configuración de Bibliotecas de Python:
1. **Instalar bibliotecas de Python:**
   - Ejecuta **pip install openpyxl pandas reportlab PyPDF2**.
   - Configuración del Frontend con Angular:
2. **Instalar las dependencias de Angular:**
   - En el directorio del proyecto Angular, ejecuta **npm install**.
   - Iniciar el Entorno de Desarrollo:
3. **Iniciar el Backend de Django:**
   - Ejecuta **python manage.py runserver** desde el directorio del proyecto Django.
4. **Iniciar el Frontend de Angular:**
   - En el directorio del proyecto Angular, ejecuta **ng serve**.
5. **Acceder a la Aplicación:**
   - Abre tu navegador y ve a **http://localhost:4200/** para acceder al frontend de Angular.
4. *Arquitectura de la Aplicación:*

La aplicación sigue una arquitectura cliente-servidor, donde el frontend está construido con Angular y el backend utiliza el framework Django. La comunicación entre el frontend y el backend se realiza a través de una API REST. La base de datos MySQL almacena los datos de la aplicación

[Arquitectura del sistema ](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G10AajVMzn1NRNjU-OtxDlLGf7yIs1wqpH)


[Diagrama BD]([https://dbdiagram.io/d/654815217d8bbd64658804d9](https://dbdiagram.io/d/654815217d8bbd64658804d9))

5. *Estructura del Código:*

Explicación de la Estructura de Directorios:

**/src:**

- **/app:** Contiene los componentes principales y módulos de la aplicación Angular.
  - **/componentes:**
  - **/formularios:**
      - **form-certificado**: Contiene formularios para agregar y editar certificados.
      - **form-estudiante**: Contiene formularios para agregar y editar información del estudiante.
      - **form-evento**: Contiene formularios para agregar y editar eventos.
      - **form-firma**: Contiene formularios para agregar y editar firmas.
      - **form-participante**: Contiene formularios para agregar y editar participantes.
      - **tabla**: Contiene componentes para la visualización de tablas.
    - **/estructura:**
      - **footer**: Componente para el pie de página.
      - **header**: Componente para el encabezado.
      - **/componentes:**
        - **/cards**: Contiene componentes de tarjetas.
        - **/modulos**: Contiene módulos específicos.
        - **/navbar**: Componente de barra de navegación.
        - **/search**: Componente para la búsqueda.
      - **form-plantilla**: Contiene el formulario para las plantillas.
    - **/paginas:**
      
      - **/certificados**: Páginas relacionadas con certificados.
      - **/dashboard**: Páginas del panel de control.
      - **/desarrolladores**: Páginas dedicadas a los desarrolladores.
      - **/eventos**: Páginas relacionadas con eventos.
      - **/firmas**: Páginas relacionadas con firmas.
      - **/inicio**: Página de inicio.
      - **/login**: Páginas de inicio de sesión.
      - **/prueba**: Páginas de prueba.
      - **/seccion-certificado**: Páginas específicas para la sección de certificados.
      - **/terminoycondicion**: Páginas de términos y condiciones.
      - **/usuarios**: Páginas de gestión de usuarios.
      - **/validacion**: Páginas de validación.
      - **/validador-inico**: Páginas relacionadas con la validación inicial.
      - **/vista-certificado**: Páginas relacionadas con la visualización de certificados.
    - **/servicios:** Contiene servicios que consumen los servicios del backend.
6. *API y Endpoints:*

**En el backend se encuentran comentarios detallando de que significa cada uno de los archivos.**

lo puede descargar y verificar en esta dirección url <https://github.com/jojeda517/Certech-BackEnd> 

7. *Base de Datos:*

La base de datos que estamos utilizando es la mysql y se le proporcionara el sql

|<p>-- phpMyAdmin SQL Dump</p><p>-- version 5.2.1</p><p>-- https://www.phpmyadmin.net/</p><p>--</p><p>-- Servidor: 127.0.0.1</p><p>-- Tiempo de generación: 15-01-2024 a las 22:59:10</p><p>-- Versión del servidor: 10.4.28-MariaDB</p><p>-- Versión de PHP: 8.2.4</p><p></p><p>SET SQL\_MODE = "NO\_AUTO\_VALUE\_ON\_ZERO";</p><p>START TRANSACTION;</p><p>SET time\_zone = "+00:00";</p><p></p><p>/\*!40101 SET @OLD\_CHARACTER\_SET\_CLIENT=@@CHARACTER\_SET\_CLIENT \*/;</p><p>/\*!40101 SET @OLD\_CHARACTER\_SET\_RESULTS=@@CHARACTER\_SET\_RESULTS \*/;</p><p>/\*!40101 SET @OLD\_COLLATION\_CONNECTION=@@COLLATION\_CONNECTION \*/;</p><p>/\*!40101 SET NAMES utf8mb4 \*/;</p><p></p><p>--</p><p>-- Base de datos: `certech`</p><p>--</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `administradores`</p><p>--</p><p></p><p>CREATE TABLE `administradores` (</p><p>`  ``id\_administrador` int(11) NOT NULL,</p><p>`  ``usuario` varchar(50) NOT NULL,</p><p>`  ``clave` varchar(50) NOT NULL,</p><p>`  ``cedula` varchar(10) NOT NULL,</p><p>`  ``correo` varchar(50) NOT NULL,</p><p>`  ``celular` varchar(10) NOT NULL</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>--</p><p>-- Volcado de datos para la tabla `administradores`</p><p>--</p><p></p><p>INSERT INTO `administradores` (`id\_administrador`, `usuario`, `clave`, `cedula`, `correo`, `celular`) VALUES</p><p>(1, 'admin1', 'admin1', '1850943943', 'admin1@gmail.com', '0997447925'),</p><p>(2, 'admin2', 'admin2', '1850943943', 'admin2@gmail.com', '0997447925'),</p><p>(3, 'admin3', 'admin3', '1803', 'admin3@gmail.com', '0997447925');</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `auth\_group`</p><p>--</p><p></p><p>CREATE TABLE `auth\_group` (</p><p>`  ``id` int(11) NOT NULL,</p><p>`  ``name` varchar(150) NOT NULL</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `auth\_group\_permissions`</p><p>--</p><p></p><p>CREATE TABLE `auth\_group\_permissions` (</p><p>`  ``id` bigint(20) NOT NULL,</p><p>`  ``group\_id` int(11) NOT NULL,</p><p>`  ``permission\_id` int(11) NOT NULL</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `auth\_permission`</p><p>--</p><p></p><p>CREATE TABLE `auth\_permission` (</p><p>`  ``id` int(11) NOT NULL,</p><p>`  ``name` varchar(255) NOT NULL,</p><p>`  ``content\_type\_id` int(11) NOT NULL,</p><p>`  ``codename` varchar(100) NOT NULL</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>--</p><p>-- Volcado de datos para la tabla `auth\_permission`</p><p>--</p><p></p><p>INSERT INTO `auth\_permission` (`id`, `name`, `content\_type\_id`, `codename`) VALUES</p><p>(1, 'Can add log entry', 1, 'add\_logentry'),</p><p>(2, 'Can change log entry', 1, 'change\_logentry'),</p><p>(3, 'Can delete log entry', 1, 'delete\_logentry'),</p><p>(4, 'Can view log entry', 1, 'view\_logentry'),</p><p>(5, 'Can add permission', 2, 'add\_permission'),</p><p>(6, 'Can change permission', 2, 'change\_permission'),</p><p>(7, 'Can delete permission', 2, 'delete\_permission'),</p><p>(8, 'Can view permission', 2, 'view\_permission'),</p><p>(9, 'Can add group', 3, 'add\_group'),</p><p>(10, 'Can change group', 3, 'change\_group'),</p><p>(11, 'Can delete group', 3, 'delete\_group'),</p><p>(12, 'Can view group', 3, 'view\_group'),</p><p>(13, 'Can add user', 4, 'add\_user'),</p><p>(14, 'Can change user', 4, 'change\_user'),</p><p>(15, 'Can delete user', 4, 'delete\_user'),</p><p>(16, 'Can view user', 4, 'view\_user'),</p><p>(17, 'Can add content type', 5, 'add\_contenttype'),</p><p>(18, 'Can change content type', 5, 'change\_contenttype'),</p><p>(19, 'Can delete content type', 5, 'delete\_contenttype'),</p><p>(20, 'Can view content type', 5, 'view\_contenttype'),</p><p>(21, 'Can add session', 6, 'add\_session'),</p><p>(22, 'Can change session', 6, 'change\_session'),</p><p>(23, 'Can delete session', 6, 'delete\_session'),</p><p>(24, 'Can view session', 6, 'view\_session'),</p><p>(25, 'Can add administrador', 7, 'add\_administrador'),</p><p>(26, 'Can change administrador', 7, 'change\_administrador'),</p><p>(27, 'Can delete administrador', 7, 'delete\_administrador'),</p><p>(28, 'Can view administrador', 7, 'view\_administrador');</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `auth\_user`</p><p>--</p><p></p><p>CREATE TABLE `auth\_user` (</p><p>`  ``id` int(11) NOT NULL,</p><p>`  ``password` varchar(128) NOT NULL,</p><p>`  ``last\_login` datetime(6) DEFAULT NULL,</p><p>`  ``is\_superuser` tinyint(1) NOT NULL,</p><p>`  ``username` varchar(150) NOT NULL,</p><p>`  ``first\_name` varchar(150) NOT NULL,</p><p>`  ``last\_name` varchar(150) NOT NULL,</p><p>`  ``email` varchar(254) NOT NULL,</p><p>`  ``is\_staff` tinyint(1) NOT NULL,</p><p>`  ``is\_active` tinyint(1) NOT NULL,</p><p>`  ``date\_joined` datetime(6) NOT NULL</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `auth\_user\_groups`</p><p>--</p><p></p><p>CREATE TABLE `auth\_user\_groups` (</p><p>`  ``id` bigint(20) NOT NULL,</p><p>`  ``user\_id` int(11) NOT NULL,</p><p>`  ``group\_id` int(11) NOT NULL</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `auth\_user\_user\_permissions`</p><p>--</p><p></p><p>CREATE TABLE `auth\_user\_user\_permissions` (</p><p>`  ``id` bigint(20) NOT NULL,</p><p>`  ``user\_id` int(11) NOT NULL,</p><p>`  ``permission\_id` int(11) NOT NULL</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `certificados`</p><p>--</p><p></p><p>CREATE TABLE `certificados` (</p><p>`  ``id\_certificado` int(11) NOT NULL,</p><p>`  ``id\_administrador` int(11) NOT NULL,</p><p>`  ``id\_participante` int(11) NOT NULL,</p><p>`  ``id\_evento` int(11) NOT NULL,</p><p>`  ``id\_plantilla` int(11) NOT NULL,</p><p>`  ``fecha` timestamp NOT NULL DEFAULT current\_timestamp(),</p><p>`  ``codigo\_unico` varchar(50) NOT NULL</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `detalle\_certificados`</p><p>--</p><p></p><p>CREATE TABLE `detalle\_certificados` (</p><p>`  ``id\_detalle` int(11) NOT NULL,</p><p>`  ``id\_certificado` int(11) NOT NULL,</p><p>`  ``id\_firma` int(11) NOT NULL</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `django\_admin\_log`</p><p>--</p><p></p><p>CREATE TABLE `django\_admin\_log` (</p><p>`  ``id` int(11) NOT NULL,</p><p>`  ``action\_time` datetime(6) NOT NULL,</p><p>`  ``object\_id` longtext DEFAULT NULL,</p><p>`  ``object\_repr` varchar(200) NOT NULL,</p><p>`  ``action\_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action\_flag` >= 0),</p><p>`  ``change\_message` longtext NOT NULL,</p><p>`  ``content\_type\_id` int(11) DEFAULT NULL,</p><p>`  ``user\_id` int(11) NOT NULL</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `django\_content\_type`</p><p>--</p><p></p><p>CREATE TABLE `django\_content\_type` (</p><p>`  ``id` int(11) NOT NULL,</p><p>`  ``app\_label` varchar(100) NOT NULL,</p><p>`  ``model` varchar(100) NOT NULL</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>--</p><p>-- Volcado de datos para la tabla `django\_content\_type`</p><p>--</p><p></p><p>INSERT INTO `django\_content\_type` (`id`, `app\_label`, `model`) VALUES</p><p>(1, 'admin', 'logentry'),</p><p>(7, 'api', 'administrador'),</p><p>(3, 'auth', 'group'),</p><p>(2, 'auth', 'permission'),</p><p>(4, 'auth', 'user'),</p><p>(5, 'contenttypes', 'contenttype'),</p><p>(6, 'sessions', 'session');</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `django\_migrations`</p><p>--</p><p></p><p>CREATE TABLE `django\_migrations` (</p><p>`  ``id` bigint(20) NOT NULL,</p><p>`  ``app` varchar(255) NOT NULL,</p><p>`  ``name` varchar(255) NOT NULL,</p><p>`  ``applied` datetime(6) NOT NULL</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>--</p><p>-- Volcado de datos para la tabla `django\_migrations`</p><p>--</p><p></p><p>INSERT INTO `django\_migrations` (`id`, `app`, `name`, `applied`) VALUES</p><p>(1, 'contenttypes', '0001\_initial', '2023-12-28 22:17:11.026947'),</p><p>(2, 'auth', '0001\_initial', '2023-12-28 22:17:12.050490'),</p><p>(3, 'admin', '0001\_initial', '2023-12-28 22:17:12.257810'),</p><p>(4, 'admin', '0002\_logentry\_remove\_auto\_add', '2023-12-28 22:17:12.275374'),</p><p>(5, 'admin', '0003\_logentry\_add\_action\_flag\_choices', '2023-12-28 22:17:12.294832'),</p><p>(6, 'api', '0001\_initial', '2023-12-28 22:17:12.301372'),</p><p>(7, 'contenttypes', '0002\_remove\_content\_type\_name', '2023-12-28 22:17:12.405247'),</p><p>(8, 'auth', '0002\_alter\_permission\_name\_max\_length', '2023-12-28 22:17:12.512899'),</p><p>(9, 'auth', '0003\_alter\_user\_email\_max\_length', '2023-12-28 22:17:12.546481'),</p><p>(10, 'auth', '0004\_alter\_user\_username\_opts', '2023-12-28 22:17:12.577131'),</p><p>(11, 'auth', '0005\_alter\_user\_last\_login\_null', '2023-12-28 22:17:12.678910'),</p><p>(12, 'auth', '0006\_require\_contenttypes\_0002', '2023-12-28 22:17:12.683912'),</p><p>(13, 'auth', '0007\_alter\_validators\_add\_error\_messages', '2023-12-28 22:17:12.701983'),</p><p>(14, 'auth', '0008\_alter\_user\_username\_max\_length', '2023-12-28 22:17:12.733467'),</p><p>(15, 'auth', '0009\_alter\_user\_last\_name\_max\_length', '2023-12-28 22:17:12.762753'),</p><p>(16, 'auth', '0010\_alter\_group\_name\_max\_length', '2023-12-28 22:17:12.804968'),</p><p>(17, 'auth', '0011\_update\_proxy\_permissions', '2023-12-28 22:17:12.830192'),</p><p>(18, 'auth', '0012\_alter\_user\_first\_name\_max\_length', '2023-12-28 22:17:12.861714'),</p><p>(19, 'sessions', '0001\_initial', '2023-12-28 22:17:12.962278');</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `django\_session`</p><p>--</p><p></p><p>CREATE TABLE `django\_session` (</p><p>`  ``session\_key` varchar(40) NOT NULL,</p><p>`  ``session\_data` longtext NOT NULL,</p><p>`  ``expire\_date` datetime(6) NOT NULL</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `eventos`</p><p>--</p><p></p><p>CREATE TABLE `eventos` (</p><p>`  ``id\_evento` int(11) NOT NULL,</p><p>`  ``nombre\_evento` varchar(255) NOT NULL,</p><p>`  ``tipo\_evento` varchar(100) NOT NULL,</p><p>`  ``descripcion\_evento` text NOT NULL,</p><p>`  ``portada` varchar(255) NOT NULL,</p><p>`  ``logo` varchar(255) NOT NULL,</p><p>`  ``fecha\_creacion` timestamp NOT NULL DEFAULT current\_timestamp()</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>--</p><p>-- Volcado de datos para la tabla `eventos`</p><p>--</p><p></p><p>INSERT INTO `eventos` (`id\_evento`, `nombre\_evento`, `tipo\_evento`, `descripcion\_evento`, `portada`, `logo`, `fecha\_creacion`) VALUES</p><p>(15, 'Curso2024\'CasaAbierta', 'curso', 'Concurso para estudiantes de la universidad técnica de Ambato', 'static/portada/feria.jpeg', 'static/logo/feria.jpeg', '2024-01-13 21:55:23');</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `firmas`</p><p>--</p><p></p><p>CREATE TABLE `firmas` (</p><p>`  ``id\_firma` int(11) NOT NULL,</p><p>`  ``propietario\_firma` varchar(100) NOT NULL,</p><p>`  ``cargo\_propietario` varchar(100) NOT NULL,</p><p>`  ``firma` varchar(255) NOT NULL,</p><p>`  ``estado\_firma` varchar(50) NOT NULL</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>--</p><p>-- Volcado de datos para la tabla `firmas`</p><p>--</p><p></p><p>INSERT INTO `firmas` (`id\_firma`, `propietario\_firma`, `cargo\_propietario`, `firma`, `estado\_firma`) VALUES</p><p>(5, 'Anthony Solis', 'Docente', 'static/firmas/firma.jpg', 'Activo'),</p><p>(6, 'Stalin Galarza', 'Docente', 'static/firmas/sebas.jpg', 'Activo'),</p><p>(7, 'edu pila', 'Rector', 'static/firmas/edu.jpg', 'Activo');</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `participantes`</p><p>--</p><p></p><p>CREATE TABLE `participantes` (</p><p>`  ``id\_participante` int(11) NOT NULL,</p><p>`  ``cedula` varchar(10) NOT NULL,</p><p>`  ``nombre\_apellido` varchar(100) NOT NULL,</p><p>`  ``celular` varchar(10) DEFAULT NULL,</p><p>`  ``correo` varchar(50) NOT NULL</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>--</p><p>-- Volcado de datos para la tabla `participantes`</p><p>--</p><p></p><p>INSERT INTO `participantes` (`id\_participante`, `cedula`, `nombre\_apellido`, `celular`, `correo`) VALUES</p><p>(4, '1850943943', 'Karen Moyolema', '0997447925', 'moyolemakaren@gmail.com'),</p><p>(5, '1803', 'Karen Moyolema', '0997447925', 'moyolemakaren@gmail.com'),</p><p>(6, '1803', 'aceite', '0997447925', 'moyolemakaren@gmail.com'),</p><p>(7, '1789', 'beth', '1235', 'beth@gmail.com'),</p><p>(8, '1789', 'Karen Moyolema', '1235', 'beth@gmail.com'),</p><p>(9, '123', 'beth', '145', 'beth@gmail.com'),</p><p>(10, '123', '5', '5', '5'),</p><p>(11, '4', '4', '4', '4'),</p><p>(12, '2', '2', '2', '2'),</p><p>(13, '3', '3', '3', '3'),</p><p>(14, '6', '6', '6', '6'),</p><p>(15, '10', '10', '2', '2'),</p><p>(16, '12', 'Beth', '2', 'beth@gmail.com'),</p><p>(17, '36', 'Eskal', '269', 'eskal@gmila.com'),</p><p>(18, '36', 'Liz', '394', 'moyolemakaren@gmail.com'),</p><p>(19, '123', 'beth', '2', '2');</p><p></p><p>-- --------------------------------------------------------</p><p></p><p>--</p><p>-- Estructura de tabla para la tabla `plantillas`</p><p>--</p><p></p><p>CREATE TABLE `plantillas` (</p><p>`  ``id\_plantilla` int(11) NOT NULL,</p><p>`  ``plantilla` varchar(255) NOT NULL</p><p>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;</p><p></p><p>--</p><p>-- Volcado de datos para la tabla `plantillas`</p><p>--</p><p></p><p>INSERT INTO `plantillas` (`id\_plantilla`, `plantilla`) VALUES</p><p>(4, 'static/plantilla/Imagen de WhatsApp 2024-01-11 a las 10.07.19\_1ad27a38.pdf'),</p><p>(5, 'static/plantilla/Imagen de WhatsApp 2024-01-11 a las 10.07.19\_c30273c8.pdf');</p><p></p><p>--</p><p>-- Índices para tablas volcadas</p><p>--</p><p></p><p>--</p><p>-- Indices de la tabla `administradores`</p><p>--</p><p>ALTER TABLE `administradores`</p><p>`  `ADD PRIMARY KEY (`id\_administrador`);</p><p></p><p>--</p><p>-- Indices de la tabla `auth\_group`</p><p>--</p><p>ALTER TABLE `auth\_group`</p><p>`  `ADD PRIMARY KEY (`id`),</p><p>`  `ADD UNIQUE KEY `name` (`name`);</p><p></p><p>--</p><p>-- Indices de la tabla `auth\_group\_permissions`</p><p>--</p><p>ALTER TABLE `auth\_group\_permissions`</p><p>`  `ADD PRIMARY KEY (`id`),</p><p>`  `ADD UNIQUE KEY `auth\_group\_permissions\_group\_id\_permission\_id\_0cd325b0\_uniq` (`group\_id`,`permission\_id`),</p><p>`  `ADD KEY `auth\_group\_permissio\_permission\_id\_84c5c92e\_fk\_auth\_perm` (`permission\_id`);</p><p></p><p>--</p><p>-- Indices de la tabla `auth\_permission`</p><p>--</p><p>ALTER TABLE `auth\_permission`</p><p>`  `ADD PRIMARY KEY (`id`),</p><p>`  `ADD UNIQUE KEY `auth\_permission\_content\_type\_id\_codename\_01ab375a\_uniq` (`content\_type\_id`,`codename`);</p><p></p><p>--</p><p>-- Indices de la tabla `auth\_user`</p><p>--</p><p>ALTER TABLE `auth\_user`</p><p>`  `ADD PRIMARY KEY (`id`),</p><p>`  `ADD UNIQUE KEY `username` (`username`);</p><p></p><p>--</p><p>-- Indices de la tabla `auth\_user\_groups`</p><p>--</p><p>ALTER TABLE `auth\_user\_groups`</p><p>`  `ADD PRIMARY KEY (`id`),</p><p>`  `ADD UNIQUE KEY `auth\_user\_groups\_user\_id\_group\_id\_94350c0c\_uniq` (`user\_id`,`group\_id`),</p><p>`  `ADD KEY `auth\_user\_groups\_group\_id\_97559544\_fk\_auth\_group\_id` (`group\_id`);</p><p></p><p>--</p><p>-- Indices de la tabla `auth\_user\_user\_permissions`</p><p>--</p><p>ALTER TABLE `auth\_user\_user\_permissions`</p><p>`  `ADD PRIMARY KEY (`id`),</p><p>`  `ADD UNIQUE KEY `auth\_user\_user\_permissions\_user\_id\_permission\_id\_14a6b632\_uniq` (`user\_id`,`permission\_id`),</p><p>`  `ADD KEY `auth\_user\_user\_permi\_permission\_id\_1fbb5f2c\_fk\_auth\_perm` (`permission\_id`);</p><p></p><p>--</p><p>-- Indices de la tabla `certificados`</p><p>--</p><p>ALTER TABLE `certificados`</p><p>`  `ADD PRIMARY KEY (`id\_certificado`),</p><p>`  `ADD KEY `administrador` (`id\_administrador`),</p><p>`  `ADD KEY `participante` (`id\_participante`),</p><p>`  `ADD KEY `evento` (`id\_evento`),</p><p>`  `ADD KEY `plantilla` (`id\_plantilla`);</p><p></p><p>--</p><p>-- Indices de la tabla `detalle\_certificados`</p><p>--</p><p>ALTER TABLE `detalle\_certificados`</p><p>`  `ADD PRIMARY KEY (`id\_detalle`),</p><p>`  `ADD KEY `certificado` (`id\_certificado`),</p><p>`  `ADD KEY `firmas` (`id\_firma`);</p><p></p><p>--</p><p>-- Indices de la tabla `django\_admin\_log`</p><p>--</p><p>ALTER TABLE `django\_admin\_log`</p><p>`  `ADD PRIMARY KEY (`id`),</p><p>`  `ADD KEY `django\_admin\_log\_content\_type\_id\_c4bce8eb\_fk\_django\_co` (`content\_type\_id`),</p><p>`  `ADD KEY `django\_admin\_log\_user\_id\_c564eba6\_fk\_auth\_user\_id` (`user\_id`);</p><p></p><p>--</p><p>-- Indices de la tabla `django\_content\_type`</p><p>--</p><p>ALTER TABLE `django\_content\_type`</p><p>`  `ADD PRIMARY KEY (`id`),</p><p>`  `ADD UNIQUE KEY `django\_content\_type\_app\_label\_model\_76bd3d3b\_uniq` (`app\_label`,`model`);</p><p></p><p>--</p><p>-- Indices de la tabla `django\_migrations`</p><p>--</p><p>ALTER TABLE `django\_migrations`</p><p>`  `ADD PRIMARY KEY (`id`);</p><p></p><p>--</p><p>-- Indices de la tabla `django\_session`</p><p>--</p><p>ALTER TABLE `django\_session`</p><p>`  `ADD PRIMARY KEY (`session\_key`),</p><p>`  `ADD KEY `django\_session\_expire\_date\_a5c62663` (`expire\_date`);</p><p></p><p>--</p><p>-- Indices de la tabla `eventos`</p><p>--</p><p>ALTER TABLE `eventos`</p><p>`  `ADD PRIMARY KEY (`id\_evento`);</p><p></p><p>--</p><p>-- Indices de la tabla `firmas`</p><p>--</p><p>ALTER TABLE `firmas`</p><p>`  `ADD PRIMARY KEY (`id\_firma`);</p><p></p><p>--</p><p>-- Indices de la tabla `participantes`</p><p>--</p><p>ALTER TABLE `participantes`</p><p>`  `ADD PRIMARY KEY (`id\_participante`);</p><p></p><p>--</p><p>-- Indices de la tabla `plantillas`</p><p>--</p><p>ALTER TABLE `plantillas`</p><p>`  `ADD PRIMARY KEY (`id\_plantilla`);</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de las tablas volcadas</p><p>--</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de la tabla `administradores`</p><p>--</p><p>ALTER TABLE `administradores`</p><p>`  `MODIFY `id\_administrador` int(11) NOT NULL AUTO\_INCREMENT, AUTO\_INCREMENT=4;</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de la tabla `auth\_group`</p><p>--</p><p>ALTER TABLE `auth\_group`</p><p>`  `MODIFY `id` int(11) NOT NULL AUTO\_INCREMENT;</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de la tabla `auth\_group\_permissions`</p><p>--</p><p>ALTER TABLE `auth\_group\_permissions`</p><p>`  `MODIFY `id` bigint(20) NOT NULL AUTO\_INCREMENT;</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de la tabla `auth\_permission`</p><p>--</p><p>ALTER TABLE `auth\_permission`</p><p>`  `MODIFY `id` int(11) NOT NULL AUTO\_INCREMENT, AUTO\_INCREMENT=29;</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de la tabla `auth\_user`</p><p>--</p><p>ALTER TABLE `auth\_user`</p><p>`  `MODIFY `id` int(11) NOT NULL AUTO\_INCREMENT;</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de la tabla `auth\_user\_groups`</p><p>--</p><p>ALTER TABLE `auth\_user\_groups`</p><p>`  `MODIFY `id` bigint(20) NOT NULL AUTO\_INCREMENT;</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de la tabla `auth\_user\_user\_permissions`</p><p>--</p><p>ALTER TABLE `auth\_user\_user\_permissions`</p><p>`  `MODIFY `id` bigint(20) NOT NULL AUTO\_INCREMENT;</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de la tabla `certificados`</p><p>--</p><p>ALTER TABLE `certificados`</p><p>`  `MODIFY `id\_certificado` int(11) NOT NULL AUTO\_INCREMENT;</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de la tabla `detalle\_certificados`</p><p>--</p><p>ALTER TABLE `detalle\_certificados`</p><p>`  `MODIFY `id\_detalle` int(11) NOT NULL AUTO\_INCREMENT;</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de la tabla `django\_admin\_log`</p><p>--</p><p>ALTER TABLE `django\_admin\_log`</p><p>`  `MODIFY `id` int(11) NOT NULL AUTO\_INCREMENT;</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de la tabla `django\_content\_type`</p><p>--</p><p>ALTER TABLE `django\_content\_type`</p><p>`  `MODIFY `id` int(11) NOT NULL AUTO\_INCREMENT, AUTO\_INCREMENT=8;</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de la tabla `django\_migrations`</p><p>--</p><p>ALTER TABLE `django\_migrations`</p><p>`  `MODIFY `id` bigint(20) NOT NULL AUTO\_INCREMENT, AUTO\_INCREMENT=20;</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de la tabla `eventos`</p><p>--</p><p>ALTER TABLE `eventos`</p><p>`  `MODIFY `id\_evento` int(11) NOT NULL AUTO\_INCREMENT, AUTO\_INCREMENT=16;</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de la tabla `firmas`</p><p>--</p><p>ALTER TABLE `firmas`</p><p>`  `MODIFY `id\_firma` int(11) NOT NULL AUTO\_INCREMENT, AUTO\_INCREMENT=8;</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de la tabla `participantes`</p><p>--</p><p>ALTER TABLE `participantes`</p><p>`  `MODIFY `id\_participante` int(11) NOT NULL AUTO\_INCREMENT, AUTO\_INCREMENT=20;</p><p></p><p>--</p><p>-- AUTO\_INCREMENT de la tabla `plantillas`</p><p>--</p><p>ALTER TABLE `plantillas`</p><p>`  `MODIFY `id\_plantilla` int(11) NOT NULL AUTO\_INCREMENT, AUTO\_INCREMENT=6;</p><p></p><p>--</p><p>-- Restricciones para tablas volcadas</p><p>--</p><p></p><p>--</p><p>-- Filtros para la tabla `auth\_group\_permissions`</p><p>--</p><p>ALTER TABLE `auth\_group\_permissions`</p><p>`  `ADD CONSTRAINT `auth\_group\_permissio\_permission\_id\_84c5c92e\_fk\_auth\_perm` FOREIGN KEY (`permission\_id`) REFERENCES `auth\_permission` (`id`),</p><p>`  `ADD CONSTRAINT `auth\_group\_permissions\_group\_id\_b120cbf9\_fk\_auth\_group\_id` FOREIGN KEY (`group\_id`) REFERENCES `auth\_group` (`id`);</p><p></p><p>--</p><p>-- Filtros para la tabla `auth\_permission`</p><p>--</p><p>ALTER TABLE `auth\_permission`</p><p>`  `ADD CONSTRAINT `auth\_permission\_content\_type\_id\_2f476e4b\_fk\_django\_co` FOREIGN KEY (`content\_type\_id`) REFERENCES `django\_content\_type` (`id`);</p><p></p><p>--</p><p>-- Filtros para la tabla `auth\_user\_groups`</p><p>--</p><p>ALTER TABLE `auth\_user\_groups`</p><p>`  `ADD CONSTRAINT `auth\_user\_groups\_group\_id\_97559544\_fk\_auth\_group\_id` FOREIGN KEY (`group\_id`) REFERENCES `auth\_group` (`id`),</p><p>`  `ADD CONSTRAINT `auth\_user\_groups\_user\_id\_6a12ed8b\_fk\_auth\_user\_id` FOREIGN KEY (`user\_id`) REFERENCES `auth\_user` (`id`);</p><p></p><p>--</p><p>-- Filtros para la tabla `auth\_user\_user\_permissions`</p><p>--</p><p>ALTER TABLE `auth\_user\_user\_permissions`</p><p>`  `ADD CONSTRAINT `auth\_user\_user\_permi\_permission\_id\_1fbb5f2c\_fk\_auth\_perm` FOREIGN KEY (`permission\_id`) REFERENCES `auth\_permission` (`id`),</p><p>`  `ADD CONSTRAINT `auth\_user\_user\_permissions\_user\_id\_a95ead1b\_fk\_auth\_user\_id` FOREIGN KEY (`user\_id`) REFERENCES `auth\_user` (`id`);</p><p></p><p>--</p><p>-- Filtros para la tabla `certificados`</p><p>--</p><p>ALTER TABLE `certificados`</p><p>`  `ADD CONSTRAINT `administrador` FOREIGN KEY (`id\_administrador`) REFERENCES `administradores` (`id\_administrador`),</p><p>`  `ADD CONSTRAINT `evento` FOREIGN KEY (`id\_evento`) REFERENCES `eventos` (`id\_evento`),</p><p>`  `ADD CONSTRAINT `participante` FOREIGN KEY (`id\_participante`) REFERENCES `participantes` (`id\_participante`),</p><p>`  `ADD CONSTRAINT `plantilla` FOREIGN KEY (`id\_plantilla`) REFERENCES `plantillas` (`id\_plantilla`);</p><p></p><p>--</p><p>-- Filtros para la tabla `detalle\_certificados`</p><p>--</p><p>ALTER TABLE `detalle\_certificados`</p><p>`  `ADD CONSTRAINT `certificado` FOREIGN KEY (`id\_certificado`) REFERENCES `certificados` (`id\_certificado`),</p><p>`  `ADD CONSTRAINT `firmas` FOREIGN KEY (`id\_firma`) REFERENCES `firmas` (`id\_firma`);</p><p></p><p>--</p><p>-- Filtros para la tabla `django\_admin\_log`</p><p>--</p><p>ALTER TABLE `django\_admin\_log`</p><p>`  `ADD CONSTRAINT `django\_admin\_log\_content\_type\_id\_c4bce8eb\_fk\_django\_co` FOREIGN KEY (`content\_type\_id`) REFERENCES `django\_content\_type` (`id`),</p><p>`  `ADD CONSTRAINT `django\_admin\_log\_user\_id\_c564eba6\_fk\_auth\_user\_id` FOREIGN KEY (`user\_id`) REFERENCES `auth\_user` (`id`);</p><p>COMMIT;</p><p></p><p>/\*!40101 SET CHARACTER\_SET\_CLIENT=@OLD\_CHARACTER\_SET\_CLIENT \*/;</p><p>/\*!40101 SET CHARACTER\_SET\_RESULTS=@OLD\_CHARACTER\_SET\_RESULTS \*/;</p><p>/\*!40101 SET COLLATION\_CONNECTION=@OLD\_COLLATION\_CONNECTION \*/;</p><p></p><p></p>|
| :- |

8. *Manejo de Errores:*
1. **Formato de Respuestas de Error:**
   - Todas las respuestas de error deben seguir un formato consistente que incluya un mensaje descriptivo y, si es posible, información adicional sobre el error.
2. **Logging de Errores:**
   - Los errores deben registrarse adecuadamente en los registros del servidor para que los desarrolladores puedan rastrear y solucionar problemas.
3. **Notificaciones a Desarrolladores:**
   - Considera implementar notificaciones automáticas a los desarrolladores cuando ocurra un error crítico para que puedan abordar rápidamente el problema.
4. **Documentación Clara:**
   - La documentación de la API debe incluir detalles sobre los posibles errores que pueden ocurrir, cómo manejarlos y posibles soluciones.

** Códigos de Estado HTTP y su Significado:**

Los códigos de estado HTTP son indicadores estándar de la respuesta de un servidor a una solicitud. Aquí hay algunos códigos comunes relacionados con el manejo de errores:

- **200 OK:**
  - Indica una solicitud exitosa.
- **201 Created:**
  - Indica que la solicitud ha tenido éxito y se ha creado un nuevo recurso.
- **204 No Content:**
  - Indica que la solicitud se ha realizado correctamente, pero no hay contenido para devolver.
- **400 Bad Request:**
  - Indica que la solicitud del cliente es incorrecta o no puede ser procesada.
- **401 Unauthorized:**
  - Indica que se necesita autenticación para acceder al recurso.
- **403 Forbidden:**
  - Indica que el servidor comprende la solicitud, pero el cliente no tiene derechos de acceso.
- **404 Not Found:**
  - Indica que el recurso solicitado no se encuentra en el servidor.
- **422 Unprocessable Entity:**
  - Indica que la solicitud es válida, pero no puede ser procesada debido a errores semánticos.
- **500 Internal Server Error:**
  - Indica un error interno del servidor que impide que se complete la solicitud.

9. *Despliegue:*

**Backend Django:**

Usa un servidor de aplicaciones en producción como Python para el backend Django. Ejecuta el siguiente comando para iniciar Python:

**python manage.py runserver**

Compila el proyecto Angular para producción usando el siguiente comando:

**ng s**

Una vez mandando esos comandos en la terminal y ejecutando XAMPP ya que se encuentra la base de datos conectado al backend para que funcione la aplicación ya que se está trayendo localmente los datos.

10. *FAQ (Preguntas Frecuentes):*

¿Cómo ejecuto la aplicación en desarrollo?

**Respuesta:**

- Backend (Django): Ejecuta el siguiente comando en el directorio del backend:

**python manage.py runserver** 

- Frontend (Angular): Ejecuta el siguiente comando en el directorio del frontend:

**ng serve**

¿Cómo realizo migraciones en Django?

**Respuesta:**

- Para crear migraciones:

**python manage.py makemigrations** 

- Para aplicar migraciones:

**python manage.py migrate**

11. *Recursos Adicionales:*
    
1. **Django (Backend):**
   - [Documentación Oficial de Django](mailto:https://docs.djangoproject.com/es/5.0/)
   - [Django Rest Framework](https://www.django-rest-framework.org/)
2. **Angular (Frontend):**
   - Documentación Oficial de Angular
   - [Angular](https://angular.io/)
3. **Base de Datos:**
   - Documentación de MySQL
   - Documentación de PostgreSQL
4. **Herramientas y Servicios:**
   1. [Gunicorn - Servidor de Aplicaciones para Django](https://gunicorn.org/)
   1. Nginx - Servidor Web

** Bibliotecas y Frameworks Utilizados:**

1. **Backend (Django):**
   - [Django](https://www.djangoproject.com/)
   - [Django Rest Framework](https://www.django-rest-framework.org/)
   - mysqlclient (Conector MySQL para Django)
1. **Frontend (Angular):**
   - [Angular](https://angular.io/)
   - [Node.js](https://nodejs.org/)
   - [npm (Gestor de Paquetes para Node.js)](https://www.npmjs.com/)
1. **Otras Bibliotecas Python Utilizadas:**
   - openpyxl
   - pandas
   - reportlab
1. **Herramientas de Desarrollo:**
   - Visual Studio Code

12. *Contacto y Soporte:*

Para cualquier duda o inquietud no dude en comunicarse con nosotros

|Integrantes|N° telefónico |
| :- | :- |
|Jose Ojeda|+593 99 859 5903|
|Karen Moyolema|+593 99 744 7925|
|Eduardo Pila|+593 98 715 2717|
|Anthony Solis|+593 98 715 3094|
|Eduardo Villafuerte |+593 99 521 3946|

13. *Historial de Cambios:*

Se utilizo github para la contribución y desarrollo de la aplicación con la cual hubo contribución de los desarrolladores y se encuentra documentado los cambios que se han hecho.

<https://github.com/jojeda517/Certech-BackEnd/branches>

<https://github.com/jojeda517/Certech-FrontEnd/branches>


