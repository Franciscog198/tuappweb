import { Mail, MessageCircle } from 'lucide-react'
import { site, talkHref } from '@/lib/site'
import { Container, Eyebrow } from './primitives'
import { ContactForm } from './contact-form'

export function ContactSection() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 size-[520px] rounded-full bg-brand-green/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 size-[620px] rounded-full bg-brand-violet/30 blur-3xl" />

      <Container className="relative grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="reveal flex flex-col gap-7">
          <Eyebrow tone="dark">Hablemos</Eyebrow>
          <h2 id="contacto-title" className="text-balance text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
            Tu negocio puede funcionar <span className="text-brand-gradient">mejor.</span> Empecemos hoy.
          </h2>
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-white/70 md:text-xl">
            Contanos cómo trabajás y qué te gustaría mejorar. Te respondemos para ver juntos cómo TuApp puede ayudarte.
          </p>

          <ul className="flex flex-col gap-3 pt-2">
            {site.whatsapp && (
              <li>
                <a
                  href={talkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-lg font-semibold text-white hover:text-brand-green"
                >
                  <MessageCircle className="size-5 text-brand-green" aria-hidden="true" />
                  Escribinos por WhatsApp
                </a>
              </li>
            )}
          {/* 
            <li>
               <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-3 text-lg font-semibold text-white hover:text-brand-green"
              >
                <Mail className="size-5 text-brand-green" aria-hidden="true" />
                {site.email}
              </a> 
            </li> 
            */}
          </ul>
        </div>

        <div className="reveal">
          <ContactForm />
        </div>
      </Container>
    </section>
  )
}
