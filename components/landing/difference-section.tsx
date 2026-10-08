import { Check, Minus } from 'lucide-react'
import { Container, SectionHeading } from './primitives'

const rows = [
  { topic: 'Forma de trabajo', generic: 'Te tenés que adaptar al sistema', tuapp: 'Se adapta a tus procesos' },
  { topic: 'Qué incluye', generic: 'Solo el programa', tuapp: 'Software, equipos, instalación y soporte' },
  { topic: 'Funciones', generic: 'Muchas que nunca vas a usar', tuapp: 'Lo que tu negocio realmente necesita' },
  { topic: 'Puesta en marcha', generic: 'Lo instalás por tu cuenta', tuapp: 'Te lo dejamos funcionando' },
  { topic: 'Cuando algo falla', generic: 'Un formulario y a esperar', tuapp: 'Un equipo que conoce tu negocio' },
]

export function DifferenceSection() {
  return (
    <section aria-labelledby="diferencia-title" className="bg-white py-24 md:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          id="diferencia-title"
          eyebrow="La diferencia"
          align="center"
          title={
            <>
              No es un sistema más. <span className="text-brand-gradient">Es tu sistema.</span>
            </>
          }
          description="La diferencia no está en tener más funciones, sino en que todo funcione como tu negocio necesita."
        />

        <div className="reveal overflow-hidden rounded-[2rem] border border-ink/8">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Comparación entre sistemas genéricos y TuApp</caption>
            <thead>
              <tr>
                <th scope="col" className="hidden w-1/4 bg-surface p-5 text-sm font-semibold text-muted-foreground md:table-cell md:p-6">
                  <span className="sr-only">Aspecto</span>
                </th>
                <th scope="col" className="bg-surface p-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground md:p-6">
                  Sistemas genéricos
                </th>
                <th scope="col" className="bg-ink p-5 md:p-6">
                  <span className="text-sm font-semibold uppercase tracking-wider text-brand-green">Con TuApp</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.topic} className="border-t border-ink/8">
                  <th scope="row" className="hidden p-5 font-bold text-ink md:table-cell md:p-6">
                    {row.topic}
                  </th>
                  <td className="p-5 align-top text-muted-foreground md:p-6">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-ink/40 md:hidden">
                      {row.topic}
                    </span>
                    <span className="flex items-start gap-2">
                      <Minus className="mt-1 size-4 shrink-0 text-ink/30" aria-hidden="true" />
                      {row.generic}
                    </span>
                  </td>
                  <td className="bg-accent/50 p-5 align-top font-semibold text-ink md:p-6">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-transparent md:hidden" aria-hidden="true">
                      {row.topic}
                    </span>
                    <span className="flex items-start gap-2">
                      <Check className="mt-1 size-4 shrink-0 text-brand-teal" aria-hidden="true" />
                      {row.tuapp}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}
