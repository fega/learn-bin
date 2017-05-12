## Clase 6
Puedes usar media queries directamente en la etiqueta <link>, ej:

``` html
<link rel="stylesheet" media="(max-width:800px)" href="path/to/style.css">
```
Sin embargo, de esta manera se llamarían 2 archivo, mejor usarlos desde `style.css`, ej:

```css
@media screen and (max-width:800px) {
  /*My selectors*/
}
@media print{
  /*My print selectors*/
}
```
## Clase 7
Se usó `width:auto`, en vez de `width 100%`, la razón está bien explicado [en esta pregunta de stackOverflow](http://stackoverflow.com/questions/17468733/difference-between-width-auto-and-width-100-percent)

Se usó max-width...

Los elementos `display:inline`, no poseen márgenes.
Los elementos `display:block`, poseen ancho auto.
Los elementos `display:inline-block` poseen márgenes pero solo el ancho que necesitan ocupar

## Clase 8
Menu off-canvas

## Clase 9
meta viewport:
- `width=device-width`
- `initial-scale=1`
- `user-scalable=yes/no`

## Clase 10
Using media queries in JS:
```javascript
var query=window.matchMedia('(max-width:800px)')
var result=query.matches //returns true or false.

//or

query.addListener(fn)
```
## Clase 11
Videos responsivos

## clase 12
Lazy loading with [be lazy.js](http://dinbror.dk/blazy/)

## Clase 13
Múltiples resoluciones de pantalla con srcset, more info in [MDN: img tag](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/img)

## Clase 14
Remote debugging
https://developers.google.com/web/tools/chrome-devtools/remote-debugging/
http://stackoverflow.com/questions/21332853/is-there-a-real-solution-to-debug-cordova-apps

## Clase 15
Mobile gestures with [hammer.js](http://hammerjs.github.io/)
