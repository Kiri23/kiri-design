repo: Kiri23/kiri-design
branch: master

## Last sync

date: 2026-09-12

### Updated in this project

- `tokens.css` partido en `css/fuentes · color · escala · base · componentes`; sigue siendo el único `<link>` que una app necesita.
- Tema colapsado a `light-dark()`: un token = una declaración, el modo lo decide `color-scheme` (`data-kiri="claro"|"oscuro"`).
- Capa de tokens nueva: `toque`, `toque-fuerte`, `velo`, `apagado`, `linea-fuerte`, bordes, movimiento, capas, interlineado, separación.
- Piezas nuevas: `.kiri-nav`, `.kiri-hoja`, `.kiri-opcion` + `.kiri-interruptor`, `.kiri-esqueleto`.
- Galería completa: 11 fichas, cada pieza con `.prompt.md` + `.card.html`.
- `templates/pantalla-app/` — pantalla de app armada (barra + tabs + lista tocable + hoja + nav).

## Screen map

| Archivo | Qué contiene |
|---|---|
| `tokens.css` | Entrada pública: `@import` de las cinco partes |
| `css/color.css` | Paleta completa con `light-dark()` |
| `css/escala.css` | Letra, aire, esquinas, bordes, movimiento, capas |
| `css/base.css` | Reset, cuerpo, foco, `.kiri-lectura`, `.kiri-pantalla` |
| `css/componentes.css` | Todas las clases `.kiri-*` |
| `css/fuentes.css` | Space Grotesk · Newsreader · JetBrains Mono |
| `componentes/estructura/` | barra, panel |
| `componentes/acciones/` | botón |
| `componentes/datos/` | lista, tabla |
| `componentes/formulario/` | campo, opción |
| `componentes/navegacion/` | nav, hoja |
| `componentes/estado/` | aviso y vacío, señales |
| `galeria.html` | Índice de las 11 fichas |
| `demo.html` | Pantallas reales de Rutero, Notif, Mail y los cursos |
| `templates/pantalla-app/` | Punto de partida de una pantalla nueva |
| `thumbnail.html` | Tile del design system |

## Pendiente

- Segmentado, confirmación destructiva como clase, toast apilado, convención de ícono.
- Decidir si se borra `.kiri-btn--marca` (contradice la regla central).
- Versión / changelog.
- La doc de agentes en `DESIGN.md` §9 todavía apunta a `~/Code/kiri-design`.
