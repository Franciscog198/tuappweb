import Image from 'next/image'
import { Printer, Wrench, Monitor, Check } from 'lucide-react'
import { Container, PrimaryCta, SecondaryCta } from './primitives'

const pillars = ['Sistema de gestión', 'Automatización', 'PC e impresoras térmicas', 'Instalación', 'Soporte técnico', 'Mantenimiento']

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[640px] rounded-full bg-brand-violet/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 size-[480px] rounded-full bg-brand-green/10 blur-3xl"
      />

      <Container className="relative grid items-center gap-14 pb-16 pt-12 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24">
        <div className="flex flex-col gap-7">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-violet/15 bg-accent px-4 py-1.5 text-sm font-semibold text-brand-indigo">
            <span className="size-2 rounded-full bg-brand-green" aria-hidden="true" />
            Sistema + Equipamiento + Soporte
          </p>

          <h1
            id="hero-title"
            className="text-balance text-5xl font-extrabold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Tu negocio. Tu forma de trabajar. <span className="text-brand-gradient italic">TuApp.</span>
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Gestioná, automatizá y hacé crecer tu negocio con una solución que se adapta a tus procesos. Sistema,
            equipos, instalación y soporte técnico, todo en un solo lugar.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryCta>Quiero conocer TuApp</PrimaryCta>
            <SecondaryCta>Hablar con nosotros</SecondaryCta>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm font-medium text-ink/70">
            {['Se adapta a tus procesos', 'Instalamos todo lo que necesitás', 'Capacitación de uso', 'Te acompañamos siempre'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="size-4 text-brand-teal" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2rem] bg-surface shadow-[0_40px_80px_-30px_rgba(59,30,208,0.45)]">
            <Image
              src="/images/hero-negocio.webp"
              alt="Comerciante sonriendo mientras usa una pantalla táctil con impresora térmica en el mostrador de su negocio"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[60%_50%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" aria-hidden="true" />
          </div>

          {/* <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-xl ring-1 ring-ink/5 sm:-left-6">
            <span className="flex size-11 items-center justify-center rounded-xl bg-green-gradient text-white">
              <Printer className="size-5" aria-hidden="true" />
            </span>
             <span className="flex flex-col">
              <span className="text-sm font-bold text-ink">Digitalizá</span>
              <span className="text-xs text-muted-foreground">tu negocio</span>
            </span> 
          </div> */}

          <div className="absolute -top-5 right-4 hidden items-center gap-2 rounded-2xl bg-ink px-4 py-3 text-white shadow-xl sm:flex md:-right-4">
            <Monitor className="size-4 text-brand-green" aria-hidden="true" />
            <span className="text-sm font-semibold">Equipos incluidos</span>
            <span className="mx-1 h-4 w-px bg-white/20" aria-hidden="true" />
            <Wrench className="size-4 text-brand-green" aria-hidden="true" />
            <span className="text-sm font-semibold">Soporte</span>
          </div>
        </div>
      </Container>

      <div className="border-y border-ink/5 bg-surface">
        <Container>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6 text-sm font-semibold text-ink/60 md:justify-between">
            {pillars.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="h-1.5 w-3 -skew-x-[20deg] rounded-sm bg-brand-gradient" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  )
}
