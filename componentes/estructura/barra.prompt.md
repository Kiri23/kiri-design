# Barra

Arriba de toda pantalla. **Es el único lugar donde vive la marca.**
Tres piezas que son una: `.kiri-barra` + el punto + `.kiri-tabs`.

## Clases exactas

```html
<div class="kiri-barra">
  <h1><span class="kiri-marca-punto"></span>Ruta</h1>
  <div class="kiri-tabs" role="tablist">
    <button class="kiri-tab" role="tab" aria-selected="true">Pendientes <span class="kiri-cuenta">3</span></button>
    <button class="kiri-tab" role="tab" aria-selected="false">Hechas <span class="kiri-cuenta">7</span></button>
  </div>
</div>

<!-- Sin tabs: el título solo -->
<div class="kiri-barra"><h1><span class="kiri-marca-punto"></span>Cobros</h1></div>

<!-- Con una acción a la derecha -->
<div class="kiri-barra">
  <h1><span class="kiri-marca-punto"></span>Tandas</h1>
  <button class="kiri-btn kiri-btn--texto" style="margin-bottom:var(--kiri-e-2)">Nueva</button>
</div>
```

## Cuándo usar qué

| Pieza | Cuándo |
|---|---|
| `.kiri-marca-punto` | **Siempre** en la barra raíz de una app. Es el logo: un cuadrado azul, nada más. |
| `.kiri-tabs` | Dos a cuatro vistas **de la misma pantalla** (pendientes / hechas). |
| `.kiri-cuenta` | Solo si el número cambia algo de la decisión. Un `0` no se muestra: se muestra el tab sin cuenta. |
| Nada de tabs | Pantalla de detalle, formulario, lección. |

**Tabs no es nav.** Los tabs dicen *qué parte de esta pantalla mirás*; el
`.kiri-nav` de abajo dice *dónde estás en la app*. Pueden convivir.

## Reglas

- El punto es azul **grande** → `--kiri-marca`. Nunca `--kiri-marca-texto`.
- Un solo `h1` por pantalla, y es el de la barra.
- El activo se marca con `aria-selected="true"`, **no** con una clase: la firma
  azul de abajo (`--kiri-b-firma`) sale de ese atributo.
- La barra es `sticky` con `--kiri-z-barra` y respeta `env(safe-area-inset-top)`.
  Sin eso el título queda debajo del reloj del teléfono.
- El tab mide 46px de alto como cualquier cosa que se toca (`--kiri-tocable`).
  La firma azul se dibuja en el borde de abajo, no acortando el blanco.
- El fondo de la barra es `--kiri-fondo`, no `--kiri-panel`: se tiene que leer
  como el borde de la pantalla, no como una tarjeta.
- Nunca dos barras, ni una barra dentro de un panel.
- Título en `--kiri-t-xl` con `letter-spacing: -.03em`. Space Grotesk se abre sola.
