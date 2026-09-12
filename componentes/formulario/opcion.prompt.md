# Opción · interruptor, casilla, radio

Un ajuste se toca en **toda la fila**, no en el cuadradito de 20px.
La `<label>` es el blanco; el control va a la derecha.

## Clases exactas

```html
<!-- Interruptor: se aplica solo, al instante -->
<label class="kiri-opcion">
  <span class="cuerpo">Avisar al llegar
    <span class="meta">Suena cuando entrás al radio del negocio</span></span>
  <input type="checkbox" class="kiri-interruptor" checked>
</label>

<!-- Casilla: se aplica al guardar, o marca varios de una lista -->
<label class="kiri-opcion">
  <input type="checkbox" checked>
  <span class="cuerpo">Incluir los pueblos sin paradas</span>
</label>

<!-- Radio: una de pocas, todas visibles -->
<fieldset style="border:0;padding:0;margin:0">
  <legend class="kiri-campo"><span>Orden de la ruta</span></legend>
  <label class="kiri-opcion"><input type="radio" name="orden" checked>
    <span class="cuerpo">Como la cargué</span></label>
  <label class="kiri-opcion"><input type="radio" name="orden">
    <span class="cuerpo">Más cerca primero</span></label>
</fieldset>
```

## Cuándo usar cuál

| Control | Cuándo | Lado |
|---|---|---|
| `.kiri-interruptor` | **Efecto inmediato**, sin botón de guardar. Enciende o apaga algo del sistema. | derecha |
| casilla | Se confirma con un botón, o se marcan varios de una lista. | izquierda |
| radio | Una de **2 a 4** opciones, todas a la vista. | izquierda |
| `<select>` | 5 o más opciones. Ya no es radio. | — |

El lado no es capricho: el interruptor a la derecha se lee como *estado del
sistema*; la casilla a la izquierda se lee como *algo que marqué yo*.

## Reglas

- La fila mide 46px (`--kiri-tocable`) aunque el control mida 21px.
- Encendido es `--kiri-marca`. **Acá el azul sí corresponde**: es estado, no acción —
  la regla "el azul no es el botón" habla de botones.
- Casilla y radio son nativos con `accent-color`. No los reimplementes con `div`:
  perdés teclado, lector de pantalla y autofill.
- La segunda línea va en `.meta`, nunca en un tooltip.
- Un interruptor **no** se acompaña de "Guardar". Si hay que guardar, es casilla.
- Deshabilitado usa `--kiri-apagado-fondo`, no `opacity`.
- La etiqueta dice qué pasa **cuando está encendido**. Nunca una negación
  ("Avisar al llegar", no "No avisar").
