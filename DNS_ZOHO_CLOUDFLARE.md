# Configuración DNS y correos Servimak SpA

Dominio: `servimakspa.cl`
Proveedor DNS: Cloudflare
Correo sugerido: Zoho Mail Free, hasta 5 cuentas

## Correos a crear

1. `gerencia.operaciones@servimakspa.cl`
2. `ingeniero.tecnico@servimakspa.cl`
3. `operaciones.maquinaria@servimakspa.cl`
4. `asesoria.electrica@servimakspa.cl`
5. `contacto@servimakspa.cl`

Se usaron nombres en minúsculas, sin tildes ni caracteres especiales para evitar problemas de compatibilidad.

## Pasos en Zoho Mail

1. Crear cuenta en Zoho Mail.
2. Elegir correo con dominio propio.
3. Agregar dominio `servimakspa.cl`.
4. Verificar propiedad del dominio con el TXT o CNAME que entregue Zoho.
5. Crear las 5 cuentas.
6. Copiar desde Zoho los registros MX, SPF, DKIM y DMARC.
7. Pegarlos en Cloudflare, sección DNS > Records.
8. Volver a Zoho y presionar verificar.

## Registros habituales de Zoho Mail

IMPORTANTE: confirmar siempre los valores exactos dentro del panel de Zoho, porque pueden variar por región o centro de datos.

Registros MX habituales para Zoho global:

| Tipo | Nombre | Servidor | Prioridad |
|---|---|---|---|
| MX | @ | mx.zoho.com | 10 |
| MX | @ | mx2.zoho.com | 20 |
| MX | @ | mx3.zoho.com | 50 |

SPF habitual:

| Tipo | Nombre | Valor |
|---|---|---|
| TXT | @ | v=spf1 include:zoho.com ~all |

DKIM:
Zoho entrega un selector y una clave pública. Copiar exactamente el registro generado por Zoho.

DMARC básico sugerido:

| Tipo | Nombre | Valor |
|---|---|---|
| TXT | _dmarc | v=DMARC1; p=none; rua=mailto:contacto@servimakspa.cl |

## Consideraciones Cloudflare

- Los registros MX y TXT no se proxifican.
- Si se crea un CNAME para `www`, puede ir proxificado cuando Cloudflare lo indique.
- Esperar propagación DNS. A veces toma minutos; en algunos casos puede tardar más.
