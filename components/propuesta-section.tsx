import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';

const PRINCIPIOS = [
  { n: '01', label: 'Escucha activa' },
  { n: '02', label: 'Trabajo en equipo' },
  { n: '03', label: 'Bienestar sostenible' }
];

export function PropuestaSection() {
  return (
    <section
      id="propuesta"
      className="relative overflow-hidden bg-essere-navy px-5 py-24 text-essere-navy-foreground sm:px-6 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 size-[30rem] rounded-full bg-essere-violet/25 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 size-72 rounded-full bg-essere-blue/20 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <Reveal from="left">
          <p className="text-sm font-bold tracking-[0.3em] text-essere-orange">
            NUESTRA MANERA DE ACOMPAÑARTE
          </p>
          <h2 className="mt-6 font-serif text-5xl leading-[1.05] font-medium sm:text-6xl lg:text-7xl">
            Muchas miradas.
            <br />
            Un mismo cuidado.
          </h2>
        </Reveal>

        <Reveal from="right" delay={0.1}>
          <h3 className="font-serif text-3xl leading-tight font-medium sm:text-4xl">
            ESSERE reúne salud, prevención y bienestar en un entorno pensado
            para las personas.
          </h3>
          <p className="mt-5 max-w-md text-lg text-essere-navy-foreground/70">
            Un equipo multidisciplinar que comparte el espacio y una misma
            convicción: cada proceso necesita escucha, tiempo y
            acompañamiento profesional.
          </p>

          <RevealGroup className="mt-10 divide-y divide-essere-navy-foreground/15 border-t border-essere-navy-foreground/15">
            {PRINCIPIOS.map((item) => (
              <RevealItem
                key={item.n}
                from="left"
                className="flex items-center gap-6 py-5 text-xl"
              >
                <span className="font-serif text-lg text-essere-blue">
                  {item.n}
                </span>
                <span>{item.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
