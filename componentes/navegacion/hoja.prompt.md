# Hoja

El diálogo del teléfono. **Sube desde abajo, porque el pulgar está abajo.**
Es un `<dialog>` nativo: Esc, foco atrapado y bloqueo de scroll salen gratis.

## Clases exactas

```html
<dialog class="kiri-hoja" id="hoja-cobro">
  <div class="tirador" aria-hidden="true"></div>
  <h2>Cobro de Colmado Santa Rita</h2>
  <div class="cuerpo">
    <label class="kiri-campo"><span>Monto</span><input type="number" inputmode="decimal"></label>
    <p class="kiri-aviso">Quedaba un balance de $42.10 de la tanda anterior.</p>
  </div>
  <div class="pie">
    <button class="kiri-btn" onclick="hojaCobro.close()">Cancelar</button>
    <button class="kiri-btn kiri-btn--primario">Guardar</button>
  </div>
</dialog>

<script>
  document.getElementById('hoja-cobro').showModal();  // abrir
</script>
```

## Cuándo usarla

| Situación | Qué va |
|---|---|
| Un dato que hace falta ahora sin perder la pantalla de atrás | **Hoja** |
| Confirmar algo destructivo | Hoja, con el verbo real en el botón (`Borrar la tanda`, no `OK`) |
| Elegir de una lista corta | Hoja con `.kiri-lista--tocable` en el cuerpo |
| Un formulario de más de ~4 campos | Pantalla propia, no hoja |
| Un aviso que no se responde | `.kiri-toast`, no hoja |

## Reglas

- Se abre con `.showModal()` y se cierra con `.close()`. **Nunca** con una clase
  ni con `display`: sin `showModal` no hay foco atrapado ni `::backdrop`.
- El velo es `--kiri-velo` en `::backdrop`. Sin `blur` de fondo.
- Las acciones van en `.pie`, **pegadas abajo y fuera del scroll**: el cuerpo rueda,
  el pie no. Un botón primario, uno solo.
- `max-height: 88dvh` — la hoja nunca tapa la pantalla entera; ver el borde de lo
  que está atrás es lo que la hace una hoja y no una pantalla.
- El `.tirador` es decoración honesta (`aria-hidden`): dice "esto se arrastra".
- El primer elemento enfocable no es el botón destructivo.
- Nunca una hoja dentro de otra hoja.
