import { NotebookPen, MessagesSquare, Repeat, CircleAlert, SearchX, PlugZap } from 'lucide-react'
import { Container, SectionHeading } from './primitives'

const problems = [
  { icon: NotebookPen, title: 'Cuadernos y planillas sueltas', text: 'La información está repartida y cuesta saber qué pasó en el día.' },
  { icon: MessagesSquare, title: 'Pedidos por todos lados', text: 'Mensajes, llamadas y papeles que se mezclan y se pierden.' },
  { icon: Repeat, title: 'Tareas que repetís a mano', text: 'Anotar, copiar, calcular y volver a anotar. Todos los días.' },
  { icon: CircleAlert, title: 'Errores que cuestan plata', text: 'Un cobro mal hecho o un pedido olvidado impacta directo en tu negocio.' },
  { icon: SearchX, title: 'Datos que no encontrás', text: 'Cuando necesitás un número para decidir, no está a mano.' },
  { icon: PlugZap, title: 'Equipos sin respaldo', text: 'Si la PC o la impresora fallan, no sabés a quién llamar.' },
]

export function ProblemSection() {
  return (
    <section aria-labelledby="problema-title" className="bg-white py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          id="problema-title"
          eyebrow="El problema"
          title={
            <>
              Tu negocio no debería funcionar <span className="text-brand-gradient">a pura memoria.</span>
            </>
          }
          description="Cuando todo depende de que alguien se acuerde, el día a día se vuelve pesado. Y lo que más se pierde es tiempo para hacer crecer lo tuyo."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="reveal group flex flex-col gap-4 rounded-3xl border border-ink/8 bg-white p-7 transition-colors hover:border-brand-violet/30 hover:bg-accent/40"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-surface text-ink transition-colors group-hover:bg-ink group-hover:text-brand-green">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-ink">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>

        <p className="reveal mx-auto max-w-2xl text-balance text-center text-2xl font-bold leading-snug text-ink md:text-3xl">
          {'Hay una forma más simple de trabajar. '}
          <span className="text-brand-gradient">Y empieza por entender cómo trabajás vos.</span>
        </p>
      </Container>
    </section>
  )
}
