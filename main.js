const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const form = document.querySelector('#contactForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const to = form.dataset.email || 'contacto@servimakspa.cl';
    const subject = encodeURIComponent('Solicitud de cotización desde servimakspa.cl');
    const body = encodeURIComponent(
`Nombre / empresa: ${data.get('nombre') || ''}
Correo: ${data.get('correo') || ''}
Teléfono: ${data.get('telefono') || ''}
Servicio requerido: ${data.get('servicio') || ''}

Mensaje:
${data.get('mensaje') || ''}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
