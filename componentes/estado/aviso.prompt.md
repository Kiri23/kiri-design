# Aviso y pantalla vacía

Las dos formas de hablarle al usuario sin pedirle nada.
`.kiri-aviso` explica una condición; `.kiri-vacio` explica que no hay nada.

## Clases exactas

```html
<p class="kiri-aviso">La última sincronización fue hace 4 minutos.</p>
<p class="kiri-aviso kiri-aviso--marca">Quedan 3 paradas en la ruta de hoy.</p>
<p class="kiri-aviso kiri-aviso--bien">Se subieron las 14 entregas.</p>
<p class="kiri-aviso kiri-aviso--mal">No se pudo guardar: no hay señal.</p>
<p class="kiri-aviso kiri-aviso--ojo">Hay 2 cobros sin sincronizar desde ayer.</p>

<div class="kiri-vacio">
  <strong>No hay paradas todavía</strong>
  Cargá una tanda y las paradas aparecen acá en el orden que las pongas.
  <div style="margin-top:var(--kiri-e-4)"><button class="kiri-btn kiri-btn--primario">Cargar una tanda</button></div>
</div>
```

## Cuándo usar cuál

| Variante | Cuándo | Ejemplo |
|---|---|---|
| *(base)* | Contexto neutro que ayuda pero no cambia nada. | "Sincronizado hace 4 minutos" |
| `--marca` | Algo de la app en sí: el estado de tu trabajo. | "Quedan 3 paradas" |
| `--bien` | Terminó bien y el usuario no lo vio terminar. | "Se subieron las 14 entregas" |
| `--mal` | Falló y **hay algo que hacer**. | "No se pudo guardar: no hay señal" |
| `--ojo` | Todavía no falló, pero va a fallar. | "2 cobros sin sincronizar" |
| `.kiri-vacio` | La lista está vacía **y eso es normal**. | Primera vez, filtro sin resultados |

Si el aviso es respuesta a algo que el usuario acaba de tocar y se puede ir solo,
es `.kiri-toast`, no aviso.

## Reglas

- **El aviso dice qué pasó y qué hacer.** "Error" no es un aviso; "No se pudo
  guardar: no hay señal, se reintenta solo" sí.
- Color **nunca** como única señal: el texto tiene que funcionar en blanco y negro.
  Ningún aviso lleva ícono como portador único del significado.
- Uno por pantalla. Dos avisos apilados significan que la pantalla hace demasiado.
- `--mal` no es para validar un campo: eso va en `.kiri-campo--mal` con `.ayuda`,
  pegado al input.
- `.kiri-vacio` **no es un error.** Sin coral, sin ícono triste: es una invitación.
  `<strong>` es la frase grande; el resto explica cómo se llena.
- Vacío con acción: un solo botón, y es el que llena la lista.
- Máximo 34ch de ancho (`.kiri-vacio` ya lo hace): una frase que cruza la pantalla
  entera no se lee de un vistazo.
