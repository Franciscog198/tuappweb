'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { site, whatsappHref } from '@/lib/site'

const businessTypes = ['Rotisería', 'Comercio', 'Gastronomía', 'Servicios', 'Emprendimiento', 'Pyme', 'Otro']

const fieldClass =
  'h-13 w-full rounded-xl border border-ink/10 bg-surface px-4 text-base text-ink placeholder:text-ink/40 focus:border-brand-violet focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-violet/15'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('nombre') ?? '').trim()
    const business = String(data.get('negocio') ?? '').trim()
    const phone = String(data.get('telefono') ?? '').trim()
    const message = String(data.get('mensaje') ?? '').trim()

    const text = [
      `Hola, soy ${name}.`,
      `Tipo de negocio: ${business}.`,
      phone && `Mi teléfono: ${phone}.`,
      message && `\n${message}`,
    ]
      .filter(Boolean)
      .join('\n')

    const wa = whatsappHref(text)
    if (wa) {
      window.open(wa, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Quiero conocer TuApp - ${name}`,
      )}&body=${encodeURIComponent(text)}`
    }
    setSent(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-[2rem] bg-white p-7 text-ink shadow-2xl md:p-9"
      aria-describedby="form-note"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="nombre" className="text-sm font-semibold">
          Nombre
        </label>
        <input id="nombre" name="nombre" required autoComplete="name" maxLength={80} placeholder="Tu nombre" className={fieldClass} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="negocio" className="text-sm font-semibold">
            Tipo de negocio
          </label>
          <select id="negocio" name="negocio" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Elegí una opción
            </option>
            {businessTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="telefono" className="text-sm font-semibold">
            Teléfono o WhatsApp
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={30}
            placeholder="Opcional"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="mensaje" className="text-sm font-semibold">
          ¿Qué te gustaría mejorar?
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          maxLength={1000}
          placeholder="Contanos brevemente cómo trabajás hoy"
          className={`${fieldClass} h-auto resize-none py-3`}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-violet-gradient px-7 text-base font-semibold text-white shadow-[0_10px_30px_-10px_var(--brand-violet)] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-violet/30"
      >
        Quiero conocer TuApp
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </button>

      <p id="form-note" className="text-center text-sm text-muted-foreground" aria-live="polite">
        {sent
          ? '¡Gracias! Si no se abrió tu aplicación de mensajes, escribinos directamente.'
          : site.whatsapp
            ? 'Al enviar se abre WhatsApp con tu mensaje listo.'
            : 'Al enviar se abre tu correo con el mensaje listo.'}
      </p>
    </form>
  )
}
