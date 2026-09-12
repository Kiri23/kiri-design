# kiri-design

El design system de Christian Nogueras. Dos archivos hacen el trabajo:

| Archivo | Qué es |
|---|---|
| [`tokens.css`](./tokens.css) | **La ley.** Un `@import` de `css/color` · `escala` · `base` · `componentes`. Pegalo y funciona, sin build. |
| `css/` | Las partes. Una lección puede tomar `color+escala+base` y saltear `componentes`. |
| [`DESIGN.md`](./DESIGN.md) | El porqué, en un formato que un agente puede seguir. Incluye el prompt. |
| [`demo.html`](./demo.html) | La prueba: pantallas reales de Rutero, Notif, Mail y los cursos sin un solo hex propio. |
| [`taller.html`](./taller.html) | **El taller.** Explorador: piezas al costado, la ficha arriba, su criterio y su código abajo. |
| [`galeria.html`](./galeria.html) | La galería: todas las fichas de corrido, una debajo de otra. |
| `componentes/<grupo>/` | Por pieza: un `.prompt.md` (el criterio) y un `.card.html` (la ficha visual). |
| [`guidelines/`](./guidelines/) | **Los fundamentos.** Dieciséis fichas: una **decisión** por ficha con su token al lado, no un componente. Armazón compartido en `guia.css`. |
| [`_verificar.mjs`](./_verificar.mjs) | El validador de las fichas. `node _verificar.mjs`, sin dependencias. |

## Usarlo en una app

```html
<link rel=stylesheet href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Newsreader:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@500;700&display=swap">
<link rel=stylesheet href="ruta/a/tokens.css">
```

## Ver el demo

```sh
kiri-serve taller.html -p 8792    # el explorador
kiri-serve galeria.html -p 8792   # todo de corrido
```

El taller lee las fichas con `fetch`, así que **necesita HTTP**: abierto como
`file://` el navegador lo bloquea. Por eso `kiri-serve` y no `termux-open`.
Sin `-d`, `kiri-serve` sirve la raíz del repo git, así que alcanza con correrlo
desde adentro.

## Verificar

```sh
node _verificar.mjs
```

Chequea las 27 fichas: `@dsCard` en la línea 1 con sus cuatro campos, cero hex
crudos, cero `var(--kiri-*)` que no exista de verdad en `css/`, cero fuentes de
fuera de las tres del sistema, y ninguna ficha suelta fuera de la `const PIEZAS`
del taller. **Las diez mutaciones que le tiramos las agarra todas** — un chequeo
que da cero en todo puede ser un chequeo roto, así que se prueba rompiéndolo.

Para el desborde horizontal hace falta un navegador de verdad
(`_auditor.html` + `_lector.html`): sirve el repo, abrí
`_auditor.html?f=<fichas separadas por coma>` y mide cada ficha a 412 y 760px —
elementos cuyo `scrollWidth` supera su `clientWidth`, o cuyo borde derecho pasa
el ancho del documento. Deja el resultado en `localStorage.kiriAudit`, que
`_lector.html` imprime.

## La regla central

> **El azul es la marca. El botón es tinta.**
> Área grande → `--kiri-marca`. Letra → `--kiri-marca-texto`.

Los tokens se declaran una sola vez con `light-dark(claro, oscuro)` — ese es el
orden de la especificación de CSS: **el primer valor es el del modo claro**.
Oscuro es el modo de origen del diseño, pero en el código va segundo. El modo lo
decide `color-scheme`, y como se puede poner en cualquier div, los dos modos
entran en una sola ficha.

El resto está en `DESIGN.md`.
