# Kiri · tareas

Lo que el sistema todavía no decidió. No son bugs: son decisiones sin tomar.

Esto vive acá y **no** en `github.md`: ese archivo lo reescribe la app de Claude
Design en cada sincronización, así que lo que se anote ahí se pierde.

---

## Decidido

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

- `DESIGN.md` §9 (el prompt para pegarle a un agente) tiene rutas absolutas de un
  teléfono: `~/Code/kiri-design`. Un agente en la nube no lo puede seguir.
- Falta `guidelines/`: fichas de fundamento — una decisión por ficha con su token
  al lado, no un componente. El patrón está en el proyecto de Claude Design
  `f1ec5e5a-1dfb-49aa-a326-f543a9e23ea9`, que tiene 16.
