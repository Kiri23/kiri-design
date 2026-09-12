# Lista

**La estructura por defecto de Kiri.** Veinte tarjetas cansan; veinte filas
separadas por una línea de 1px se leen de un vistazo.

## Clases exactas

```html
<!-- Solo lectura -->
<ul class="kiri-lista">
  <li>
    <span class="nombre">Colmado Santa Rita</span>
    <span class="meta"><span>Toa Alta</span><span>4 cajas</span><span class="kiri-mono">$128.40</span></span>
  </li>
</ul>

<!-- Cada fila lleva a algún lado: la fila entera es el blanco -->
<ul class="kiri-lista kiri-lista--tocable">
  <li>
    <a href="/parada/12">
      <span class="cuerpo">
        <span class="nombre">Colmado Santa Rita</span>
        <span class="meta"><span>Toa Alta</span><span>4 cajas</span></span>
      </span>
      <span class="flecha" aria-hidden="true">›</span>
    </a>
  </li>
</ul>
```

## Cuándo usar cuál

| Qué tenés | Qué va |
|---|---|
| Cosas que se **miran** una por una | `.kiri-lista` |
| Cosas que se **abren** | `.kiri-lista--tocable` con `<a>` |
| Cosas que **disparan** algo ahí mismo | `.kiri-lista--tocable` con `<button type="button">` |
| Números que se **comparan** entre filas | `.kiri-tabla`, no lista |
| Ajustes que se prenden y apagan | `.kiri-opcion`, no lista |
| Una sola cosa con varios datos | `.kiri-panel`, no una lista de uno |

La pregunta que decide entre lista y tabla: **¿el ojo va a saltar de un número
al de la fila de abajo?** Si sí, es tabla. Si lee fila por fila, es lista.

## Reglas

- `.nombre` es lo que la persona busca con el ojo: va primero y en `--kiri-t-md`.
- `.meta` es un flex con `gap`: dos a cuatro datos cortos, en el orden en que se
  usan. No es una oración.
- Los montos de `.meta` van con `.kiri-mono`, aunque no se comparen: el número
  con letra de número se lee más rápido.
- En `--tocable`, el `<a>`/`<button>` es el que mide 46px, **no el `li`**: si el
  blanco es el `li`, el tinte del `:active` no coincide con lo que se tocó.
- La flecha es `aria-hidden`: el destino lo dice el `<a>`, no el glifo.
- La última fila **no** lleva línea de abajo si la lista termina la pantalla:
  una regla suelta al aire se lee como "hay más y no cargó".
- Nada de `hover` como única señal: `:active` también, o en el teléfono la fila
  se siente muerta.
- Lista vacía → `.kiri-vacio`. Nunca una lista de cero filas con el borde puesto.
