import Image from 'next/image'
import { Rocket, GraduationCap, LifeBuoy, ShieldCheck } from 'lucide-react'
import { Container, SectionHeading } from './primitives'

const points = [
  { icon: Rocket, title: 'Puesta en marcha', text: 'Te acompañamos en los primeros días hasta que todo funcione como esperás.' },
  { icon: GraduationCap, title: 'Capacitación', text: 'Te enseñamos a vos y a tu equipo a usarlo, con palabras simples.' },
  { icon: LifeBuoy, title: 'Soporte técnico', text: 'Si surge un problema con el sistema o los equipos, te ayudamos a resolverlo.' },
  { icon: ShieldCheck, title: 'Mantenimiento', text: 'Revisamos y cuidamos todo para prevenir problemas antes de que aparezcan.' },
]

export function SupportSection() {
  return (
    <section id="soporte" aria-labelledby="soporte-title" className="bg-white py-24 md:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative">
          <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/soporte-tecnico.webp"
              alt="Técnico de TuApp ayudando a un comerciante con la configuración de sus equipos"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-green-gradient px-6 py-5 text-white shadow-xl">
            <p className="text-2xl font-extrabold leading-tight">No te dejamos solo</p>
            <p className="text-sm font-medium text-white/85">después de instalar.</p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <SectionHeading
            id="soporte-title"
            eyebrow="Soporte y acompañamiento"
            title={
              <>
                Un equipo que <span className="text-brand-gradient">conoce tu negocio.</span>
              </>
            }
            description="La tecnología funciona mejor cuando hay personas detrás. Te acompañamos antes, durante y después de la implementación."
          />
          <ul className="grid gap-6 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal flex flex-col gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-brand-violet">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-ink">{title}</h3>
                <p className="leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
