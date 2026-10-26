'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { ProfessionalLoginDialog } from '@/components/professional-login-dialog';

const NAV_LINKS = [
  { href: '#propuesta', label: 'Nuestra propuesta' },
  { href: '#disciplinas', label: 'Disciplinas' }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
        <Link href="#" aria-label="ESSERE, ir al inicio" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 text-base font-medium text-foreground/80 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-essere-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ProfessionalLoginDialog>
            <Button
              variant="outline"
              className="h-11 rounded-full border-border bg-transparent px-5 text-base hover:bg-muted"
            >
              Acceso profesional
            </Button>
          </ProfessionalLoginDialog>
        </div>

        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 place-items-center rounded-full border border-border text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-border/60 bg-background md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4 text-lg font-medium">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-foreground/85 transition-colors hover:bg-muted hover:text-essere-blue"
                >
                  {link.label}
                </a>
              ))}
              <ProfessionalLoginDialog>
                <Button className="mt-2 h-12 w-full rounded-full bg-essere-navy text-base text-essere-navy-foreground hover:bg-essere-navy/90">
                  Acceso profesional
                </Button>
              </ProfessionalLoginDialog>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
