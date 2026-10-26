'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';

const FEATURES = ['Atención personalizada', 'Enfoque integral'];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-24 sm:px-6 sm:pt-24 md:pb-32">
      {/* Fondo gráfico: manchas de color desenfocadas con los tres colores de marca */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-40 size-[28rem] rounded-full bg-essere-blue/25 blur-[90px] sm:size-[36rem]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -left-32 size-72 rounded-full bg-essere-violet/20 blur-[80px] sm:size-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 size-64 rounded-full bg-essere-orange/20 blur-[80px]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:gap-10">
        <div>
          <Reveal>
            <p className="text-sm font-bold tracking-[0.3em] text-essere-orange">
              SALUD · MOVIMIENTO · BIENESTAR
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-serif text-6xl leading-[1.02] font-medium text-foreground sm:text-7xl lg:text-[5.5rem]">
              Un espacio
              <br />
              para{' '}
              <span className="relative italic text-essere-blue-deep">
                sentirte
              </span>
              <br />
              <span className="relative italic text-essere-blue-deep">
                bien.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Profesionales de distintas disciplinas trabajando cerca, para
              acompañarte de una manera más humana e integral.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button
                asChild
                className="h-14 rounded-full bg-essere-navy px-9 text-lg text-essere-navy-foreground shadow-lg shadow-essere-navy/20 transition-transform hover:scale-[1.03] hover:bg-essere-navy/90"
              >
                <a href="#propuesta">Conocé el espacio</a>
              </Button>
              <a
                href="#disciplinas"
                className="inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-essere-blue"
              >
                Soy profesional <span aria-hidden>↗</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <ul className="mt-12 flex flex-wrap gap-x-9 gap-y-3 text-sm font-medium text-muted-foreground sm:text-base">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="text-essere-orange">✦</span>
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'conic-gradient(from 120deg, var(--essere-blue), var(--essere-violet), var(--essere-orange), var(--essere-blue))',
              filter: 'blur(2px)',
              opacity: 0.18
            }}
          />
          <div className="absolute inset-[14%] rounded-full border border-essere-blue/20" />
          <div className="absolute inset-[26%] rounded-full border border-essere-violet/20" />

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-3/5"
          >
            <Image
              src="/essere-isotipo.png"
              alt="Isotipo de ESSERE: figura humana estilizada en movimiento"
              width={480}
              height={480}
              priority
              className="w-full drop-shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
