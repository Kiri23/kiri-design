# Nav inferior

Los destinos de la app. **El pulgar llega abajo, no arriba.**

## Clases exactas

```html
<nav class="kiri-nav" aria-label="Secciones">
  <a href="/ruta"   aria-current="page"><span class="icono" aria-hidden="true">▤</span>Ruta</a>
  <a href="/tandas"><span class="icono" aria-hidden="true">◫</span>Tandas</a>
  <a href="/cobros"><span class="icono" aria-hidden="true">◍</span>Cobros</a>
  <a href="/ajustes"><span class="icono" aria-hidden="true">≡</span>Ajustes</a>
</nav>

<!-- La pantalla necesita piso o la última fila queda tapada -->
<main class="kiri-pantalla kiri-pantalla--con-nav">…</main>
```

## Cuándo usarlo

| Situación | Qué va |
|---|---|
| 2 a 5 destinos que se visitan todo el tiempo | `.kiri-nav` |
| 6 o más destinos | Ninguno: es un menú, y el menú va en una pantalla de ajustes |
| Vistas de un mismo destino (pendientes / hechas) | `.kiri-tabs` en la barra de arriba, no acá |
| Una acción, no un destino | Un botón. El nav navega, no ejecuta |

**Nav y tabs no compiten:** el nav dice *dónde estás en la app*, los tabs dicen
*qué parte de esta pantalla mirás*. Pueden estar los dos.

## Reglas

- Son `<a>` dentro de un `<nav aria-label>`. El activo lleva `aria-current="page"`,
  no una clase.
- El activo se marca con la **firma azul arriba** (`--kiri-b-firma` en `--kiri-marca`),
  igual que el tab: una sola gramática de "esto está activo" en todo el sistema.
- Etiqueta **siempre**, en `--kiri-t-xs`. Un ícono solo es una adivinanza.
- El ícono es un glifo o un SVG de 20px; no hay set de íconos propio todavía.
- 46px de alto mínimo, y `padding-bottom: env(safe-area-inset-bottom)` o el iPhone
  se come la fila.
- El contenido de la pantalla lleva `.kiri-pantalla--con-nav`. Sin eso, la última
  fila de la lista vive debajo del nav para siempre.
- Nunca más de un nav por app, y nunca uno arriba y otro abajo.
