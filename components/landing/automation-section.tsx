import { Inbox, Workflow, Printer, Clock, ShieldCheck, Sparkles, Hand } from 'lucide-react'
import { Container, SectionHeading } from './primitives'

const flow = [
  { icon: Inbox, step: 'Entra un pedido', text: 'Lo cargás una sola vez.' },
  { icon: Workflow, step: 'Se organiza solo', text: 'Queda registrado y en orden.' },
  { icon: Printer, step: 'Se imprime la comanda', text: 'Llega clara a quien la prepara.' },
]

const benefits = [
  { icon: Clock, title: 'Más tiempo', text: 'Menos horas en tareas que se repiten todos los días.' },
  { icon: ShieldCheck, title: 'Menos errores', text: 'Lo que se carga una vez no se vuelve a copiar a mano.' },
  { icon: Hand, title: 'Menos carga para tu equipo', text: 'Cada uno sabe qué hacer, sin depender de la memoria.' },
  { icon: Sparkles, title: 'Más control', text: 'Ves qué pasa en tu negocio sin tener que preguntar.' },
]

export function AutomationSection() {
  return (
    <section aria-labelledby="automatizacion-title" className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-brand-violet/25 blur-3xl"
      />
      <Container className="relative flex flex-col gap-16">
        <SectionHeading
          id="automatizacion-title"
          tone="dark"
          align="center"
          eyebrow="Automatización"
          title={
            <>
              Que lo repetitivo <span className="text-brand-gradient">se haga solo.</span>
            </>
          }
          description="Identificamos las tareas que hoy hacés a mano y las automatizamos. Vos te ocupás de atender y hacer crecer tu negocio."
        />

        <div className="reveal rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-10">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
            Ejemplo real: así funciona en la rotisería
          </p>
          <ol className="grid gap-4 md:grid-cols-3 md:gap-0">
            {flow.map(({ icon: Icon, step, text }, i) => (
              <li key={step} className="relative flex flex-col items-center gap-4 text-center md:px-6">
                {i < flow.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[calc(50%+2.5rem)] right-[calc(-50%+2.5rem)] top-8 hidden h-px bg-gradient-to-r from-brand-green to-brand-violet md:block"
                  />
                )}
                <span className="relative flex size-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-[0_10px_40px_-10px_var(--brand-violet)]">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-lg font-bold">{step}</span>
                  <span className="text-white/60">{text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <li key={title} className="reveal flex flex-col gap-3 rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10">
              <Icon className="size-6 text-brand-green" aria-hidden="true" />
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="leading-relaxed text-white/65">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
