export function Preloader() {
  return `
    <div id="preloader" class="fixed inset-0 bg-[#0b0f13] z-[99999] flex items-center justify-center pointer-events-none">
        <div class="text-center space-y-6 px-6">
            <div class="preloader-logo-wrapper relative flex items-center justify-center mx-auto">
                <!-- Glowing ambient background -->
                <div class="absolute w-32 h-32 bg-sun/10 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
                
                <!-- Official Golden Transparent Paqari Logo -->
                <img src="/logo-lineas-blancas.webp" alt="PAQARI Logo" class="h-20 sm:h-24 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(189,162,101,0.35)] relative z-10" />
            </div>
            
            <div class="space-y-2">
                <p class="text-sun font-headline font-extrabold text-[11px] tracking-[0.25em] uppercase">Diferente, Por Naturaleza</p>
                <div class="w-12 h-[1.5px] bg-sun/40 mx-auto"></div>
            </div>
        </div>
    </div>
  `;
}
