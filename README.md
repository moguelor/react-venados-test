# React Venados App Test

Este proyecto es creado con la finalidad de mostrar los conocimientos obtenidos en tecnologías frontend como react.js, los issues requeridos los prodrás encontrar directamente desde [esta página](https://bitbucket.org/dacodes/pruebas/src/master/Android/) 


# Started Kit

La estructura inicial del proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app), ya que ofrece 0 fatiga de configuración javascript y una serie de comandos muy útiles para la gestión del proyecto.

# Get Started

* `git clone https://github.com/jmoguelruiz/react-venados-test.git`
* `cd react-venados-test`
* `yarn install`
* `yarn start`

# Structure Folder

Se utiliza la metodologia llamada _"Structure By Features"_ para la organización de carpetas ya que por lo personal es la mejor estructura con la que he adaptado los proyectos para ser escalables y mantenibles. 

[Mas información aqui.](https://jaysoo.ca/2016/02/28/organizing-redux-application/)

```bash
.
├── src                       # Código principal.
│   ├── common                # Código reutilizable.
│       ├── components        # Componentes reutilizables de react.
├── pages                     # Cada módulo de la aplicación. Es comunmente definida por la direccion de react/router.
│   ├── home                  # Página principal. Es definida por la url por ejemplo "http://miweb.com/home".
│       ├── actions           # Acciones de redux. Listado de las diferentes acciones que pueden ocurrir en la aplicación.
│           ├── index.js      # Punto de entrada para exponer todas las acciones.
│       ├── api               # Acciones que llaman algún servicio api.
│           ├── index.js      # Punto de entrada para exponer todas las acciones api.
│       ├── components        # Componentes del módulo.
│           ├── index.js      # Punto de entrada para exponer todos los componentes.
│       ├── actionTypes.js    # Constantes que identifican las acciones a realizar.
│       ├── constants.js      # Constantes generales del módulo.
│       ├── Container.js      # Componente inteligente que interactua con redux.
│       ├── index.js          # Punto de entrada para exponer el contenido de la página (acciones, reducer, Container, etc).
│       ├── reducer.js        # Reducer de redux. El estado es alterado aqui dependiendo de las acciones.
│       ├── selectors.js      # Getters para el state de redux.
│   ├── configureStore        # Configuración del store de redux.
│   ├── index.js              # Punto de entrada para la aplicación.
```

# Librerias utilizadas

Estas son las librerias que comunmente utilizo para los proyectos.

|               |               |              
| ------------- | ------------- 
| [react](https://reactjs.org/) | Libreria javascript para crear interfaces robustas.
| [redux](https://es.redux.js.org/) | Contenedor predecible del estado de aplicaciónes javascript.
| [react-redux](https://github.com/reduxjs/react-redux) | Conexión de react con redux.
| [react-router](https://github.com/ReactTraining/react-router) | Enrutador para aplicaciónes con react.
| [connected-react-router](https://github.com/supasate/connected-react-router) | Un enlace Redux para React Router v4
| [reselect](https://github.com/reduxjs/reselect) | Eficiente selector del estado de redux.
| [react-motion](https://github.com/chenglou/react-motion) | Un spring que resuelve los problemas de animación.
| [glamor](https://github.com/threepointone/glamor) | css en tu javascript.
| [redux-thunk](https://github.com/reduxjs/redux-thunk) | Thunk middleware para Redux.
| [redux-api-middleware](https://github.com/agraboso/redux-api-middleware) | Redux middleware para llamar a una API.
| [moment](https://momentjs.com/) | Analizar, validar, manipular y mostrar fechas y horas en JavaScript.
| [react-modal](https://github.com/reactjs/react-modal) | Modal implementado en react.
| [prop-types](https://github.com/facebook/prop-types) | Checa los props pasados a los componentes de react.
| [immutability-helper](https://github.com/kolodny/immutability-helper) | Libreria de ayuda con la immutabilidad del reducer.
| [redux-immutable-state-invariant](https://github.com/leoasis/redux-immutable-state-invariant) | Marca un error al tratar de mutar información.


# Preview

## Movil

### `Menu`
![See image](https://drive.google.com/uc?export=view&id=1klC8YU6r46sVIihlAgYZwLyU0W7GBBr0)

### `/home`
![See image](https://drive.google.com/uc?export=view&id=1IDDMh81WDeTOczFmZKplxzBliHFVWhib)

### `/statistics`
![See image](https://drive.google.com/uc?export=view&id=1cVuB6P6Bt6Z-bHQvwJ6ESeAMJwxhqj5T)

### `/players`
![See image](https://drive.google.com/uc?export=view&id=10PngCVxcirlcMSOb51GbmREgVYB8YLwL)

### `modal`
![See image](https://drive.google.com/uc?export=view&id=1wPt2cZWh52Ex4cYi5FJP4n33WUIhe1-z)



## Escritorio

### `/home`
![See image](https://drive.google.com/uc?export=view&id=17V_Hml27CWpOnRokuxYyxQ13mHEet07g)

### `/players`
![See image](https://drive.google.com/uc?export=view&id=1MgyYDL_D-dgubK2C42ttLAjO8Tb0Jy0m)