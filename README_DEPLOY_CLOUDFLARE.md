# Sitio web Servimak SpA

Sitio estático listo para publicar en Cloudflare Pages con el dominio `servimakspa.cl`.

## Estructura

- `index.html`: página principal.
- `assets/css/styles.css`: estilos del sitio.
- `assets/js/main.js`: menú móvil y formulario por correo.
- `assets/img/`: logo e imágenes de apoyo.

## Publicación rápida en Cloudflare Pages

Opción A — Direct Upload:
1. Entrar a Cloudflare.
2. Ir a **Workers & Pages**.
3. Crear una aplicación de **Pages**.
4. Elegir carga directa / upload assets.
5. Subir el contenido de esta carpeta, no el ZIP completo.
6. Agregar dominio personalizado: `servimakspa.cl` y `www.servimakspa.cl`.

Opción B — GitHub:
1. Crear repositorio nuevo, por ejemplo `servimak-web`.
2. Subir estos archivos.
3. En Cloudflare Pages, conectar el repositorio.
4. Framework preset: `None` o `Static HTML`.
5. Build command: vacío.
6. Output directory: `/`.
7. Agregar dominio personalizado: `servimakspa.cl` y `www.servimakspa.cl`.

## Formulario

Actualmente el formulario abre un correo prellenado a `contacto@servimakspa.cl`. Esto funciona sin backend y sin pagos, pero depende del cliente de correo del usuario.

Para envío automático desde la página, conectar una de estas opciones:
- Zoho Forms.
- Formspree / Getform.
- Cloudflare Worker + proveedor de envío transaccional.

## Cambios rápidos

Los correos visibles están en `index.html`, sección `contacto`.
El correo receptor del formulario está en el atributo:

```html
<form class="contact-form" id="contactForm" data-email="contacto@servimakspa.cl">
```
