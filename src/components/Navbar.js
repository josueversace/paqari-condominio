export function Navbar() {
  return `
    <header id="navbar" class="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out bg-transparent pointer-events-auto">
        <!-- Top Marquee Banner -->
        <div class="w-full bg-sun text-navy text-[10px] font-headline font-extrabold py-1.5 overflow-hidden border-b border-white/10 uppercase tracking-[0.15em] shadow-sm">
            <div class="animate-marquee whitespace-nowrap flex gap-12">
                <span>PAQARI Condominio Campestre — Diferente, Por Naturaleza — Lotes desde 300 m² a 3 min de Sauce — Vista 100% Garantizada a la Laguna Azul — Oferta Fundador</span>
                <span>PAQARI Condominio Campestre — Diferente, Por Naturaleza — Lotes desde 300 m² a 3 min de Sauce — Vista 100% Garantizada a la Laguna Azul — Oferta Fundador</span>
                <span>PAQARI Condominio Campestre — Diferente, Por Naturaleza — Lotes desde 300 m² a 3 min de Sauce — Vista 100% Garantizada a la Laguna Azul — Oferta Fundador</span>
                <span>PAQARI Condominio Campestre — Diferente, Por Naturaleza — Lotes desde 300 m² a 3 min de Sauce — Vista 100% Garantizada a la Laguna Azul — Oferta Fundador</span>
            </div>
        </div>
        
        <!-- Main Transparent Navigation Bar -->
        <nav id="main-nav" class="w-full bg-transparent px-6 py-4 flex justify-between items-center transition-all duration-300">
            <div class="flex items-center gap-4">
                <a href="/" class="flex items-center">
                    <img alt="PAQARI Logo" class="h-10 sm:h-12 object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" src="/logo-lineas-blancas.png" />
                </a>
            </div>
            
            <!-- Minimalist Navigation Links -->
            <div class="hidden lg:flex gap-8 items-center">
                <a class="text-white hover:text-sun font-headline font-bold text-xs tracking-widest transition-colors hover-underline-grow drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]" href="#project"
                    onclick="if(typeof window.gtag !== 'undefined') window.gtag('event', 'menu_click', { section: 'El Proyecto' })">EL PROYECTO</a>
                <a class="text-white hover:text-sun font-headline font-bold text-xs tracking-widest transition-colors hover-underline-grow drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]" href="#amenities"
                    onclick="if(typeof window.gtag !== 'undefined') window.gtag('event', 'menu_click', { section: 'Amenities' })">AMENITIES</a>
                <a class="text-white hover:text-sun font-headline font-bold text-xs tracking-widest transition-colors hover-underline-grow drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]" href="#location"
                    onclick="if(typeof window.gtag !== 'undefined') window.gtag('event', 'menu_click', { section: 'Ubicacion' })">UBICACIÓN</a>
                <a class="text-white hover:text-sun font-headline font-bold text-xs tracking-widest transition-colors hover-underline-grow drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]" href="#masterplan"
                    onclick="if(typeof window.gtag !== 'undefined') window.gtag('event', 'menu_click', { section: 'Masterplan' })">FASES</a>
                <a class="text-white hover:text-sun font-headline font-bold text-xs tracking-widest transition-colors hover-underline-grow drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]" href="#investment"
                    onclick="if(typeof window.gtag !== 'undefined') window.gtag('event', 'menu_click', { section: 'Inversion' })">INVERSIÓN</a>
                
                <button
                    onclick="document.getElementById('form-contacto').scrollIntoView({behavior: 'smooth'}); if(typeof window.gtag !== 'undefined') window.gtag('event', 'generate_lead', { method: 'Menu_Contactar' }); if(typeof window.fbq !== 'undefined') window.fbq('track', 'Lead', { content_name: 'Menu_Contactar' });"
                    class="bg-sun text-navy px-6 py-2.5 rounded-none font-headline font-extrabold text-xs tracking-widest hover:bg-[#cda557] hover:scale-105 transition-all shadow-lg">
                    CONTACTAR
                </button>
            </div>
            
            <!-- Mobile Menu Toggle Button -->
            <button onclick="document.getElementById('mobile-drawer').classList.remove('hidden');"
                    class="lg:hidden text-white flex items-center justify-center p-2 focus:outline-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
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
            <img alt="PAQARI Logo" class="h-12 object-contain mb-4 mix-blend-screen" src="/logo-lineas-blancas.png" />
            
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
