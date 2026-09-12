# Panel

La única superficie elevada de Kiri. **Se usa poco a propósito.**

## Clases exactas

```html
<div class="kiri-panel">
  <p>Un panel envuelve UNA cosa con varios datos.</p>
</div>

<!-- Resumen: el caso típico -->
<div class="kiri-panel">
  <div class="kiri-lista"><li>…</li></div>
</div>
```

## Cuándo usarlo

| Situación | Qué va |
|---|---|
| **Una** cosa con varios datos (el resumen del día, una tanda) | `.kiri-panel` |
| Un formulario corto que es una unidad | `.kiri-panel` |
| Muchas cosas parecidas | `.kiri-lista`, **nunca** un panel por fila |
| Números que se comparan | `.kiri-tabla-marco` (ya trae su superficie) |
| Texto que solo informa | `.kiri-aviso` |

**La regla de oro: si vas a poner dos paneles iguales uno debajo del otro, era
una lista.** El panel existe para decir "esto es una unidad", y si todo es una
unidad, nada lo es.

## Reglas

- **Máximo dos niveles de elevación por pantalla.** `fondo` → `panel`. El tercero
  (`panel-alto`) está reservado para la hoja, que flota sobre todo.
- Nunca un panel dentro de un panel. Si hace falta, lo de adentro es una lista o
  una regla fina.
- En oscuro la elevación es **color** (`--kiri-panel`), no sombra: `--kiri-sombra`
  es `none`. En claro hay `0 1px 2px` y nada más.
- Sin sombras de color, sin `blur` de fondo, sin borde de acento a la izquierda.
- El radio es `--kiri-r-lg`; el padding es `--kiri-e-4`. No se negocian por pantalla.
- Un panel no lleva su propio título en `h1`: el `h1` es el de la barra. Si el
  panel necesita título, es `h2` o una etiqueta de 12px en mayúsculas.
