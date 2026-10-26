import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';
import { cn } from '@/lib/utils';

const DISCIPLINAS = [
  {
    n: '01',
    titulo: 'Kinesiología',
    descripcion: 'Movimiento, recuperación y prevención con una mirada integral.',
    color: 'blue'
  },
  {
    n: '02',
    titulo: 'Nutrición',
    descripcion:
      'Hábitos posibles para una relación más saludable con la alimentación.',
    color: 'orange'
  },
  {
    n: '03',
    titulo: 'Podología',
    descripcion: 'Cuidado especializado para tu salud y bienestar cotidiano.',
    color: 'violet'
  },
  {
    n: '04',
    titulo: 'Movimiento consciente',
    descripcion: 'Educación física, yoga y tai chi para reconectar con tu cuerpo.',
    color: 'blue'
  }
] as const;

const COLOR_STYLES: Record<string, { bg: string; text: string; bar: string }> = {
  blue: { bg: 'bg-essere-blue/10', text: 'text-essere-blue', bar: 'bg-essere-blue' },
  orange: {
    bg: 'bg-essere-orange/10',
    text: 'text-essere-orange',
    bar: 'bg-essere-orange'
  },
  violet: {
    bg: 'bg-essere-violet/10',
    text: 'text-essere-violet',
    bar: 'bg-essere-violet'
  }
};

export function DisciplinasSection() {
  return (
    <section id="disciplinas" className="px-5 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="text-sm font-bold tracking-[0.3em] text-essere-orange">
              DISCIPLINAS
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-[1.05] font-medium text-foreground sm:text-6xl lg:text-7xl">
              Tu bienestar,
              <br />
              desde distintos lugares.
            </h2>
          </Reveal>
          <Reveal delay={0.1} from="right">
            <p className="max-w-xs text-lg text-muted-foreground">
              Encontrá el acompañamiento que necesitás dentro de una
              comunidad profesional cercana.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DISCIPLINAS.map((d) => {
            const style = COLOR_STYLES[d.color];
            return (
              <RevealItem key={d.n}>
                <div
                  className={cn(
                    'group flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-foreground/5',
                    style.bg
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-foreground/25">
                      {d.n}
                    </span>
                    <span
                      className={cn(
                        'h-9 w-1.5 rounded-full transition-all duration-300 group-hover:h-12',
                        style.bar
                      )}
                    />
                  </div>
                  <div className="mt-10">
                    <h3 className="font-serif text-2xl font-medium text-foreground">
                      {d.titulo}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {d.descripcion}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
