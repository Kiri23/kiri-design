# Campo

Una columna, campos grandes, etiqueta arriba. **Se llena con una mano, de pie.**

## Clases exactas

```html
<label class="kiri-campo">
  <span>Monto cobrado</span>
  <input type="number" inputmode="decimal">
  <span class="ayuda">Lo que te dieron hoy, sin contar el balance viejo.</span>
</label>

<!-- Con error: el mensaje va en el MISMO hueco que la ayuda -->
<label class="kiri-campo kiri-campo--mal">
  <span>Monto cobrado</span>
  <input type="number" inputmode="decimal" aria-invalid="true" aria-describedby="e-monto" value="-5">
  <span class="ayuda" id="e-monto">El monto no puede ser negativo.</span>
</label>

<label class="kiri-campo"><span>Pueblo</span>
  <select><option>Toa Alta</option><option>Bayamón</option></select>
</label>

<label class="kiri-campo"><span>Nota</span><textarea rows="3"></textarea></label>
```

## Reglas

- La etiqueta va **arriba**, en mayúsculas de 12px. Nunca al lado, nunca dentro
  del input como placeholder: el placeholder se va justo cuando lo necesitás.
- **16px en el input** (`--kiri-t-base`). Con menos, Safari y Chrome hacen zoom al
  enfocar y la pantalla salta.
- El teclado correcto siempre: `inputmode="decimal"` para montos, `numeric` para
  cantidades, `tel`, `email`. Es la diferencia entre dos toques y ocho.
- **Error e ayuda comparten el hueco**, así el formulario no salta al validar.
- El error se anuncia con `aria-invalid` + `aria-describedby`, **no solo con color**.
- El mensaje dice **qué arreglar**: "El monto no puede ser negativo", no "Inválido".
- Se valida al salir del campo o al enviar. **Nunca mientras se escribe**: marcar
  en rojo un campo a medio escribir es agresión.
- Deshabilitado usa `--kiri-apagado-fondo`. Si el campo no aplica, mejor no
  mostrarlo que mostrarlo muerto.
- Un campo por fila. Dos campos al lado solo si son una sola cosa (día y mes).
- El orden es el de la conversación real, no el de la base de datos.
