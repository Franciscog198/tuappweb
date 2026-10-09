import Image from 'next/image'
import { ShoppingBag, Users, Package, Wallet, ClipboardList, BarChart3 } from 'lucide-react'
import { Container, SectionHeading } from './primitives'

const areas = [
  { icon: ClipboardList, label: 'Pedidos' },
  { icon: ShoppingBag, label: 'Ventas' },
  { icon: Wallet, label: 'Cobros y caja' },
  { icon: Package, label: 'Productos' },
  { icon: Users, label: 'Clientes' },
  { icon: BarChart3, label: 'Información para decidir' },
]

export function ManagementSection() {
  return (
    <section id="como-funciona" aria-labelledby="gestion-title" className="bg-white py-24 md:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="flex flex-col gap-10">
          <SectionHeading
            id="gestion-title"
            eyebrow="Gestión"
            title={
              <>
                Todo tu negocio, <span className="text-brand-gradient">ordenado en un solo lugar.</span>
              </>
            }
            description="Dejá de saltar entre cuadernos, planillas y mensajes. Según cómo trabajes, te ayudamos a ordenar lo que más importa en tu día a día."
          />

          <ul className="reveal grid grid-cols-2 gap-3 sm:grid-cols-3">
            {areas.map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col gap-3 rounded-2xl border border-ink/8 p-4">
                <Icon className="size-5 text-brand-violet" aria-hidden="true" />
                <span className="text-sm font-semibold leading-snug text-ink">{label}</span>
              </li>
            ))}
          </ul>
          <p className="reveal text-sm text-muted-foreground">
            Lo armamos según lo que tu negocio necesita. 
          </p>
          <p className="reveal text-sm text-muted-foreground">
            Nada de funciones que no vas a usar.
          </p>
        </div>

        <div className="reveal relative">
          <div className="relative aspect-[4/3.2] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/comercio-tablet.webp"
              alt="Dueña de un comercio revisando la información de su negocio en una tablet"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink/10 shadow-xl sm:left-auto sm:w-80">
            <div className="flex flex-col gap-1 bg-white p-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Antes</span>
              <span className="text-sm font-bold text-ink">Papeles y memoria</span>
            </div>
            <div className="flex flex-col gap-1 bg-ink p-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">Con TuApp</span>
              <span className="text-sm font-bold text-white">Todo a la vista</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
