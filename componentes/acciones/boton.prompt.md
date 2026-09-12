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
| `--marca` | Azul llena. **Solo** para navegar hacia algo que es la app en sí (ver la ruta, abrir el panel). No para confirmar. |
| `--texto` | Terciario. Lo que no se toca manejando: "cancelar", "editar a mano". |
| `--peligro` | Destruye algo. Sin caja, solo texto coral. Nunca lleno. |
| `--ancho` | Ocupa la fila completa y mide 54px. Para el verbo grande al final de la pantalla. |

## Reglas

- **Nunca dos botones llenos en la misma vista.** Llenos son `--primario` y `--marca`.
- El azul (`--marca`) **no confirma nada.** Confirmar es tinta. Si un botón azul dice
  "Entregado", está mal.
- `:active` hace `scale(.98)` y ninguna otra animación.
- Alto mínimo 46px (`--kiri-tocable`); `--ancho` va a 54px.
- `disabled` baja a 45% de opacidad y corta los eventos. **No se esconde** — el usuario
  tiene que ver que la acción existe pero todavía no se puede.
- Nunca `hover` como única señal: en un teléfono no hay cursor.
