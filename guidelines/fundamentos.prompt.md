# Fundamentos · el criterio

Las fichas de `guidelines/` no muestran una **pieza**: muestran una **decisión**,
con el token que la sostiene al lado, en mono. Si una decisión no tiene token, es
un gusto y no entra acá.

Por eso las dieciséis comparten este criterio en vez de tener uno cada una: el
argumento de cada fundamento está **en la ficha misma**, escrito al lado del
espécimen. La ficha es la especificación.

## Cuándo mirar cuál

| Si la pregunta es… | La ficha |
|---|---|
| ¿qué no puedo romper nunca? | **Los cinco principios** |
| ¿cuál de los dos azules va acá? | **La marca** |
| ¿sobre qué fondo apoyo esto? | **Superficies** |
| ¿qué color dice "salió bien" / "falló"? | **Estados** |
| ¿de qué color se pone bajo el dedo? | **Interacción** |
| ¿de qué tamaño mínimo es esto si se toca? | **Tamaños de toque** |
| ¿qué tamaño y qué familia de letra? | **Texto** |
| ¿esto va en mono? | **Mono** |
| ¿va en mayúsculas? | **Etiquetas** |
| ¿cuánto aire va acá? | **Aire** |
| ¿qué tan redonda es la esquina? | **Radios** |
| ¿de qué grosor es esta línea? | **Bordes** |
| ¿esto se puede animar? | **Movimiento** |
| ¿este gris se lee? | **Contraste** |
| ¿cómo escribo este mensaje? | **Voz** |
| ¿me estoy yendo para otro lado? | **Anti-referencia** |

## Las dos formas de ficha

- **Espécimen visual** — una fila por decisión: el espécimen a la izquierda a su
  tamaño real, su token a la derecha en mono. Es la forma por defecto.
- **Prosa numerada** — cuando lo que se decide no se puede dibujar (los
  principios, las reglas de la voz): una afirmación por fila, con su porqué.

Las dos usan el armazón compartido de [`guia.css`](./guia.css) — `.g-fila`,
`.g-tok`, `.g-num`, `.g-modos`, `.g-sino`, `.g-mal`. Una ficha nueva escribe
contenido, no armazón.

## Los dos modos van en UNA ficha

Kiri declara cada token una sola vez con `light-dark(claro, oscuro)`, así que
para mostrar los dos modos alcanza con `color-scheme: light` y
`color-scheme: dark` en dos divs hermanos (`.g-modo` y `.g-modo--oscuro`): todo
lo de adentro se resuelve en ese modo. Verificado en Chrome 152 sobre el Pixel.
No hace falta una ficha por tema.

## Si vas a agregar una

1. `@dsCard` en la **línea 1**, con `group="Fundamentos"`. Sin ese comentario la
   ficha no aparece ni en el taller ni en el panel de Claude Design.
2. Enlazá `../tokens.css` y `guia.css`. Nada más: sin build, sin CDN de scripts.
3. Ni un hex propio. Si falta un color, se agrega un token a `css/color.css` y se
   dice por qué. Lo verifica `node _verificar.mjs`.
4. Sumá la ruta a `PIEZAS` en `taller.html` y una sección en `galeria.html`.
