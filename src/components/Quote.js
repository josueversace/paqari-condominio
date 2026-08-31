export function Quote() {
  return `
    <section class="py-28 sm:py-36 bg-navy text-white relative border-t border-white/5 overflow-hidden" id="project">
        <!-- Background subtle light spots -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sun/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div class="container mx-auto px-6 relative z-10">
            <div class="max-w-4xl mx-auto text-center space-y-10">
                <!-- Large, premium serif typography matching brand brief promise -->
                <h2 class="quote-text text-[clamp(1.75rem,5.5vw,3rem)] font-headline font-extrabold leading-[1.2] tracking-tight text-white/95">
                    Un espacio diseñado para que <span class="text-sun italic">el mundo desaparezca</span>. Lotes campestres desde 235 m² en un mirador privado e ininterrumpido frente a la <span class="text-sun">Laguna Azul de Sauce (Tarapoto)</span>.
                </h2>
                <div class="w-16 h-[2px] bg-sun/30 mx-auto quote-line"></div>
                <p class="text-white/70 font-body text-sm sm:text-base max-w-2xl mx-auto leading-relaxed quote-subtitle">
                    Propiedad privada, autosostenible y paz absoluta. Planificado para disfrutar de tu propio refugio sin interferencias, con alta plusvalía y proyección de renta turística asegurada.
                </p>
            </div>
        </div>
    </section>
  `;
}
