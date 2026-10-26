import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({
  className,
  iconSize = 44,
  tone = 'default'
}: {
  className?: string;
  iconSize?: number;
  /** 'default' para fondo claro, 'inverted' para fondos oscuros/de color */
  tone?: 'default' | 'inverted';
}) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <span
        className="relative grid shrink-0 place-items-center rounded-full p-[2.5px]"
        style={{
          width: iconSize,
          height: iconSize,
          background:
            'conic-gradient(from 200deg, var(--essere-blue), var(--essere-violet), var(--essere-orange), var(--essere-blue))'
        }}
      >
        <span className="grid h-full w-full place-items-center rounded-full bg-background p-[3px]">
          <Image
            src="/essere-isotipo.png"
            alt=""
            width={iconSize}
            height={iconSize}
            priority
            className="h-full w-full object-contain"
          />
        </span>
      </span>
      <span
        className={cn(
          'text-xl font-bold tracking-[0.22em]',
          tone === 'inverted' ? 'text-current' : 'text-essere-blue-deep'
        )}
      >
        ESSERE
      </span>
    </span>
  );
}
