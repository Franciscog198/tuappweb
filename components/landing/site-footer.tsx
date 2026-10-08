import { navLinks, site } from '@/lib/site'
import { Container, Logo } from './primitives'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <Container className="flex flex-col gap-12 py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex max-w-sm flex-col gap-4">
            <Logo variant="white" className="h-8" />
            <p className="leading-relaxed text-white/60">
              Software, equipamiento y soporte que se adaptan a tu negocio.
            </p>
          </div>
          <nav aria-label="Pie de página">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row">
          <p>{`© ${new Date().getFullYear()} TuApp. Todos los derechos reservados.`}</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#" className="hover:text-white">
                Política de privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Términos y condiciones
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
