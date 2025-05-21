# Framework
## primer paso: Implementacion de una nueva libreria 
lo primero que se hizo fue agregar una nueva libreria para agregar las rutas 

Para instalarla debes colocar el siguiente comando

```js
npm install react-router-dom
```

Y para importarlo se veria de esta manera:

```Js
import {browserRouter} from 'react-router-dom';
```
Se hizo para trabajar mejor el programa de una forma modular 

## Rutas implemetadas 
- Login (version beta)
- register (version beta)



# Login
Fue la primera pagina que se hizo, esta guardada la carpeto paginas dentro del src, y cuenta con su propio archivo css

la imagen utilizada esta en esta direccion:
``` 
("https://logincdn.msauth.net/shared/5/images/fluent_web_dark_94c32326ccd74b2d9702.svg");
```
Cuenta con un login y la direccion a la pagina de registar


# Register
La segunda pagina en ser creada fue esta, y se aplicaron unos cambios al diseño de la estructura de como importaban los estilos porque ocurria un error de la otra forma, ya que si importaba cualquier archivo .css se iba a sobreponer al anterior 

asi que se cambio de 
```js
import ./"styles.css"
```
ha una que implementada la palabra module para que react entendiera que son modulos separados por paginas y no un estilo global, se hizo de la siguinte manera para que se pudiera separar por modulos.

```js
import style from './style.module.css'
```
