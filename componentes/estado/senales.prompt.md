# Señales · chip, medidor, toast, esqueleto

Las cuatro piezas chicas que informan sin ocupar una fila entera.
Ninguna se toca; todas dicen **en qué estado está algo**.

## Clases exactas

```html
<span class="kiri-chip">4 cajas</span>
<span class="kiri-chip kiri-chip--marca">Hoy</span>
<span class="kiri-chip kiri-chip--bien">Hecho</span>
<span class="kiri-chip kiri-chip--mal">Sin cobrar</span>
<span class="kiri-chip kiri-chip--ojo">Pendiente</span>

<div class="kiri-medidor"><i style="width:78%"></i></div>

<div class="kiri-toast" role="status">Se guardó la parada.</div>

<span class="kiri-esqueleto kiri-esqueleto--titulo"></span>
<span class="kiri-esqueleto kiri-esqueleto--linea kiri-esqueleto--corta"></span>
```

## Cuándo usar cuál

| Pieza | Dice | Dónde vive |
|---|---|---|
| `.kiri-chip` | El estado de **una** fila, en dos palabras | dentro de una fila o al lado de un título |
| `.kiri-medidor` | Cuánto falta, de algo con final conocido | en un panel de resumen |
| `.kiri-toast` | Pasó lo que pediste (o no) | flotando abajo, se va solo |
| `.kiri-esqueleto` | Está cargando, y va a medir **esto** | en el lugar exacto del contenido |

## Reglas

**Chip.** Dos palabras, nunca tres. No se toca: si se toca, es un botón o un tab.
El color repite lo que ya dice el texto — un chip que solo es color no comunica.
Máximo un chip por fila.

**Medidor.** Solo si el final es conocido (11 de 14 paradas). Para algo sin final
no hay medidor: hay esqueleto. El relleno es `--kiri-marca` (área grande) y
siempre va acompañado del número en letra: la barra sola es decorativa.

**Toast.** `role="status"` para que el lector lo anuncie. Uno a la vez, y el
nuevo reemplaza al viejo — nunca una pila. Se va a los ~4 s, y **nunca** lleva la
única forma de deshacer algo importante: lo que se puede perder va en una hoja.
Tinta llena, porque es el único elemento que tapa contenido.

**Esqueleto.** Del tamaño y la forma de lo que viene, en el lugar donde va a
aparecer. **Nunca un spinner centrado**: el spinner no dice ni cuánto ni qué.
Dos o tres filas alcanzan, no hace falta simular la lista entera.
`prefers-reduced-motion` apaga el latido (ya lo hace `base.css`).
