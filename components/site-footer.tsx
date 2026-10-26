import { Logo } from '@/components/logo';

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center text-base text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
        <Logo iconSize={34} />
        <p>Salud y bienestar integral</p>
        <p>© {new Date().getFullYear()} ESSERE</p>
      </div>
    </footer>
  );
}
