export function Masterplan() {
  return `
    <section class="py-24 bg-[#FAF9F6] text-navy overflow-hidden border-t border-navy/5" id="masterplan">
        <div class="container mx-auto px-6 space-y-12 flex flex-col items-center">
            
            <!-- Intro Text -->
            <div class="w-full text-center max-w-2xl mx-auto space-y-4">
                <span class="text-xs font-headline font-extrabold text-sun tracking-[0.2em] uppercase">Distribución & Vistas Reales</span>
                <h2 class="text-[clamp(2.5rem,8vw,3.5rem)] font-headline font-extrabold leading-[1.0] uppercase tracking-tighter text-navy">
                    Masterplan & Vista 360°
                </h2>
                <p class="text-navy/70 font-body text-sm sm:text-base leading-relaxed">
                    50 lotes residenciales únicos con pendiente natural frente a la Laguna Azul de Sauce. Explora el plano 3D o sumérgete en el tour 360° en tiempo real.
                </p>
            </div>

            <!-- View Switcher Tabs (Tour 360 vs Plano 3D) -->
            <div class="flex items-center gap-3 bg-navy/5 p-1.5 border border-navy/10 self-center">
                <button id="tab-btn-360" onclick="window.switchMasterplanTab('360')" 
                        class="px-5 py-2.5 text-xs font-headline font-extrabold tracking-wider uppercase transition-all bg-navy text-white shadow-md flex items-center gap-2">
                    <span class="material-symbols-outlined text-base text-sun">360</span>
                    <span>Tour Virtual 360° (En Vivo)</span>
                </button>
                <button id="tab-btn-map" onclick="window.switchMasterplanTab('map')" 
                        class="px-5 py-2.5 text-xs font-headline font-extrabold tracking-wider uppercase transition-all bg-transparent text-navy/70 hover:text-navy flex items-center gap-2">
                    <span class="material-symbols-outlined text-base text-navy/70">map</span>
                    <span>Plano Arquitectónico 3D</span>
                </button>
            </div>
            
            <!-- Tab 1: Kuula 360 View Container (Default Active) -->
            <div id="view-360-container" class="w-full max-w-5xl space-y-4">
                <div class="w-full relative bg-navy/95 border border-navy/10 overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/9] min-h-[420px] sm:min-h-[540px]">
                    <!-- Kuula 360 Iframe Embed -->
                    <iframe 
                        src="https://kuula.co/share/Lf0dH?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&inst=es" 
                        width="100%" 
                        height="100%" 
                        class="w-full h-full border-0 absolute inset-0"
                        allow="accelerometer; gyroscope; magnetometer; vr" 
                        allowfullscreen="true" 
                        webkitallowfullscreen="true" 
                        mozallowfullscreen="true" 
                        loading="lazy">
                    </iframe>
                </div>
                
                <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-body text-navy/70 bg-navy/5 px-6 py-3 border border-navy/10">
                    <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-sun text-base">pan_tool</span>
                        <span>Arrastra o gira con el dedo / mouse para explorar la vista panorámica 360° real.</span>
                    </div>
                    <a href="https://kuula.co/share/Lf0dH?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&inst=es" target="_blank" rel="noopener noreferrer" 
                       class="font-headline font-bold text-navy hover:text-sun inline-flex items-center gap-1 uppercase tracking-wider text-[11px] transition-colors whitespace-nowrap">
                        <span>Pantalla Completa</span>
                        <span class="material-symbols-outlined text-sm">fullscreen</span>
                    </a>
                </div>
            </div>

            <!-- Tab 2: Plano 3D Interactive Map Wrapper (Hidden by default) -->
            <div id="view-map-container" class="w-full max-w-5xl space-y-4 hidden">
                <div
                    class="w-full relative bg-navy/5 p-4 md:p-8 border border-navy/10 flex items-center justify-center overflow-hidden group cursor-pointer"
                    onclick="document.getElementById('lightbox-map').classList.remove('hidden'); document.body.style.overflow='hidden';">
                    
                    <!-- Instructivo -->
                    <div class="absolute top-6 left-1/2 -translate-x-1/2 bg-navy/80 backdrop-blur-md px-5 py-2 border border-white/20 text-white text-xs font-headline font-bold z-20 flex items-center gap-2">
                        <span class="material-symbols-outlined text-[16px] text-sun">zoom_in</span> Toca para ampliar Plano 3D
                    </div>

                    <img src="/mapa3d.png" alt="Plano Paqari 3D"
                        class="w-full max-w-4xl h-auto object-contain transition-transform duration-700 md:group-hover:scale-[1.03]" />
                    
                    <div class="absolute bottom-6 right-6 flex items-center gap-4 bg-navy/90 backdrop-blur-md p-3 border border-white/25 z-20 hidden md:flex">
                        <span class="material-symbols-outlined text-sun">explore</span>
                        <div class="text-[10px] font-headline font-bold uppercase tracking-wider text-white">Orientación: Norte-Oeste</div>
                    </div>
                </div>

                <!-- Leyenda del mapa -->
                <div class="flex flex-wrap justify-center gap-6 bg-navy/5 px-6 py-3 border border-navy/10">
                    <div class="flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-600 rounded-none shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
                        <span class="text-[10px] font-headline font-bold uppercase tracking-widest text-navy/80">Vendidos</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="w-3 h-3 bg-sun rounded-none shadow-[0_0_8px_rgba(189,162,101,0.8)]"></span>
                        <span class="text-[10px] font-headline font-bold uppercase tracking-widest text-navy/80">Disponibles</span>
                    </div>
                </div>
            </div>

            <!-- Layout 401 Grid: 3 Phases + Signup Form Card -->
            <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                
                <!-- Card 1: Fase 1 -->
                <div class="bg-white border border-navy/10 p-8 flex flex-col justify-between min-h-[300px] shadow-sm text-navy">
                    <div class="space-y-4">
                        <span class="text-[9px] font-headline font-extrabold text-sun tracking-widest uppercase">FASE 1</span>
                        <h3 class="text-lg font-headline font-bold text-navy uppercase tracking-wide">Preventa Fundador</h3>
                        <p class="text-navy/70 text-xs font-body leading-relaxed">
                            Lotes exclusivos a precio inicial de pre-lanzamiento ($18,000 USD). La mayor plusvalía asegurada. Últimos 10 lotes.
                        </p>
                    </div>
                    <div class="text-[9px] font-headline font-bold text-navy/40 tracking-wider uppercase">80% COMPRADO</div>
                </div>
                
                <!-- Card 2: Fase 2 -->
                <div class="bg-white border border-navy/10 p-8 flex flex-col justify-between min-h-[300px] shadow-sm text-navy">
                    <div class="space-y-4">
                        <span class="text-[9px] font-headline font-extrabold text-sun tracking-widest uppercase">FASE 2</span>
                        <h3 class="text-lg font-headline font-bold text-navy uppercase tracking-wide">Habilitación</h3>
                        <p class="text-navy/70 text-xs font-body leading-relaxed">
                            Apertura de vías afirmadas, instalación subterránea de servicios básicos (luz y agua) y pórtico de ingreso controlado.
                        </p>
                    </div>
                    <div class="text-[9px] font-headline font-bold text-navy/40 tracking-wider uppercase">EN PROCESO</div>
                </div>
                
                <!-- Card 3: Fase 3 -->
                <div class="bg-white border border-navy/10 p-8 flex flex-col justify-between min-h-[300px] shadow-sm text-navy">
                    <div class="space-y-4">
                        <span class="text-[9px] font-headline font-extrabold text-sun tracking-widest uppercase">FASE 3</span>
                        <h3 class="text-lg font-headline font-bold text-navy uppercase tracking-wide">Áreas Comunes</h3>
                        <p class="text-navy/70 text-xs font-body leading-relaxed">
                            Construcción del Club House, habilitación de muelles flotantes en la Laguna Azul y decks sociales de meditación.
                        </p>
                    </div>
                    <div class="text-[9px] font-headline font-bold text-navy/40 tracking-wider uppercase">PLANEADO</div>
                </div>
                
                <!-- Card 4: Form Brochure Signup (Dark Navy contrast card for conversion power!) -->
                <div class="bg-navy p-8 flex flex-col justify-between border border-[#1e293b] min-h-[320px] text-white shadow-xl">
                    <div class="space-y-2">
                        <span class="text-[9px] font-headline font-extrabold text-sun tracking-widest uppercase">Brochure PDF</span>
                        <h3 class="text-lg font-headline font-extrabold uppercase tracking-wide text-white">Sé parte de PAQARI</h3>
                        <p class="text-white/70 text-[11px] font-body leading-normal">Recibe los planos y la lista de precios en tu WhatsApp.</p>
                    </div>
                    
                    <form id="form-contacto" class="space-y-2.5 mt-4">
                        <input name="nombre" class="w-full bg-white/10 border border-white/15 px-4 py-2.5 text-xs placeholder:text-white/40 focus:ring-sun text-white font-body focus:outline-none" placeholder="Nombre Completo" type="text" required />
                        <input name="correo" class="w-full bg-white/10 border border-white/15 px-4 py-2.5 text-xs placeholder:text-white/40 focus:ring-sun text-white font-body focus:outline-none" placeholder="Tu mejor correo" type="email" required />
                        <input name="whatsapp" class="w-full bg-white/10 border border-white/15 px-4 py-2.5 text-xs placeholder:text-white/40 focus:ring-sun text-white font-body focus:outline-none" placeholder="WhatsApp" type="tel" required />
                        <button id="btn-submit" class="w-full bg-sun text-navy py-3 font-headline font-extrabold text-[10px] tracking-widest hover:bg-[#cda557] transition-all uppercase" type="submit">
                            DESCARGAR BROCHURE
                        </button>
                    </form>
                </div>
            </div>

            <!-- Modal Lightbox (Fullscreen Zoom) -->
            <div id="lightbox-map" class="fixed inset-0 z-[99999] bg-navy/95 hidden flex-col items-center justify-center backdrop-blur-xl">
                <div class="absolute top-0 w-full p-4 flex justify-between items-center z-50 bg-gradient-to-b from-black/60 to-transparent">
                    <div class="text-white/80 font-headline text-xs flex items-center gap-2 px-4">
                        <span class="material-symbols-outlined text-lg">touch_app</span> Desliza para explorar el mapa
                    </div>
                    <button onclick="event.stopPropagation(); document.getElementById('lightbox-map').classList.add('hidden'); document.body.style.overflow='auto';" class="bg-white/10 hover:bg-white/20 text-white rounded-none p-3 transition-colors border border-white/20">
                        <span class="material-symbols-outlined text-xl">close</span>
                    </button>
                </div>
                
                <!-- Zoom Container -->
                <div class="w-full h-full overflow-auto pt-24 pb-8 px-4">
                    <img src="/mapa3d.png" alt="Plano Ampliado" class="w-[260vw] sm:w-[150vw] md:w-[90vw] max-w-none h-auto object-contain mx-auto block transition-transform rounded-none" />
                </div>
            </div>
            
        </div>
    </section>
  `;
}
