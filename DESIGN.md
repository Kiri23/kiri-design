# Kiri · DESIGN.md

El lenguaje visual de las aplicaciones de Christian Nogueras.
Un agente que lea este archivo debe poder construir una pantalla nueva sin
preguntar nada, y que esa pantalla se vea hermana de las demás.

**La fuente de verdad es el CSS.** Este archivo explica *por qué*; si los dos se
contradicen, manda el CSS.

| Archivo | Qué tiene |
|---|---|
| `tokens/colors.css` | los colores, en sus dos modos |
| `tokens/typography.css` | las letras y la escala |
| `tokens/spacing.css` | el aire, las esquinas, el mínimo tocable |
| `kiri.css` | los componentes |
| **`kiri-todo.css`** | **lo único que una app enlaza** — junta los cuatro |

Un token nuevo va en el archivo de `tokens/` que le toca, nunca en `kiri.css`.

---

## 1 · Tema y atmósfera

Herramientas de oficio, no productos de consumo. Kiri se parece a un
**instrumento**: denso, legible, sin adorno, hecho para usarse con una mano en
un teléfono mientras pasa otra cosa (conducir, repartir, caminar).

- **Oscuro es el modo de origen.** El claro existe y está completo, pero el
  sistema se diseñó de noche. Razón real: Christian trabaja en el teléfono y el
  fondo blanco lo enceguece.
- **Densidad media-alta.** Cabe información. No se reparte aire para que
  "respire": el aire se usa para separar lo que de verdad es distinto.
- **Calma.** Sin gradientes, sin glassmorphism, sin sombras grandes, sin
  animación decorativa. El único movimiento permitido es acuse de recibo (un
  botón que se hunde 2% al tocarlo).
- **Reglas finas antes que tarjetas.** Una lista de veinte tarjetas cansa; una
  lista de veinte filas separadas por una línea de 1px se lee.

## 2 · Paleta y roles

### La regla que gobierna todo el color

> **El azul es la MARCA, no la ACCIÓN.**
> El botón que se toca es **tinta** (casi negro en claro, casi blanco en oscuro).

Esto es deliberado y es la decisión más importante del sistema. El azul es el
color que te identifica: vive en la barra, en el logo, en el tab activo, en los
acentos. Si el azul también fuera el botón, el logo competiría con cada botón de
cada pantalla y la marca se volvería invisible por repetición.

### El azul tiene dos valores, según el TAMAÑO

No son dos azules. Es el mismo azul con distinta luz, porque la letra chica
necesita más luz que un bloque grande para leerse igual.

| Rol | Token | Dónde va | Claro | Oscuro |
|---|---|---|---|---|
| Azul **grande** | `--kiri-marca` | barras, logo, rellenos, medidores, tab activo | `#1483C8` | `#2D93D2` |
| Azul **de letra** | `--kiri-marca-texto` | links, etiquetas, texto en azul | `#106AA2` | `#60B6EB` |
| Fondo teñido | `--kiri-marca-tinte` | avisos de marca, filas destacadas | `#E9F3FA` | `#0D2332` |
| Encima del azul | `--kiri-sobre-marca` | texto sobre un relleno azul | `#FFFFFF` | `#08151C` |

Si estás pintando un área de más de ~40×40px → `--kiri-marca`.
Si estás pintando letra → `--kiri-marca-texto`. Sin excepciones.

### Neutros

`--kiri-fondo` → `--kiri-panel` → `--kiri-panel-alto` es la escala de
superficie. `--kiri-tinta` es el texto principal **y** el fondo del botón
primario: ese doble uso es lo que hace que `.kiri-btn--primario` funcione en los
dos modos con una sola regla.

### Estado

`--kiri-bien` (verde), `--kiri-mal` (coral), `--kiri-ojo` (ámbar). Los tres son
cálidos o verdes a propósito: están lejos del azul en el círculo, así que un
error nunca se confunde con la marca.

## 3 · Tipografía

| Token | Fuente | Para qué |
|---|---|---|
| `--kiri-ui` | **Space Grotesk** | apps: barras, botones, listas, formularios |
| `--kiri-lectura` | **Newsreader** | texto largo: lecciones, docs, artículos |
| `--kiri-mono` | **JetBrains Mono** | números que se alinean, códigos, código |

Dos familias porque hay dos productos distintos: una app de reparto y una
lección de ontología no deberían verse igual. La paleta los hermana; la letra
los distingue.

Escala: `--kiri-t-xs` 12 · `sm` 13.5 · `base` 16 · `md` 17.5 · `lg` 20 · `xl` 26.

- Títulos con `letter-spacing: -.02em` a `-.03em`. Space Grotesk se abre sola.
- **Los inputs van en 16px.** Menos y Safari/Chrome hacen zoom al enfocar.
- Mayúsculas solo en etiquetas de formulario y en nombres de pueblo, a 12px con
  `letter-spacing: .05em`. Nunca en frases.

Cargar:

```html
<link rel=preconnect href="https://fonts.googleapis.com">
<link rel=preconnect href="https://fonts.gstatic.com" crossorigin>
<link rel=stylesheet href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Newsreader:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@500;700&display=swap">
```

## 4 · Componentes

Las clases viven en `kiri-todo.css`. Todas llevan prefijo `kiri-`.

| Clase | Notas |
|---|---|
| `.kiri-barra` + `h1` + `.kiri-marca-punto` | El punto azul junto al título ES el logo. |
| `.kiri-tab` + `.kiri-cuenta` | Estado activo con `aria-selected="true"`, no con una clase. |
| `.kiri-btn` | Base. `--primario` (tinta), `--marca` (azul), `--texto`, `--peligro`, `--ancho`. |
| `.kiri-link` | Azul de letra + subrayado. |
| `.kiri-panel` | Superficie elevada. |
| `.kiri-aviso` | `--marca`, `--bien`, `--mal`, `--ojo`. |
| `.kiri-vacio` | Pantalla sin datos. `<strong>` = la frase grande. |
| `.kiri-lista` | `li` con `.nombre` y `.meta`. |
| `.kiri-tabla` + `.kiri-tabla-marco` | **Siempre** dentro del marco: es el que rueda de lado. Números con `.num` (derecha + mono). `--compacta`, `--tocable`. |
| `.kiri-campo` | `label.kiri-campo > span` + input. |
| `.kiri-chip`, `.kiri-medidor`, `.kiri-toast` | |
| `.kiri-lectura` | Envoltura de texto largo: serif, 38rem de ancho. |

Cada pieza tiene **dos archivos** en `componentes/<grupo>/`:

| | Para quién | Qué hace |
|---|---|---|
| `<pieza>.prompt.md` | el agente | **cuándo usar cuál**, en prosa, con las clases exactas |
| `<pieza>s.card.html` | vos | la ficha visual: todos los estados juntos, incluido lo que está mal |

Las fichas son HTML y CSS puro — sin React, sin build, sin CDN de scripts. Verlas todas:
`kiri-serve galeria.html -d ~/Code/kiri-design -p 8792`.

**Un solo botón primario por pantalla.** Si hay dos acciones del mismo peso,
ninguna es primaria: las dos van `.kiri-btn` base.

Estados obligatorios en todo lo que se toca: reposo, `:active` (hundir 2%),
`:focus-visible` (anillo de 2px en azul de letra), `:disabled` (45% opacidad).

## 5 · Layout

- **Una columna.** `max-width: 640px` para apps (`.kiri-pantalla`), `38rem` para
  lectura. Nunca dos columnas en móvil.
- Aire en escala de 4: `--kiri-e-1` 4 · `e-2` 8 · `e-3` 12 · `e-4` 16 · `e-5` 24
  · `e-6` 36. No inventes valores intermedios.
- `--kiri-tocable: 46px` es el mínimo de cualquier cosa que se toque. El botón
  ancho va 54px.
- Respetar `env(safe-area-inset-top/bottom)` en barras y en el fondo del body.

## 6 · Profundidad

En **oscuro** la elevación es **color**, no sombra: `fondo` → `panel` →
`panel-alto`. `--kiri-sombra` es `none`.
En **claro** hay una sombra mínima (`0 1px 2px`) y nada más.

Nunca más de dos niveles de elevación en una pantalla. Sin sombras de colores,
sin `blur` de fondo.

## 7 · Sí y no

**Sí**
- Azul para identidad, tinta para acción.
- Un primario por pantalla.
- Reglas finas para listas.
- Los dos modos definidos completos, siempre.
- Clases en español, prefijo `kiri-`.
- `aria-selected` / `aria-current` para estado, no solo clases.

**No**
- ❌ Botón primario azul (rompe la regla central).
- ❌ Azul oscuro como letra chica sobre fondo oscuro: no se lee. Usá
  `--kiri-marca-texto`.
- ❌ Gradientes, glassmorphism, sombras de color, animación decorativa.
- ❌ Texto gris sobre gris por debajo de 4.5:1.
- ❌ Inventar un hex en un componente. Si falta un color, se agrega un token.
- ❌ Tocables por debajo de 46px.
- ❌ Una `<table>` sin `.kiri-tabla-marco`: hace rodar la página entera de lado.
- ❌ Números de tabla a la izquierda o sin mono: la tabla existe para comparar.
- ❌ Definir un color SOLO dentro del `@media` de claro: todo token existe en
  `:root` (oscuro) primero.

## 8 · Responsive

Móvil primero, un Pixel es el caso de diseño. Breakpoint único: **720px**, y
solo para dejar de estirar (el `max-width` ya hace casi todo el trabajo).

- Nada de `hover` como única señal: el teléfono no tiene cursor.
- `-webkit-tap-highlight-color: transparent` y dar feedback propio.
- `@media (prefers-reduced-motion: reduce)` apaga todo el movimiento.

## 9 · Prompt para agentes

Pegá esto al pedirle una pantalla a cualquier agente:

```
Usá el design system Kiri. Leé ~/Code/kiri-design/DESIGN.md y enlazá
~/Code/kiri-design/kiri-todo.css — no escribas CSS nuevo de colores ni de
tipografía, usá solo tokens var(--kiri-*) y clases .kiri-*.

Las cinco reglas que no se negocian:
1. El azul es la MARCA (barra, logo, tab activo). El botón primario es TINTA
   (.kiri-btn--primario), nunca azul.
2. Área grande → var(--kiri-marca). Letra → var(--kiri-marca-texto).
3. Un solo botón primario por pantalla.
4. Los dos modos funcionan: no definas ningún color solo dentro de un @media.
5. Nada que se toque mide menos de 46px de alto.

Si te falta un color o un componente, NO inventes un hex: decime qué token
habría que agregar a tokens/colors.css y por qué.
```
