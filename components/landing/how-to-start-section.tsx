import { Container, PrimaryCta, SectionHeading } from './primitives'

const steps = [
  { title: 'Hablamos', text: 'Nos contás cómo es tu negocio y qué te gustaría mejorar. Sin compromiso.' },
  { title: 'Entendemos tus procesos', text: 'Vemos cómo trabajás hoy y dónde se pierde tiempo o aparecen errores.' },
  { title: 'Armamos e instalamos', text: 'Preparamos el software y los equipos, y te dejamos todo funcionando.' },
  { title: 'Te acompañamos', text: 'Capacitación, soporte y mantenimiento para que todo siga funcionando.' },
]

export function HowToStartSection() {
  return (
    <section aria-labelledby="empezar-title" className="bg-surface py-24 md:py-32">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="empezar-title"
            eyebrow="Cómo empezar"
            title={
              <>
                Empezar es simple. <span className="text-brand-gradient">Son cuatro pasos.</span>
              </>
            }
          />
          <PrimaryCta className="reveal shrink-0">Dar el primer paso</PrimaryCta>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="reveal relative flex flex-col gap-4 overflow-hidden rounded-[2rem] bg-white p-7">
              <span
                aria-hidden="true"
                className="text-brand-gradient text-6xl font-extrabold italic leading-none tracking-tighter"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-bold text-ink">{step.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
