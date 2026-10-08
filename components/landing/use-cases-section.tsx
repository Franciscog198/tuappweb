import Image from 'next/image'
import { Container, SectionHeading } from './primitives'

const cases = [
  {
    image: '/images/rotiseria-pedidos.webp',
    alt: 'Pedidos preparados en el mostrador de una rotisería',
    tag: 'Caso real',
    title: 'Rotisería',
    situation: 'Pedidos de varios canales, cocina a full y comandas escritas a mano.',
    change: 'Pedidos centralizados y comandas impresas automáticamente en la cocina.',
  },
  {
    image: '/images/comercio-tablet.webp',
    alt: 'Comerciante revisando información en una tablet dentro de su local',
    tag: 'Ejemplo',
    title: 'Comercio de barrio',
    situation: 'Ventas anotadas en un cuaderno y poca claridad sobre lo que se vende.',
    change: 'Ventas y cobros ordenados, con tickets impresos al momento.',
  },
  {
    image: '/images/emprendedor-pc.webp',
    alt: 'Emprendedor trabajando en su computadora',
    tag: 'Ejemplo',
    title: 'Emprendimiento',
    situation: 'Todo depende de una sola persona y de su memoria.',
    change: 'Una base simple para ordenarse hoy y crecer mañana.',
  },
]

export function UseCasesSection() {
  return (
    <section aria-labelledby="casos-title" className="bg-white py-24 md:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          id="casos-title"
          eyebrow="Casos de uso"
          title={
            <>
              Distintos negocios. <span className="text-brand-gradient">La misma idea.</span>
            </>
          }
          description="Entender cómo trabaja cada negocio y armar la solución a su medida. Así se ve en la práctica."
        />

        <ul className="grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <li key={c.title} className="reveal group flex flex-col overflow-hidden rounded-[2rem] border border-ink/8 bg-white">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className={
                    c.tag === 'Caso real'
                      ? 'absolute left-4 top-4 rounded-full bg-brand-green px-3 py-1 text-xs font-bold text-ink'
                      : 'absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink'
                  }
                >
                  {c.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-5 p-7">
                <h3 className="text-2xl font-extrabold text-ink">{c.title}</h3>
                <dl className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Antes</dt>
                    <dd className="leading-relaxed text-ink/75">{c.situation}</dd>
                  </div>
                  <div className="flex flex-col gap-1 border-l-2 border-brand-violet pl-4">
                    <dt className="text-xs font-bold uppercase tracking-wider text-brand-violet">Con TuApp</dt>
                    <dd className="font-semibold leading-relaxed text-ink">{c.change}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
