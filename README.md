# kiri-design

El design system de Christian Nogueras. Dos archivos hacen el trabajo:

| Archivo | Qué es |
|---|---|
| [`kiri-todo.css`](./kiri-todo.css) | **El único que enlazás.** Junta los cuatro de abajo. Sin build. |
| [`tokens/colors.css`](./tokens/colors.css) | Los colores, en sus dos modos. |
| [`tokens/typography.css`](./tokens/typography.css) | Las letras y la escala de tamaños. |
| [`tokens/spacing.css`](./tokens/spacing.css) | El aire, las esquinas y el mínimo tocable. |
| [`kiri.css`](./kiri.css) | Los componentes (`.kiri-btn`, `.kiri-tabla`…). Necesita los tokens. |
| [`DESIGN.md`](./DESIGN.md) | El porqué, en un formato que un agente puede seguir. Incluye el prompt. |
| [`demo.html`](./demo.html) | La prueba: pantallas reales de Rutero, Notif, Mail y los cursos sin un solo hex propio. |
| [`galeria.html`](./galeria.html) | **La galería.** Una ficha por pieza con todos sus estados. |
| `componentes/<grupo>/` | Por pieza: un `.prompt.md` (el criterio) y un `.card.html` (la ficha visual). |

## Usarlo en una app

```html
<link rel=stylesheet href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Newsreader:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@500;700&display=swap">
<link rel=stylesheet href="ruta/a/kiri-todo.css">
```

## Ver el demo

```sh
kiri-serve galeria.html -d ~/Code/kiri-design -p 8792
```

## La regla central

> **El azul es la marca. El botón es tinta.**
> Área grande → `--kiri-marca`. Letra → `--kiri-marca-texto`.

El resto está en `DESIGN.md`.
