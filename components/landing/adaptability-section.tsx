'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container, SectionHeading } from './primitives'

const businesses = [
  {
    id: 'rotiseria',
    label: 'Rotisería',
    badge: 'Caso real',
    intro: 'Donde nació TuApp. Pedidos, cocina y entregas funcionando en orden, incluso en hora pico.',
    items: ['Pedidos centralizados', 'Comandas impresas automáticamente', 'Cocina y mostrador coordinados'],
  },
  {
    id: 'comercio',
    label: 'Comercio',
    intro: 'Para que vender, cobrar y saber qué tenés en el local sea simple y rápido.',
    items: ['Ventas y cobros ordenados', 'Productos siempre a mano', 'Tickets en impresora térmica'],
  },
  {
    id: 'gastronomia',
    label: 'Gastronomía',
    intro: 'Para que los pedidos lleguen claros desde el salón o el mostrador a quien los prepara.',
    items: ['Pedidos sin papelitos', 'Comandas claras', 'Menos errores en la entrega'],
  },
  {
    id: 'servicios',
    label: 'Servicios',
    intro: 'Para ordenar clientes, trabajos y pendientes sin perder nada en el camino.',
    items: ['Clientes y trabajos en un lugar', 'Seguimiento de pendientes', 'Información clara para decidir'],
  },
  {
    id: 'emprendimientos',
    label: 'Emprendimientos',
    intro: 'Para dar el salto de lo manual a lo organizado, empezando por lo básico.',
    items: ['Empezar simple', 'Crecer de a poco', 'Sin complicarte con la tecnología'],
  },
  {
    id: 'pymes',
    label: 'Pymes',
    intro: 'Para equipos que necesitan procesos claros y que todos trabajen igual.',
    items: ['Procesos a medida', 'Varios puestos de trabajo', 'Soporte para todo el equipo'],
  },
]

export function AdaptabilitySection() {
  const [activeId, setActiveId] = useState(businesses[0].id)
  const active = businesses.find((b) => b.id === activeId) ?? businesses[0]

  return (
    <section id="soluciones" aria-labelledby="adaptabilidad-title" className="bg-white py-24 md:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          id="adaptabilidad-title"
          eyebrow="Adaptabilidad"
          title={
            <>
              No te adaptás al sistema. <span className="text-brand-gradient">El sistema se adapta a vos.</span>
            </>
          }
          description="Cada negocio trabaja distinto. Por eso primero entendemos tus procesos y después armamos la solución alrededor de ellos."
        />

        <div className="reveal grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div role="tablist" aria-label="Tipos de negocio" className="flex flex-wrap gap-2 lg:flex-col">
            {businesses.map((b) => {
              const selected = b.id === activeId
              return (
                <button
                  key={b.id}
                  role="tab"
                  type="button"
                  id={`tab-${b.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${b.id}`}
                  onClick={() => setActiveId(b.id)}
                  className={cn(
                    'flex items-center justify-between gap-3 rounded-full px-5 py-3 text-left text-base font-semibold transition-all lg:rounded-2xl lg:px-6 lg:py-4 lg:text-lg',
                    selected ? 'bg-ink text-white shadow-lg' : 'bg-surface text-ink/70 hover:bg-accent hover:text-ink',
                  )}
                >
                  {b.label}
                  {b.badge && (
                    <span
                      className={cn(
                        'rounded-full px-2.5 py-0.5 text-xs font-bold',
                        selected ? 'bg-brand-green text-ink' : 'bg-brand-green/15 text-brand-teal',
                      )}
                    >
                      {b.badge}
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            className="relative flex flex-col justify-between gap-10 overflow-hidden rounded-[2rem] bg-violet-gradient p-8 text-white md:p-12"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-brand-green/30 blur-3xl"
            />
            <div className="relative flex flex-col gap-4">
              <h3 className="text-3xl font-extrabold md:text-4xl">{active.label}</h3>
              <p className="max-w-lg text-pretty text-lg leading-relaxed text-white/85">{active.intro}</p>
            </div>
            <div className="relative flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">Podemos ayudarte con</p>
              <ul className="grid gap-3 sm:grid-cols-3">
                {active.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 rounded-2xl bg-white/10 p-4 text-sm font-semibold backdrop-blur">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-green" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
