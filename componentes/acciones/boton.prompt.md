# Botón

El botón de Kiri: **un solo verbo dominante por pantalla, el resto cede.**

## Clases exactas

```html
<button class="kiri-btn kiri-btn--primario">Entregado</button>
<button class="kiri-btn">No pude</button>
<button class="kiri-btn kiri-btn--marca">Ver la ruta</button>
<button class="kiri-btn kiri-btn--texto">Cancelar</button>
<button class="kiri-btn kiri-btn--peligro">Borrar la tanda</button>
<button class="kiri-btn kiri-btn--primario kiri-btn--ancho">Empezar la ruta</button>
<button class="kiri-btn" disabled>Calcular</button>

<!-- Dos acciones del mismo peso: ninguna es primaria -->
<div class="kiri-acciones">
  <button class="kiri-btn">Sacar foto</button>
  <button class="kiri-btn">Elegir del carrete</button>
</div>

<!-- Cuando envuelve un input de archivo, es label, no button -->
<label class="kiri-btn kiri-btn--primario">Subir<input type="file" hidden></label>
```

## Cuándo usar cuál

| Variante | Cuándo |
|---|---|
| `--primario` | **La** acción de la pantalla. Tinta llena. Una sola, nunca dos. |
| *(base, sin modificador)* | Acción secundaria, o dos acciones que pesan igual. |
| `--marca` | Azul llena. **Solo para continuar**: bienvenida, onboarding, "ver la ruta". Ver la prueba de abajo. |
| `--texto` | Terciario. Lo que no se toca manejando: "cancelar", "editar a mano". |
| `--peligro` | Destruye algo. Sin caja, solo texto coral. Nunca lleno. |
| `--ancho` | Ocupa la fila completa y mide 54px. Para el verbo grande al final de la pantalla. |

## La excepción del azul, y cómo se prueba

La regla central dice que el azul es la marca y no la acción. `--marca` es la única
excepción y existe por un caso real: el botón de **continuar** en un onboarding sí es
una acción, pero es una acción sin elección — no hay nada que decidir, solo seguir.
Eso lo pone más cerca de navegar que de confirmar, y ahí el azul corresponde.

**Continuar** mueve hacia adelante y no compromete nada: "Empezar la ruta",
"Siguiente", "Ver la ruta". Va en `--marca`.
**Confirmar** escribe algo que después hay que poder discutir: "Entregado",
"Guardar", "Borrar la tanda". Va en `--primario`, en tinta.

Dos preguntas, y con que una dé *sí* el azul está mal:

1. ¿Hay **otra acción** en la pantalla? → `--primario`.
2. ¿El botón **escribe un dato**? → `--primario`.

Una pantalla de un solo paso que no guarda nada es el único lugar donde las dos dan
*no*. Por eso `--marca` se ve tan poco: si lo estás usando seguido, algo está mal.

## Reglas

- **Nunca dos botones llenos en la misma vista.** Llenos son `--primario` y `--marca`.
- El azul (`--marca`) **no confirma nada.** Confirmar es tinta. Si un botón azul dice
  "Entregado", está mal.
- `:active` hace `scale(.98)` y ninguna otra animación.
- Alto mínimo 46px (`--kiri-tocable`); `--ancho` va a 54px.
- `disabled` usa `--kiri-apagado-fondo` y `--kiri-apagado`, **no `opacity`**: bajar la
  opacidad del botón arrastra su texto por debajo de 4.5:1. **No se esconde** — el
  usuario tiene que ver que la acción existe pero todavía no se puede.
- Nunca `hover` como única señal: en un teléfono no hay cursor.
