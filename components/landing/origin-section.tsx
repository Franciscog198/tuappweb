import Image from 'next/image'
import { Container, Eyebrow } from './primitives'

const lessons = [
  'Los pedidos tenían que llegar ordenados a la cocina.',
  'Las comandas no podían depender de escribir a mano.',
  'El sistema tenía que ser simple para usar en plena hora pico.',
  'Si algo fallaba, tenía que haber alguien para resolverlo.',
]

export function OriginSection() {
  return (
    <section aria-labelledby="origen-title" className="bg-surface py-24 md:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/rotiseria-pedidos.webp"
              alt="Mostrador de una rotisería con pedidos listos para entregar"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-2 w-2/5 overflow-hidden rounded-2xl border-4 border-surface shadow-2xl md:-right-8">
            <div className="relative aspect-square">
              <Image
                src="/images/impresora-termica.webp"
                alt="Impresora térmica imprimiendo una comanda"
                fill
                sizes="(min-width: 1024px) 18vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink shadow-lg">
            Caso real · Rotisería
          </span>
        </div>

        <div className="order-1 flex flex-col gap-7 lg:order-2">
          <div className="reveal flex flex-col gap-5">
            <Eyebrow>Cómo nació TuApp</Eyebrow>
            <h2
              id="origen-title"
              className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-5xl"
            >
              No nació en una oficina. <span className="text-brand-gradient">Nació en un mostrador.</span>
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              TuApp empezó resolviendo los problemas reales de una rotisería: pedidos que llegaban de distintos lados,
              comandas a mano y una cocina que necesitaba orden. Para que funcione, no alcanzaba con un programa: hacían
              falta los equipos correctos, una buena instalación y alguien que acompañe.
            </p>
          </div>

          <div className="reveal flex flex-col gap-3">
            <p className="font-semibold text-ink">Lo que aprendimos ahí, lo aplicamos en cada negocio:</p>
            <ol className="flex flex-col gap-3">
              {lessons.map((lesson, i) => (
                <li key={lesson} className="flex items-start gap-4 rounded-2xl bg-white p-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink text-sm font-bold text-brand-green">
                    {i + 1}
                  </span>
                  <span className="pt-1 leading-relaxed text-ink/80">{lesson}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  )
}
