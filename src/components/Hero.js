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
                <h1 class="hero-title text-[clamp(2.5rem,7.5vw,5rem)] font-headline font-extrabold text-white leading-[1.05] tracking-tighter text-shadow-strong uppercase">
                    Renace, Invierte<br/>
                    <span class="text-sun font-serif italic normal-case tracking-tight">y disfruta.</span>
                </h1>
                
                <p class="hero-subtitle text-base sm:text-lg text-white font-medium max-w-xl mx-auto font-body leading-relaxed text-shadow-strong">
                    Renace en naturaleza, invierte en tu futuro, disfruta la vida que mereces.
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
                
                <!-- Mobile Centered Large Play Button (Hidden for now as requested until video is ready) -->
                <div class="hidden">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"
                       onclick="if(typeof window.gtag !== 'undefined') window.gtag('event', 'generate_lead', { method: 'Clic_Video_Hero' }); if(typeof window.fbq !== 'undefined') window.fbq('track', 'Lead', { content_name: 'Clic_Video_Hero' });"
                       class="w-16 h-16 flex items-center justify-center rounded-full bg-white text-navy shadow-2xl hover:scale-105 transition-transform duration-300 group">
                        <span class="material-symbols-outlined text-3xl fill-current text-[#121820] pl-1">play_arrow</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Bottom Features Ribbon (Open full-width horizontal ribbon matching Adjunto 3: 4 columns, 1 row) -->
        <div class="hero-bottom-bar absolute bottom-0 md:bottom-4 left-0 right-0 z-10 w-full">
            <div class="w-full bg-[#070c0e]/85 backdrop-blur-md border-y border-sun/40 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
                <div class="grid grid-cols-4 w-full max-w-6xl mx-auto">
                    <!-- Item 1: Lotes Exclusivos -->
                    <div class="flex items-center justify-center gap-1.5 sm:gap-3.5 py-2.5 sm:py-3.5 px-1 sm:px-4 border-r border-sun/30 group hover:bg-white/[0.03] transition-colors">
                        <span class="material-symbols-outlined text-sun text-lg sm:text-2xl md:text-3xl select-none flex-shrink-0 transition-transform group-hover:scale-110">park</span>
                        <div class="text-left font-headline font-extrabold text-[8px] xs:text-[9px] sm:text-xs md:text-sm tracking-wider uppercase text-white leading-tight">
                            <span>LOTES</span><br/>
                            <span class="text-white/90">EXCLUSIVOS</span>
                        </div>
                    </div>
                    
                    <!-- Item 2: Entorno Ecológico -->
                    <div class="flex items-center justify-center gap-1.5 sm:gap-3.5 py-2.5 sm:py-3.5 px-1 sm:px-4 border-r border-sun/30 group hover:bg-white/[0.03] transition-colors">
                        <span class="material-symbols-outlined text-sun text-lg sm:text-2xl md:text-3xl select-none flex-shrink-0 transition-transform group-hover:scale-110">eco</span>
                        <div class="text-left font-headline font-extrabold text-[8px] xs:text-[9px] sm:text-xs md:text-sm tracking-wider uppercase text-white leading-tight">
                            <span>ENTORNO</span><br/>
                            <span class="text-white/90">ECOLÓGICO</span>
                        </div>
                    </div>
                    
                    <!-- Item 3: Alta Valorización -->
                    <div class="flex items-center justify-center gap-1.5 sm:gap-3.5 py-2.5 sm:py-3.5 px-1 sm:px-4 border-r border-sun/30 group hover:bg-white/[0.03] transition-colors">
                        <span class="material-symbols-outlined text-sun text-lg sm:text-2xl md:text-3xl select-none flex-shrink-0 transition-transform group-hover:scale-110">trending_up</span>
                        <div class="text-left font-headline font-extrabold text-[8px] xs:text-[9px] sm:text-xs md:text-sm tracking-wider uppercase text-white leading-tight">
                            <span>ALTA</span><br/>
                            <span class="text-white/90">VALORIZACIÓN</span>
                        </div>
                    </div>
                    
                    <!-- Item 4: Comunidad Sostenible -->
                    <div class="flex items-center justify-center gap-1.5 sm:gap-3.5 py-2.5 sm:py-3.5 px-1 sm:px-4 group hover:bg-white/[0.03] transition-colors">
                        <span class="material-symbols-outlined text-sun text-lg sm:text-2xl md:text-3xl select-none flex-shrink-0 transition-transform group-hover:scale-110">groups</span>
                        <div class="text-left font-headline font-extrabold text-[8px] xs:text-[9px] sm:text-xs md:text-sm tracking-wider uppercase text-white leading-tight">
                            <span>COMUNIDAD</span><br/>
                            <span class="text-white/90">SOSTENIBLE</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Right: Floating Play Button (Desktop only) -->
        <div class="hero-bottom-play absolute bottom-6 md:bottom-9 right-6 md:right-10 z-20 hidden xl:block">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"
               onclick="if(typeof window.gtag !== 'undefined') window.gtag('event', 'generate_lead', { method: 'Clic_Video_Hero' }); if(typeof window.fbq !== 'undefined') window.fbq('track', 'Lead', { content_name: 'Clic_Video_Hero' });"
               class="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#121820] shadow-2xl hover:scale-110 transition-transform duration-300 group">
                <span class="material-symbols-outlined text-xl fill-current text-[#121820] pl-0.5">play_arrow</span>
            </a>
        </div>
    </section>
  `;
}