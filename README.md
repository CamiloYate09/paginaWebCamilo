# camiloyate.com

Portafolio personal de Cami Yate: HTML, CSS y JavaScript sin build ni dependencias de npm.

## Estructura

| Ruta | Qué es |
|---|---|
| `index.html` | Inicio |
| `dist/*.html` | Perfil, proyectos, contacto, blog y certificaciones |
| `dist/css/main.css` | Todos los estilos; la paleta está en las variables de `:root` |
| `dist/js/main.js` | Menú y subtítulo rotativo del inicio |
| `dist/js/navidad.js` | Modo navidad (automático del 1 de diciembre al 6 de enero, con botón) |
| `dist/img/`, `dist/media/`, `images/` | Imágenes, vídeos, iconos e imagen para compartir (`images/og-image.jpg`) |
| `manifest.webmanifest`, `robots.txt`, `sitemap.xml` | Instalación como app y SEO |
| `_headers` | Cabeceras de seguridad que añade Cloudflare (CSP, HSTS, etc.) |

## Ver en local

```sh
python3 -m http.server 8080
```

Abre <http://localhost:8080>. Usa un servidor, no el archivo directo: los iconos y el manifest usan rutas
que empiezan por `/`. El servidor local no aplica `_headers`.

## Despliegue

Cloudflare publica la raíz del repositorio en <https://camiloyate.com> con cada push a `master`. No hay comando
de build: el proyecto de Cloudflare no tiene build command y el directorio de salida es la raíz.

No añadas un `package.json`: Cloudflare ejecutaría `npm install` en cada deploy.

## Convenciones

- **Sin JavaScript inline.** La CSP de `_headers` solo permite scripts del propio sitio (`script-src 'self'`).
  Los bloques `application/ld+json` sí están permitidos porque no se ejecutan.
- **Recursos externos.** Solo Font Awesome y Google Fonts. Si añades otro, agrégalo a la CSP de `_headers`.
- **Archivos de menos de 25 MiB.** Es el límite de Cloudflare por archivo; los vídeos van comprimidos.
- **Colores desde las variables.** Cambia la paleta en `:root` de `main.css`; el modo navidad la sobrescribe en
  `:root[data-navidad]`.
- **Accesibilidad.** Texto alternativo en las imágenes, `aria-label` en los enlaces que solo tienen icono y
  animaciones desactivadas con `prefers-reduced-motion`.
- **Al añadir una página.** Copia el `<head>` de una existente, ajusta título, descripción, canonical y
  etiquetas Open Graph, y agrégala a `sitemap.xml`.
