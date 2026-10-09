import Image from 'next/image'
import { AppWindow, Monitor, Printer, Cable, Headset, Settings2 } from 'lucide-react'
import { Container, SectionHeading } from './primitives'

const items = [
  { icon: Monitor, title: 'PC y equipos', text: 'Te asesoramos para que tengas el equipo adecuado para tu negocio.' },
  { icon: Printer, title: 'Impresoras térmicas', text: 'Tickets y comandas rápidas, claras y sin tinta.' },
  { icon: Cable, title: 'Instalación', text: 'Dejamos todo conectado, configurado y funcionando.' },
  { icon: Headset, title: 'Soporte técnico', text: 'Cuando algo pasa, sabés exactamente a quién llamar.' },
  { icon: Settings2, title: 'Insumos', text: 'Tenemos todo lo que necesitás para empezar hoy.' },
]

export function CompleteSolutionSection() {
  return (
    <section id="equipamiento" aria-labelledby="solucion-title" className="bg-ink-soft py-24 text-white md:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          id="solucion-title"
          tone="dark"
          eyebrow="Solución completa"
          title={
            <>
              Software, equipos y soporte. <span className="text-brand-gradient">Todo del mismo lado.</span>
            </>
          }
          description="No tenés que coordinar con un proveedor para el sistema, otro para la PC y otro para la impresora. Con TuApp hablás con un solo equipo que se ocupa de todo."
        />

        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <article className="reveal relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[2rem] p-8 lg:col-span-2 lg:row-span-2 md:p-10">
            <Image
              src="/images/equipamiento.webp"
              alt="PC, pantalla e impresora térmica listas para usar en un negocio"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" aria-hidden="true" />
            <div className="relative flex max-w-lg flex-col gap-4">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-gradient">
                <AppWindow className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-3xl font-extrabold md:text-4xl">El software que tu negocio necesita</h3>
              <p className="text-pretty text-lg leading-relaxed text-white/75">
                Armado a partir de cómo trabajás, y funcionando sobre equipos preparados para eso. Todo pensado para
                que funcione desde el primer día.
              </p>
            </div>
          </article>

          {items.slice(0, 2).map(({ icon: Icon, title, text }) => (
            <article key={title} className="reveal flex flex-col gap-4 rounded-[2rem] bg-white/[0.06] p-7 ring-1 ring-white/10">
              <Icon className="size-7 text-brand-green" aria-hidden="true" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="leading-relaxed text-white/65">{text}</p>
            </article>
          ))}
        </div>

        <ul className="grid gap-4 md:grid-cols-3">
          {items.slice(2).map(({ icon: Icon, title, text }) => (
            <li key={title} className="reveal flex items-start gap-4 rounded-[2rem] bg-white/[0.06] p-7 ring-1 ring-white/10">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <Icon className="size-6 text-brand-green" aria-hidden="true" />
              </span>
              <span className="flex flex-col gap-1">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="leading-relaxed text-white/65">{text}</p>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
