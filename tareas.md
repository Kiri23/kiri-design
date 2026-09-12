# Kiri · tareas

Lo que el sistema todavía no decidió. No son bugs: son decisiones sin tomar.

Esto vive acá y **no** en `github.md`: ese archivo lo reescribe la app de Claude
Design en cada sincronización, así que lo que se anote ahí se pierde.

---

## Decidido

### Los pares de `light-dark()` estaban al revés — 2026-09-12

Encontrado al verificar en Chrome si `color-scheme` en un div alcanzaba para
mostrar los dos modos en una ficha. **Alcanza** (Chrome 152, medido en el
Pixel), pero la medición salió invertida y el motivo no era la premisa: era
`css/color.css`.

`light-dark(A, B)` usa **A cuando el modo es claro**. Kiri había escrito los 26
pares como `light-dark(oscuro, claro)`, con un comentario que documentaba el
error como si fuera la regla. Consecuencia: `<html>` en un teléfono en modo
oscuro renderizaba la paleta **clara**, y `data-kiri="claro"` renderizaba la
**oscura**. Todo el sistema estaba dado vuelta, incluido `thumbnail.html`.

Arreglado: los 26 pares invertidos, y el comentario de `color.css`, `DESIGN.md`
§2 y el `README.md` ahora dicen el orden de la especificación. Verificado
después del cambio: `color-scheme: light` → `#F8FAFB` de fondo con tinta
`#141C20`; `color-scheme: dark` → `#0F1417` con `#E6ECEF`.

**Lo que queda por mirar:** las once fichas de componente y `demo.html` se
diseñaron mirándolas invertidas. Ninguna define un hex propio, así que ninguna
se rompe — pero nadie las vio todavía en el modo que de verdad les toca.

### `guidelines/` existe — 2026-09-12

Dieciséis fichas de fundamento en `guidelines/`, con `guia.css` compartida y un
solo criterio (`fundamentos.prompt.md`), porque el argumento de cada fundamento
está escrito en la ficha misma. Grupo **Fundamentos** en el taller y en la
galería.

Dos cubren huecos que el sistema no documentaba en ningún lado: **voz** (cómo se
escribe un mensaje) e **interacción** (`toque`, `toque-fuerte`, `velo`,
`apagado`, `apagado-fondo`).

Los dos modos van en **una** ficha, no dos: `color-scheme` en un div hermano.

Verificado, no supuesto: `node _verificar.mjs` da limpio sobre las 27 fichas y
**agarra las diez mutaciones** que se le tiraron. El desborde horizontal se
auditó en el Chrome del Pixel a 412 y 760px — 32 combinaciones, **cero**; y el
auditor mordió cuando se le inyectó un div de 900px en una ficha que daba
limpia.

### `DESIGN.md` §9 ya no tiene rutas de un teléfono — 2026-09-12

El prompt habla de rutas relativas a la raíz del repo `kiri-design` y explica
cómo ajustar el `href` de `tokens.css` según dónde esté el archivo. De paso, los
`kiri-serve` de `README.md`, `DESIGN.md` y `taller.html` perdieron el
`-d ~/Code/kiri-design`: sin `-d`, `kiri-serve` ya sirve la raíz del repo git.

### `.kiri-btn--marca` se queda — 2026-09-12

Estaba anotado como "decidir si se borra, contradice la regla central". No la
contradice: la afina.

El azul no es la acción, pero **continuar no es una acción con elección** — en un
onboarding no hay nada que decidir, solo seguir. Eso está más cerca de navegar
que de confirmar, y ahí el azul corresponde.

La excepción quedó escrita como prueba y no como gusto: dos preguntas, y con que
una dé *sí* el azul está mal.

1. ¿Hay **otra acción** en la pantalla?
2. ¿El botón **escribe un dato**?

Está en `DESIGN.md` §4 y en `componentes/acciones/boton.prompt.md`.

---

## Blanco sobre el azul de marca no llega a 4.5:1 en claro

Medido el 2026-09-12 con la fórmula de luminancia de WCAG 2.1 sobre los valores
de `css/color.css`:

| Par | Claro | Oscuro |
|---|---|---|
| `--kiri-tinta` / `--kiri-fondo` | 16.5:1 | 15.5:1 |
| `--kiri-tinta-suave` / `--kiri-fondo` | 5.3:1 | 6.2:1 |
| `--kiri-marca-texto` / `--kiri-fondo` | 5.6:1 | 8.3:1 |
| **`--kiri-sobre-marca` / `--kiri-marca`** | **4.11:1** | 5.5:1 |

Todos pasan salvo uno: **blanco sobre `#1483C8`, el azul de marca del modo
claro, da 4.11:1.** Pasa el piso de texto grande y de componente de interfaz
(3:1) — la barra, el logo y el tab activo están bien — pero no el de texto
normal (4.5:1), y `.kiri-btn--marca` es texto normal.

`DESIGN.md` §7 dice "nada de texto gris sobre gris por debajo de 4.5:1". La regla
existe; este par no la cumple y nadie lo había medido.

Las salidas, sin decidir:

- **Oscurecer `--kiri-marca` en claro un 5%,** a `#137CBE` → 4.51:1. Mismo tono,
  misma familia, y arregla todos los usos de una. El azul oscuro no se toca (ya
  da 5.5:1).
- **Dejar el azul y prohibir `.kiri-btn--marca` a tamaño normal** — subirlo a
  `--kiri-t-md` en negrita, que es texto grande. Contradice que el botón de
  continuar se vea como los otros botones.
- **Dejarlo como está** y escribir en `DESIGN.md` que el relleno azul es para
  texto grande y nada más.

No lo decido yo: el azul es la marca.

## Piezas que faltan

Cuatro cosas que las apps van a necesitar y el sistema todavía no tiene.

### Segmentado

Dos o tres opciones excluyentes en una píldora. Hoy hay `.kiri-tabs` (que dice
*qué parte de esta pantalla miro*) y radios (*una de pocas, todas visibles*). El
segmentado es una tercera cosa y no existe. Antes de agregarlo hay que poder
decir en una línea cuándo se usa en vez de las otras dos — si no se puede, no
hace falta.

### Confirmación destructiva, como una pieza

Hoy el "¿seguro que querés borrar?" se arma a mano cada vez con `.kiri-hoja` +
`.kiri-btn--peligro`. Cada pantalla reinventa el texto del botón y el orden del
foco. La ficha de la hoja ya fija las dos reglas que importan (el verbo real en
el botón, el foco arranca en la salida); falta que sean **una** pieza con nombre
en vez de una convención que hay que recordar.

### Toast apilado

`.kiri-toast` dice explícitamente "uno a la vez, el nuevo reemplaza al viejo".
No está decidido qué pasa cuando terminan dos cosas juntas: ¿se pisan, se
encolan, o el segundo se descarta? Hoy se pisan por omisión, que es una decisión
que nadie tomó.

### Convención de ícono

`DESIGN.md` admite que no hay set propio, y el nav usa glifos sueltos
(`▤ ◫ ◍ ≡`). Falta decidir cuáles, de qué tamaño, y si algún día son SVG. La
regla que ya existe y no se negocia: **el ícono nunca va solo**, siempre con
etiqueta.

---

## `.kiri-barra` se desborda por debajo de 351px

Medido el 2026-09-12 en el Pixel: con tabs, la barra necesita **351px de ancho
propio** y no avisa cuando no los tiene — los tabs se salen y se cortan contra el
borde. Ni el `h1` ni `.kiri-tabs` pueden encoger (los dos `flex: 0 1 auto` con
`min-width: auto`) y `.kiri-tabs` es `overflow-x: visible`.

Un Pixel de 412 entra con 61px de aire. Uno de 360 entra raspando. Con título
largo o tercer tab, no entra.

Auditadas las once piezas: **es la única que desborda**, no es un patrón del
sistema. Las dos salidas posibles están escritas en
`componentes/estructura/barra.prompt.md`:

- que `.kiri-tabs` ruede de lado — el idioma de `.kiri-tabla-marco`
- que baje a su propia fila

---

## Versión y changelog

El sistema no tiene número. Una app que enlaza `tokens.css` no puede decir "estoy
en Kiri 1.2", y cuando cambia un token o se renombra una clase no queda registro
salvo el `git log`. Importa porque los tokens ya se renombraron una vez
(`tokens.css` monolítico → `css/*`) y nada avisó.

---

## Deuda chica

Las dos que había quedaron hechas el 2026-09-12 — están arriba, en *Decidido*.
