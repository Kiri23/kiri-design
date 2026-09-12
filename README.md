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

## Usarlo en una app

```html
<link rel=stylesheet href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Newsreader:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@500;700&display=swap">
<link rel=stylesheet href="ruta/a/tokens.css">
```

## Ver el demo

```sh
kiri-serve taller.html -d ~/Code/kiri-design -p 8792    # el explorador
kiri-serve galeria.html -d ~/Code/kiri-design -p 8792   # todo de corrido
```

El taller lee las fichas con `fetch`, así que **necesita HTTP**: abierto como
`file://` el navegador lo bloquea. Por eso `kiri-serve` y no `termux-open`.

## La regla central

> **El azul es la marca. El botón es tinta.**
> Área grande → `--kiri-marca`. Letra → `--kiri-marca-texto`.

El resto está en `DESIGN.md`.
