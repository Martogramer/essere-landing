'use client';

import { motion, type Variants } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Retraso en segundos, útil para escalonar varios Reveal seguidos */
  delay?: number;
  /** Dirección desde la que entra el contenido */
  from?: 'up' | 'down' | 'left' | 'right' | 'none';
};

const DISTANCE = 28;

function getOffset(from: RevealProps['from']) {
  switch (from) {
    case 'up':
      return { y: DISTANCE };
    case 'down':
      return { y: -DISTANCE };
    case 'left':
      return { x: DISTANCE };
    case 'right':
      return { x: -DISTANCE };
    default:
      return {};
  }
}

/**
 * Hace fade-in + desplazamiento sutil cuando el elemento entra en viewport.
 * `once: true` para no repetir la animación en cada scroll hacia arriba/abajo
 * (más prolijo y menos mareante que re-animar todo el tiempo).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  from = 'up'
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, ...getOffset(from) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

/** Contenedor que escalona la aparición de sus hijos directos. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } }
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  from = 'up'
}: {
  children: React.ReactNode;
  className?: string;
  from?: RevealProps['from'];
}) {
  const variants: Variants = {
    hidden: { opacity: 0, ...getOffset(from) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
