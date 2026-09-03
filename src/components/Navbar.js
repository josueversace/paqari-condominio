export function Navbar() {
  return `
    <header id="navbar" class="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out shadow-lg pointer-events-auto bg-gradient-to-r from-[#7a5c24] via-[#bda265] via-[#dfc68b] via-[#bda265] to-[#7a5c24] border-b border-black/10">
        <!-- Top Marquee Banner -->
        <div class="w-full bg-black/15 text-navy text-[10px] font-headline font-extrabold py-1.5 overflow-hidden border-b border-black/10 uppercase tracking-[0.15em]">
            <div class="animate-marquee whitespace-nowrap flex gap-12">
                <span>ECORESIDENCIAL PAQARI — Diferente, Por Naturaleza — Lotes desde 235 m² a 3 min de Sauce (Tarapoto) — Inicial desde S/ 8,000 — 3 Años sin Intereses — 100% Vista Garantizada</span>
                <span>ECORESIDENCIAL PAQARI — Diferente, Por Naturaleza — Lotes desde 235 m² a 3 min de Sauce (Tarapoto) — Inicial desde S/ 8,000 — 3 Años sin Intereses — 100% Vista Garantizada</span>
                <span>ECORESIDENCIAL PAQARI — Diferente, Por Naturaleza — Lotes desde 235 m² a 3 min de Sauce (Tarapoto) — Inicial desde S/ 8,000 — 3 Años sin Intereses — 100% Vista Garantizada</span>
                <span>ECORESIDENCIAL PAQARI — Diferente, Por Naturaleza — Lotes desde 235 m² a 3 min de Sauce (Tarapoto) — Inicial desde S/ 8,000 — 3 Años sin Intereses — 100% Vista Garantizada</span>
            </div>
        </div>
        
        <!-- Main Navigation Bar -->
        <nav id="main-nav" class="w-full px-6 py-3 sm:py-3.5 flex justify-between items-center transition-all duration-300">
            <div class="flex items-center gap-4">
                <a href="/" class="flex items-center">
                    <img alt="PAQARI Logo" class="h-9 sm:h-11 object-contain filter brightness-0 opacity-90 drop-shadow-sm" src="/logo-lineas-blancas.webp" />
                </a>
            </div>
            
            <!-- Minimalist Navigation Links -->
            <div class="hidden lg:flex gap-8 items-center">
                <a class="text-navy hover:text-black font-headline font-bold text-xs tracking-widest transition-colors hover-underline-grow" href="#project"
                    onclick="if(typeof window.gtag !== 'undefined') window.gtag('event', 'menu_click', { section: 'El Proyecto' })">EL PROYECTO</a>
                <a class="text-navy hover:text-black font-headline font-bold text-xs tracking-widest transition-colors hover-underline-grow" href="#amenities"
                    onclick="if(typeof window.gtag !== 'undefined') window.gtag('event', 'menu_click', { section: 'Amenities' })">AMENITIES</a>
                <a class="text-navy hover:text-black font-headline font-bold text-xs tracking-widest transition-colors hover-underline-grow" href="#location"
                    onclick="if(typeof window.gtag !== 'undefined') window.gtag('event', 'menu_click', { section: 'Ubicacion' })">UBICACIÓN</a>
                <a class="text-navy hover:text-black font-headline font-bold text-xs tracking-widest transition-colors hover-underline-grow" href="#masterplan"
                    onclick="if(typeof window.gtag !== 'undefined') window.gtag('event', 'menu_click', { section: 'Masterplan' })">FASES</a>
                <a class="text-navy hover:text-black font-headline font-bold text-xs tracking-widest transition-colors hover-underline-grow" href="#investment"
                    onclick="if(typeof window.gtag !== 'undefined') window.gtag('event', 'menu_click', { section: 'Inversion' })">INVERSIÓN</a>
                
                <button
                    onclick="document.getElementById('form-contacto').scrollIntoView({behavior: 'smooth'}); if(typeof window.gtag !== 'undefined') window.gtag('event', 'generate_lead', { method: 'Menu_Contactar' }); if(typeof window.fbq !== 'undefined') window.fbq('track', 'Lead', { content_name: 'Menu_Contactar' });"
                    class="bg-navy text-white px-6 py-2.5 rounded-none font-headline font-extrabold text-xs tracking-widest hover:bg-black hover:scale-105 transition-all shadow-md">
                    CONTACTAR
                </button>
            </div>
            
            <!-- Mobile Menu Toggle Button -->
            <button onclick="document.getElementById('mobile-drawer').classList.remove('hidden');"
                    class="lg:hidden text-navy flex items-center justify-center p-2 focus:outline-none">
                <span class="material-symbols-outlined text-[32px]">menu</span>
            </button>
        </nav>
        
        <!-- Mobile Drawer Overlay (Full screen premium mobile menu) -->
        <div id="mobile-drawer" class="fixed inset-0 bg-[#121820]/98 backdrop-blur-xl z-[200] hidden flex flex-col justify-center items-center gap-8 transition-all duration-300">
            <!-- Close btn -->
            <button onclick="document.getElementById('mobile-drawer').classList.add('hidden');" class="absolute top-6 right-6 text-white p-2">
                <span class="material-symbols-outlined text-3xl">close</span>
            </button>
            
            <!-- Logo inside drawer -->
            <img alt="PAQARI Logo" class="h-12 object-contain mb-4 mix-blend-screen" src="/logo-lineas-blancas.webp" />
            
            <!-- Links -->
            <a class="text-white/80 hover:text-white text-lg font-headline font-bold tracking-widest uppercase transition-colors" href="#project" onclick="document.getElementById('mobile-drawer').classList.add('hidden');">EL PROYECTO</a>
            <a class="text-white/80 hover:text-white text-lg font-headline font-bold tracking-widest uppercase transition-colors" href="#amenities" onclick="document.getElementById('mobile-drawer').classList.add('hidden');">AMENITIES</a>
            <a class="text-white/80 hover:text-white text-lg font-headline font-bold tracking-widest uppercase transition-colors" href="#location" onclick="document.getElementById('mobile-drawer').classList.add('hidden');">UBICACIÓN</a>
            <a class="text-white/80 hover:text-white text-lg font-headline font-bold tracking-widest uppercase transition-colors" href="#masterplan" onclick="document.getElementById('mobile-drawer').classList.add('hidden');">FASES</a>
            <a class="text-white/80 hover:text-white text-lg font-headline font-bold tracking-widest uppercase transition-colors" href="#investment" onclick="document.getElementById('mobile-drawer').classList.add('hidden');">INVERSIÓN</a>
            
            <button onclick="document.getElementById('mobile-drawer').classList.add('hidden'); document.getElementById('form-contacto').scrollIntoView({behavior: 'smooth'}); if(typeof window.gtag !== 'undefined') window.gtag('event', 'generate_lead', { method: 'Menu_Contactar' }); if(typeof window.fbq !== 'undefined') window.fbq('track', 'Lead', { content_name: 'Menu_Contactar' });"
                    class="bg-sun text-navy px-8 py-3 font-headline font-extrabold text-xs tracking-widest hover:bg-[#cda557] mt-4 uppercase">
                CONTACTAR
            </button>
        </div>
    </header>
  `;
}
