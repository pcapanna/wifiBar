WiFi Bar
==============================

# Dependencias para desarrollo:

## Instalar npm:

NPM es un gestor de paquetes para código javascript, casi en particular descarga módulos construidos en [nodejs](http://www.tutorialspoint.com/nodejs/nodejs_introduction.htm) (no se preocupen por saber nada de nodejs, nosotros no vamos a trabajar sobre esto directamente), que son las herramientas de trabajo que vamos a usar para construir, correr, testear y agregar algunos nuevos componentes a nuestra aplicación. Más adelante explico alguna de las herramientas que más vamos a usar.

Más info: https://docs.npmjs.com/getting-started/what-is-npm

## Instalar npm con APT:

Ejecutar 
`sudo apt get install npm`

## Para los que usuen UBUNTU tienen que correr esto:

Ejecutar 
`sudo ln -s /usr/bin/nodejs /usr/bin/node`

## Instalar npm WINDOWS:

Sigan este tutorial:
http://blog.teamtreehouse.com/install-node-js-npm-windows

## Instalar yo, grunt-cli, bower, generator-angular y generator-karma:

Ejecutar 
`npm install -g grunt-cli bower yo generator-karma generator-angular`

## IDE recomendada WEBSTORM (Pueden usar cualquier otra. En tal caso ignorar esto): 

https://www.jetbrains.com/webstorm/download
PRE Instalar webstorm para trial 'infinito': 
Cambiar la fecha a otra adelante en el tiempo (por ejemplo 1 de Enero de 2036). Webstorm va a calcular que la fecha caducidad de si mismo es la fecha de tu reloj + 30dias.

# Descargar dependencias de proyecto:

Básicamente nuestro proyecto no está completo si no incluímos una cantidad bastante grande de código provisto por terceros. Esta dependencia se hace explícita en distintos archivos del proyecto.
En package.json se listan dependencias manejadas por npm. Y en bower.json dependencias manejadas por bower (Bower es otro gestor de paquetes pero destinado sólo a frontend. Es una de las herramientas más importantes para nuestra aplicación. Más informacion: http://www.desarrolloweb.com/articulos/uso-bower-gestor-dependencias.html).

Ejecutar `npm install` descarga dependencias de código incluídas en el archivo package.json

Ejecutar `bower install` descarga dependencias de código incluídas en el archivo bower.json

Dato de color: El código javascript como sabrán es interpretado, no se compila. Todas sus dependencias se resuelven en tiempo de ejecución y por este motivo podríamos correr nuestra aplicación sin sus dependencias. El browser va a chillar y se va a ver horrible xD.

# AHORA SI. Correr la aplicación localmente:

Ejecutar `grunt serve` en la carpeta de proyecto

# Tutoriales recomendados:

HTML: www.w3schools.com/html/

JAVASCRIPT: www.w3schools.com/js/

CSS: www.w3schools.com/css/

ANGULARJS: www.w3schools.com/angular/

# Quickstart de directiva de AngularJS para comunicación contra api de google.

https://angular-ui.github.io/angular-google-maps/#!/use
