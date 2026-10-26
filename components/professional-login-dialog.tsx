'use client';

import { useState } from 'react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

/**
 * Modal de acceso para profesionales.
 *
 * Esta es una maqueta de interfaz: no hay autenticación real conectada
 * todavía. El submit no llama a ningún backend a propósito — eso se
 * resuelve cuando definamos la estrategia de autenticación del portal
 * (ver roadmap: núcleo de identidad y acceso).
 */
export function ProfessionalLoginDialog({
  children
}: {
  children: React.ReactNode;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md border-border bg-card p-8 sm:rounded-2xl">
        <DialogHeader className="items-center text-center sm:items-center sm:text-center">
          <Logo className="mb-2" />
          <p className="text-xs font-bold tracking-[0.22em] text-essere-violet">
            PORTAL DE PROFESIONALES
          </p>
          <DialogTitle className="font-serif text-3xl font-medium text-foreground">
            Qué bueno verte.
          </DialogTitle>
          <DialogDescription className="text-base">
            Ingresá para acceder a tu espacio de trabajo.
          </DialogDescription>
        </DialogHeader>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-1.5 text-left">
            <Label htmlFor="email" className="text-foreground">
              Correo electrónico
            </Label>
            <Input id="email" type="email" placeholder="tu@correo.com" />
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <Label htmlFor="password" className="text-foreground">
              Contraseña
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                {showPassword ? 'Ocultar' : 'Ver'}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="mt-2 h-11 w-full rounded-full bg-essere-navy text-essere-navy-foreground hover:bg-essere-navy/90"
          >
            Ingresar
          </Button>

          <button
            type="button"
            className="text-center text-sm text-essere-blue hover:underline"
          >
            Usar acceso de demostración
          </button>
        </form>

        <p className="border-t border-border pt-4 text-center text-xs text-muted-foreground">
          Prototipo privado · La autenticación productiva se conectará en la
          siguiente fase.
        </p>
      </DialogContent>
    </Dialog>
  );
}
