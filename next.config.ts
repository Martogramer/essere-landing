import type { NextConfig } from 'next';

// Config intencionalmente mínima y portable: nada específico de Vercel.
// Ver decisión de arquitectura: evitar acoplamiento a la plataforma de hosting
// porque el destino de despliegue previsto es AWS.
const nextConfig: NextConfig = {};

export default nextConfig;
