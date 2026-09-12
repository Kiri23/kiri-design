# Tabla

Para datos que **se comparan** entre sí. Si no se comparan, es una `.kiri-lista`.

> Regla de decisión: ¿el usuario va a leer dos filas a la vez para ver cuál es mayor?
> Sí → tabla. No → lista.

## Clases exactas

```html
<div class="kiri-tabla-marco">
  <table class="kiri-tabla">
    <thead>
      <tr><th>Pueblo</th><th class="num">Paradas</th><th class="num">Km</th></tr>
    </thead>
    <tbody>
      <tr><td>Bayamón</td><td class="num">6</td><td class="num">14.2</td></tr>
      <tr class="marcada"><td>Toa Alta</td><td class="num">4</td><td class="num">9.8</td></tr>
      <tr><td>Dorado</td><td class="num">4</td><td class="vacia">—</td></tr>
    </tbody>
    <tfoot>
      <tr><td>Total</td><td class="num">14</td><td class="num">24.0</td></tr>
    </tfoot>
  </table>
</div>
```

## Cuándo usar cuál

| Clase | Cuándo |
|---|---|
| `.kiri-tabla-marco` | **Siempre.** Es el que rueda de lado en un teléfono. |
| `.kiri-tabla` | La tabla. |
| `th.num` / `td.num` | Toda columna de números. A la derecha y en mono. |
| `tr.marcada` | Una fila destacada. Tinte de marca. |
| `td.vacia` | Un dato que no hay. Poné `—`, nunca blanco. |
| `--compacta` | Más de ~12 filas. |
| `--tocable` | La fila entera es un enlace. Sube las celdas a 46px. |

## Reglas

- **La tabla va siempre dentro de `.kiri-tabla-marco`.** Sin el marco, una tabla ancha hace
  que ruede la página entera de lado, y eso rompe la pantalla en un teléfono.
- **Los números van a la derecha y en mono** (`.num`). Alineados a la izquierda no se
  pueden comparar de un vistazo: es el único motivo por el que existe una tabla.
- La **primera columna es el nombre** y va en negrita: es la que busca el ojo.
- Sin franjas de color alternadas (zebra). Separan las líneas de 1px.
- El total va en `tfoot`, separado con una regla de 2px — no con negrita sola.
- **Nunca más de 4 columnas en móvil.** Si hace falta una quinta, es dos tablas o es una lista.
- Celda sin dato: `—` en gris. El blanco se lee como error.
