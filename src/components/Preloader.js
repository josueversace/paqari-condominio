export function Preloader() {
  return `
    <div id="preloader" class="fixed inset-0 bg-navy z-[99999] flex items-center justify-center pointer-events-none">
        <div class="text-center space-y-6 px-6">
            <div class="preloader-logo-wrapper relative w-24 h-24 sm:w-28 sm:h-28 mx-auto flex items-center justify-center">
                <!-- Golden elegant monogram logo SVG -->
                <svg class="w-full h-full text-sun stroke-[0.5]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="1.5" class="opacity-25" />
                    <!-- Mountain contour shape representing Sauce hills & logo -->
                    <path d="M25 65 L45 35 L60 55 L75 35 L85 65 Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <!-- Sun circle above peak -->
                    <circle cx="50" cy="28" r="4" fill="currentColor" />
                </svg>
            </div>
            <div class="space-y-2">
                <h2 class="text-sun font-headline font-bold tracking-[0.25em] text-xs uppercase">PAQARI</h2>
                <p class="text-white/40 font-body text-[10px] tracking-widest uppercase">Diferente, Por Naturaleza</p>
            </div>
        </div>
    </div>
  `;
}
