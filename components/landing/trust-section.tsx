import { Plus } from 'lucide-react'
import { Container, SectionHeading } from './primitives'

const principles = [
  { title: 'Hablamos claro', text: 'Sin tecnicismos. Te explicamos todo en palabras simples.' },
  { title: 'Nació de un caso real', text: 'Lo que ofrecemos lo probamos primero en un negocio de verdad.' },
  { title: 'Estamos cerca', text: 'Detrás de TuApp hay personas que conocen tu negocio.' },
  { title: 'Crecemos con vos', text: 'Lo que armamos hoy acompaña lo que tu negocio sea mañana.' },
]

const faqs = [
  {
    q: '¿Sirve para mi tipo de negocio?',
    a: 'TuApp se adapta a los procesos de cada negocio. Lo mejor es que nos cuentes cómo trabajás y te decimos con sinceridad cómo podemos ayudarte.',
  },
  {
    q: '¿Tengo que saber de tecnología?',
    a: 'No. Nos ocupamos de la instalación y la configuración, y te capacitamos a vos y a tu equipo para usarlo sin complicaciones.',
  },
  {
    q: '¿También se encargan de la PC y la impresora?',
    a: 'Sí. Podemos ayudarte con el equipamiento necesario, como PC e impresoras térmicas, y con su instalación y mantenimiento.',
  },
  {
    q: '¿Qué pasa si algo deja de funcionar?',
    a: 'Nos contactás y te ayudamos a resolverlo. El soporte técnico es parte de la solución, no un extra.',
  },
  {
    q: '¿Tengo que cambiar todo de una vez?',
    a: 'No. Podés empezar por lo que más te complica hoy e ir sumando a medida que tu negocio lo necesite.',
  },
]

export function TrustSection() {
  return (
    <section aria-labelledby="confianza-title" className="bg-surface py-24 md:py-32">
      <Container className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="flex flex-col gap-10">
          <SectionHeading
            id="confianza-title"
            eyebrow="Confianza"
            title={
              <>
                Sin letra chica. <span className="text-brand-gradient">Sin promesas vacías.</span>
              </>
            }
            description="Preferimos mostrarte lo que hacemos y cómo lo hacemos. Así trabajamos."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {principles.map((p) => (
              <li key={p.title} className="reveal flex flex-col gap-2 rounded-3xl bg-white p-6">
                <span className="h-1.5 w-8 -skew-x-[20deg] rounded-sm bg-brand-gradient" aria-hidden="true" />
                <h3 className="pt-2 text-lg font-bold text-ink">{p.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal flex flex-col gap-4">
          <h3 className="text-2xl font-extrabold text-ink">Preguntas frecuentes</h3>
          <div className="flex flex-col gap-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white p-6 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    className="size-5 shrink-0 text-brand-violet transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pt-4 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
