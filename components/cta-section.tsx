import { Button } from '@/components/ui/button';
import { ProfessionalLoginDialog } from '@/components/professional-login-dialog';
import { Reveal } from '@/components/motion/reveal';

export function CtaSection() {
  return (
    <section className="px-5 pb-24 sm:px-6 sm:pb-32">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-essere-violet px-8 py-16 text-essere-navy-foreground sm:px-14 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-essere-orange/30 blur-[90px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-essere-blue/30 blur-[90px]"
          />

          <div className="relative flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold tracking-[0.3em] text-essere-orange">
                ESTAMOS CREANDO ALGO NUEVO
              </p>
              <h2 className="mt-5 max-w-md font-serif text-5xl leading-[1.05] font-medium sm:text-6xl">
                Muy pronto, más cerca.
              </h2>
              <p className="mt-5 max-w-md text-lg text-essere-navy-foreground/85">
                Esta es la primera versión de nuestro espacio digital.
                Próximamente vas a poder conocer al equipo y solicitar turnos
                online.
              </p>
            </div>

            <ProfessionalLoginDialog>
              <Button className="h-14 shrink-0 rounded-full bg-background px-8 text-lg text-foreground shadow-lg transition-transform hover:scale-[1.03] hover:bg-background/90">
                Acceso para profesionales
              </Button>
            </ProfessionalLoginDialog>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
