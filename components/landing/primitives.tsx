import { ArrowRight, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { talkHref } from '@/lib/site'

type CtaProps = {
  href?: string
  children: React.ReactNode
  className?: string
  tone?: 'light' | 'dark'
}

export function PrimaryCta({ href = '#contacto', children, className }: CtaProps) {
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-violet-gradient px-7 text-base font-semibold text-white shadow-[0_10px_30px_-10px_var(--brand-violet)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_var(--brand-violet)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-violet/30',
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </a>
  )
}

export function SecondaryCta({ href = talkHref, children, className, tone = 'light' }: CtaProps) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'inline-flex h-13 items-center justify-center gap-2 rounded-full border px-7 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4',
        tone === 'light'
          ? 'border-ink/15 bg-white text-ink hover:border-ink/30 hover:bg-surface focus-visible:ring-brand-violet/20'
          : 'border-white/20 bg-white/5 text-white hover:bg-white/10 focus-visible:ring-white/30',
        className,
      )}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      {children}
    </a>
  )
}

export function Eyebrow({ children, tone = 'light' }: { children: React.ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em]',
        tone === 'light' ? 'text-brand-indigo' : 'text-brand-green',
      )}
    >
      <span className="h-1.5 w-5 -skew-x-[20deg] rounded-sm bg-brand-gradient" aria-hidden="true" />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'left',
  id,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  id?: string
}) {
  return (
    <div className={cn('reveal flex max-w-3xl flex-col gap-5', align === 'center' && 'mx-auto items-center text-center')}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={cn(
          'text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-[3.5rem]',
          tone === 'light' ? 'text-ink' : 'text-white',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-pretty text-lg leading-relaxed md:text-xl',
            tone === 'light' ? 'text-muted-foreground' : 'text-white/70',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-7xl px-5 md:px-8', className)}>{children}</div>
}

export function Logo({ variant = 'color', className }: { variant?: 'color' | 'white'; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={variant === 'color' ? '/images/tuapp-logo-t.png' : '/images/tuapp-logo-white.png'}
      alt="TuApp"
      width={480}
      height={140}
      className={cn('h-8 w-auto', className)}
    />
  )
}
