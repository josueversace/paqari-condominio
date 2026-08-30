export function Footer() {
  return `
    <footer class="bg-[#0b0f13] text-white py-16 border-t border-white/5 relative z-10">
        <div class="container mx-auto px-6 space-y-12">
            
            <!-- Top Row: Logo, Links, and Social -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/5 pb-12">
                <div class="space-y-4">
                    <img alt="PAQARI Logo" class="h-10 object-contain mix-blend-screen" src="/logo-lineas-blancas.png" />
                    <p class="text-white/40 text-xs font-body uppercase tracking-widest">Diferente, Por Naturaleza</p>
                </div>
                
                <!-- Quick links -->
                <div class="flex flex-wrap gap-x-8 gap-y-2 text-xs font-headline font-bold tracking-widest uppercase text-white/70">
                    <a href="#project" class="hover:text-sun hover-underline-grow transition-colors">Proyecto</a>
                    <a href="#amenities" class="hover:text-sun hover-underline-grow transition-colors">Amenities</a>
                    <a href="#location" class="hover:text-sun hover-underline-grow transition-colors">Ubicación</a>
                    <a href="#masterplan" class="hover:text-sun hover-underline-grow transition-colors">Fases & 360°</a>
                    <a href="#investment" class="hover:text-sun hover-underline-grow transition-colors">Inversión</a>
                </div>

                <!-- Social links -->
                <div class="flex gap-4">
                    <a href="https://www.facebook.com/EcoResidencialPaqari" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-sun hover:text-sun transition-colors">
                        <!-- Facebook icon SVG -->
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/paqaricondominiocampestre/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-sun hover:text-sun transition-colors">
                        <!-- Instagram icon SVG -->
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                </div>
            </div>

            <!-- Middle Row: Contact details -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-xs sm:text-sm text-white/60 font-body leading-relaxed">
                <div class="space-y-2">
                    <h5 class="text-white font-headline font-bold uppercase tracking-widest text-[10px] text-sun">Ubicación</h5>
                    <p>Condominio Paqari, Av. Leticia 512, Sauce,<br>Provincia de San Martín, San Martín, Perú.</p>
                </div>
                <div class="space-y-2">
                    <h5 class="text-white font-headline font-bold uppercase tracking-widest text-[10px] text-sun">Contacto Comercial</h5>
                    <p>Teléfono / WhatsApp: <a href="https://wa.me/51962387203" target="_blank" class="hover:text-sun transition-colors">+51 962 387 203</a><br>Email: <a href="mailto:hola@soypaqari.com" class="hover:text-sun transition-colors">hola@soypaqari.com</a></p>
                </div>
                <div class="space-y-2">
                    <h5 class="text-white font-headline font-bold uppercase tracking-widest text-[10px] text-sun">Sobre Nosotros</h5>
                    <p>PAQARI es un desarrollo inmobiliario de alta gama especializado en habilitación urbana campestre y conservación del paisaje.</p>
                </div>
            </div>

            <!-- Bottom Row: Copyright & Agency Credit Footprint -->
            <div class="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8 text-[10px] text-white/40 uppercase tracking-widest font-body">
                <div>© 2026 PAQARI CONDOMINIO CAMPESTRE. Todos los derechos reservados.</div>
                <div class="flex items-center gap-1.5 lowercase first-letter:uppercase">
                    <span>desarrollado por</span>
                    <a href="https://conecta2.lat" target="_blank" rel="noopener noreferrer" class="text-sun/90 hover:text-sun font-headline font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-0.5">
                        <span>CONECTA</span>
                        <span class="material-symbols-outlined text-[10px]">arrow_outward</span>
                    </a>
                </div>
            </div>
            
        </div>
    </footer>
  `;
}
