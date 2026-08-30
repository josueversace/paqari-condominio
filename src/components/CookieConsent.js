export function CookieConsent() {
    return `
        <div id="cookie-banner" class="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-navy text-white p-6 rounded-none shadow-2xl z-[999] transition-transform duration-500 translate-y-full flex flex-col gap-4 border border-white/10 hidden">
            <div class="flex items-start justify-between gap-4">
                <div class="space-y-2">
                    <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-sun text-[20px]">cookie</span>
                        <h3 class="font-headline font-bold text-sm tracking-widest text-sun">TU PRIVACIDAD</h3>
                    </div>
                    <p class="text-xs text-white/80 font-body leading-relaxed">
                        Utilizamos cookies para personalizar tu experiencia, medir el rendimiento y optimizar nuestros anuncios. Tus datos están seguros con nosotros.
                    </p>
                </div>
            </div>
            <div class="flex gap-2 text-xs font-headline font-bold mt-2">
                <button id="btn-accept-cookies" class="flex-1 bg-sun text-navy py-2.5 rounded-none hover:bg-orange-400 hover:scale-[1.02] transition-all shadow-lg">ACEPTAR</button>
                <button id="btn-decline-cookies" class="flex-1 bg-transparent text-white/70 py-2.5 rounded-none hover:bg-white/10 hover:text-white transition-colors border border-white/20">RECHAZAR</button>
            </div>
        </div>
    `;
}
