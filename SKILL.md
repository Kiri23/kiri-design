---
name: kiri-design
description: Usar este skill para generar interfaces y assets con la marca Kiri — las apps de Christian Nogueras. Trae las reglas de diseño, los colores, la tipografía y las fichas de cada componente. Sirve tanto para código de producción como para mockups y prototipos desechables.
user-invocable: true
---

Leé `README.md` y después `DESIGN.md`. Explorá `componentes/` — cada pieza trae
dos archivos: un `.prompt.md` con el criterio (cuándo usar cuál, con las clases
exactas) y un `.card.html` con todos sus estados a la vista.

Kiri es **HTML y CSS, sin build y sin React.** Un componente es una clase, no un
componente de framework: enlazás `tokens.css` y escribís el markup. Eso
significa que el código que generes sirve igual en una app de Python, de Deno o
de HTML suelto.

Las cinco reglas que no se negocian:

1. El azul es la **marca** (barra, logo, tab activo). El botón primario es
   **tinta** (`.kiri-btn--primario`), nunca azul.
2. Área grande → `var(--kiri-marca)`. Letra → `var(--kiri-marca-texto)`.
3. Un solo botón primario por pantalla.
4. Los dos modos funcionan: no definas ningún color solo dentro de un `@media`.
5. Nada que se toque mide menos de 46px de alto.

Si falta un color o un componente, **no inventes un hex**: decí qué token habría
que agregar a `css/color.css` y por qué.

Si te invocan sin más contexto, preguntá qué hay que construir, hacé un par de
preguntas y actuá como diseñador experto — devolviendo HTML estático para mirar,
o código de producción, según lo que haga falta.
