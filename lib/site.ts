// Reemplazá estos valores por los datos reales antes de publicar.
export const site = {
  url: 'https://tuappsoft.vercel.app/',
  email: '',
  // Formato internacional sin "+" ni espacios, por ejemplo: 5491122334455. Dejalo vacío para usar solo el formulario.
  whatsapp: '5493472504651',
}

export function whatsappHref(message: string) {
  if (!site.whatsapp) return null
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export const talkHref =
  whatsappHref('Hola, quiero hablar con ustedes sobre TuApp para mi negocio.') ?? '#contacto'

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Equipamiento', href: '#equipamiento' },
  { label: 'Soporte', href: '#soporte' },
  { label: 'Contacto', href: '#contacto' },
]
