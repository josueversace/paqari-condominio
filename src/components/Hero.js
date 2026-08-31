export function Hero() {
  return `
    <section id="hero-section" class="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-navy pt-20 pb-24 md:pb-0">
        <!-- Fullscreen Background Scenery (Vivid and naturally bright) -->
        <div class="absolute inset-0 z-0 hero-parallax-bg pointer-events-none select-none">
            <img alt="Laguna Azul Scenery" class="w-full h-full object-cover scale-110 origin-center brightness-105 contrast-100" src="/hero-image.webp" />
            <!-- Very subtle edge vignette to keep nature bright and vivid -->
            <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/35"></div>
        </div>

        <!-- Center Typographic Reveal & Explore Link -->
        <div class="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-8 md:pt-0">
            <!-- Localized diffused dark backdrop exclusively behind the typography -->
            <div class="absolute -inset-x-8 -inset-y-12 hero-radial-backdrop pointer-events-none -z-10 rounded-full blur-xl opacity-95"></div>

            <div class="space-y-6 md:space-y-8 relative z-10">
                <h1 class="hero-title text-[clamp(2.5rem,8vw,5.5rem)] font-headline font-extrabold text-white leading-[1.0] tracking-tighter text-shadow-strong uppercase">
                    Diferente,<br/>
                    <span class="text-sun font-serif italic lowercase tracking-tight">por naturaleza.</span>
                </h1>
                
                <p class="hero-subtitle text-base sm:text-lg text-white font-medium max-w-lg mx-auto font-body leading-relaxed text-shadow-strong">
                    El lujo de que nadie interrumpa tu calma. Lotes campestres exclusivos desde 235 m² con vista 100% garantizada a la Laguna Azul de Sauce (Tarapoto).
                </p>
                
                <!-- Explore Link (WSL Underlined Link Style) -->
                <div class="flex justify-center pt-2 md:pt-4">
                    <a href="#masterplan" class="hero-cta-btn inline-flex items-center text-white font-headline font-bold text-sm sm:text-base hover:text-sun transition-colors border-b border-white/40 pb-1.5 group whitespace-nowrap text-shadow-strong">
                        <span>Explore</span>
                        <span class="scroll-text-wrap text-sun pl-1.5 font-serif italic lowercase tracking-tight">
                            <span class="scroll-text-slide">
                                <span class="scroll-text text-left">lotes</span>
                                <span class="scroll-text text-left">sauce</span>
                                <span class="scroll-text text-left">preventa</span>
                                <span class="scroll-text text-left">laguna</span>
                            </span>
                        </span>
                        <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pl-1">arrow_outward</span>
                    </a>
                </div>
                
                <!-- Mobile Centered Large Play Button (Centered in mobile view) -->
                <div class="flex justify-center pt-4 md:hidden">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"
                       onclick="if(typeof window.gtag !== 'undefined') window.gtag('event', 'generate_lead', { method: 'Clic_Video_Hero' }); if(typeof window.fbq !== 'undefined') window.fbq('track', 'Lead', { content_name: 'Clic_Video_Hero' });"
                       class="w-16 h-16 flex items-center justify-center rounded-full bg-white text-navy shadow-2xl hover:scale-105 transition-transform duration-300 group">
                        <span class="material-symbols-outlined text-3xl fill-current text-[#121820] pl-1">play_arrow</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Bottom Footer Info Bar inside the Hero -->
        <div class="absolute bottom-6 md:bottom-10 left-0 right-0 z-10 px-4 sm:px-6 container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <!-- Left: Sales info & Saber Más link (sleek architectural badge matching design system) -->
            <div class="hero-bottom-left text-[11px] sm:text-sm text-white/95 font-body flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 bg-[#121820]/80 sm:bg-[#121820]/45 backdrop-blur-md px-5 py-3 sm:py-2.5 rounded-none border border-white/20 shadow-2xl text-center sm:text-left">
                <span class="leading-snug">
                    Lotes desde <strong class="text-white font-bold">S/ 50,913 ($60/m²)</strong> <span class="hidden sm:inline">•</span><br class="sm:hidden" />
                    Inicial <strong class="text-white font-bold">S/ 8,000</strong> • 3 Años sin Intereses
                </span>
                <a href="#masterplan" class="inline-flex items-center gap-1 text-sun hover:text-white border-b border-sun/60 hover:border-white pb-0.5 transition-all group font-headline font-bold text-xs uppercase tracking-wider whitespace-nowrap pt-1 sm:pt-0">
                    <span>Saber Más</span>
                    <span class="material-symbols-outlined text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">arrow_outward</span>
                </a>
            </div>
            
            <!-- Right: Small Play Button (Desktop only) -->
            <div class="hero-bottom-right hidden md:block">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"
                   onclick="if(typeof window.gtag !== 'undefined') window.gtag('event', 'generate_lead', { method: 'Clic_Video_Hero' }); if(typeof window.fbq !== 'undefined') window.fbq('track', 'Lead', { content_name: 'Clic_Video_Hero' });"
                   class="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#121820] shadow-2xl hover:scale-110 transition-transform duration-300 group">
                    <span class="material-symbols-outlined text-xl fill-current text-[#121820] pl-0.5">play_arrow</span>
                </a>
            </div>
        </div>
    </section>
  `;
}