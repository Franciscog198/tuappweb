import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Container, SectionHeading } from './primitives'

const stages = [
  { tag: 'Hoy', title: 'Ordenás lo básico', text: 'Empezás por lo que más te complica en el día a día.' },
  { tag: 'Después', title: 'Automatizás', text: 'Sumamos automatizaciones a medida que las necesitás.' },
  { tag: 'Más adelante', title: 'Crecés', text: 'Más equipos, más personas, más puestos. TuApp crece con vos.' },
]

export function ScalabilitySection() {
  return (
    <section aria-labelledby="escalabilidad-title" className="bg-surface py-24 md:py-32">
      <Container className="flex flex-col gap-14">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <SectionHeading
            id="escalabilidad-title"
            eyebrow="Escalabilidad"
            title={
              <>
                Empezá con lo que necesitás hoy. <span className="text-brand-gradient">Sumá lo que venga mañana.</span>
              </>
            }
            description="No hace falta cambiar todo de una. TuApp acompaña cada etapa de tu negocio, sin empezar de cero cada vez que crecés."
          />
          <div className="reveal relative hidden aspect-[16/10] overflow-hidden rounded-[2rem] lg:block">
            <Image
              src="/images/equipo-negocio.webp"
              alt="Equipo de trabajo de un negocio en crecimiento"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="grid items-end gap-4 md:grid-cols-3">
          {stages.map((stage, i) => (
            <li
              key={stage.tag}
              className={cn(
                'reveal flex flex-col justify-end gap-3 rounded-[2rem] p-7 md:p-8',
                ['bg-white md:min-h-56', 'bg-white ring-2 ring-brand-violet/15 md:min-h-72', 'bg-violet-gradient md:min-h-88'][i],
              )}
            >
              <span className="sr-only">{`Etapa ${i + 1}: `}</span>
              <span
                className={
                  i === 2
                    ? 'w-fit rounded-full bg-white/15 px-3 py-1 text-sm font-bold text-white'
                    : 'w-fit rounded-full bg-accent px-3 py-1 text-sm font-bold text-brand-indigo'
                }
              >
                {stage.tag}
              </span>
              <h3 className={i === 2 ? 'text-2xl font-extrabold text-white' : 'text-2xl font-extrabold text-ink'}>
                {stage.title}
              </h3>
              <p className={i === 2 ? 'leading-relaxed text-white/80' : 'leading-relaxed text-muted-foreground'}>
                {stage.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
