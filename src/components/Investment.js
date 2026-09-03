export function Investment() {
    return `
    <section class="py-24 bg-navy text-white relative overflow-hidden border-t border-white/5" id="investment">
        <!-- Background light overlay -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-sun/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                <!-- Left Column: Investment context (Short & Long term details) -->
                <div class="lg:col-span-6 space-y-8">
                    <div class="space-y-3">
                        <span class="text-xs font-headline font-extrabold text-sun tracking-[0.2em] uppercase">Plusvalía & Retorno</span>
                        <h2 class="text-[clamp(2.25rem,6vw,3.5rem)] font-headline font-extrabold leading-[1.05] uppercase tracking-tighter">
                            ¿Por qué invertir en Sauce<br/>
                            <span class="text-sun font-serif italic normal-case tracking-tight"> - Laguna Azul HOY?</span>
                        </h2>
                    </div>

                    <!-- Short-term block -->
                    <div class="space-y-2 sm:space-y-2.5">
                        <h3 class="text-base sm:text-lg md:text-xl font-headline font-bold text-white uppercase tracking-wide flex items-center gap-2">
                            <span class="material-symbols-outlined text-sun text-lg sm:text-xl">connecting_airports</span>
                            Mediano Plazo: Megainfraestructura & Conectividad
                        </h3>
                        <p class="text-white/70 font-body text-xs sm:text-sm leading-relaxed">
                            <strong>Conectividad Directa y Teleférico.</strong> La pavimentación de la vía de acceso, el puente vehicular sobre el río Huallaga y el proyectado <strong>teleférico turístico de Sauce</strong> están transformando la accesibilidad de la zona. Adquirir tu lote hoy a precio de preventa ($60/m²) asegura una valorización acelerada mientras se ejecutan estas grandes obras. 
                        </p>
                        <p class="text-white/70 font-body text-xs sm:text-sm leading-relaxed">
                            Objetivo turístico: Sauce se prepara para recibir más de 650,000 turistas al año.
                        </p>
                    </div>

                    <!-- Long-term block -->
                    <div class="space-y-2 sm:space-y-2.5">
                        <h3 class="text-base sm:text-lg md:text-xl font-headline font-bold text-white uppercase tracking-wide flex items-center gap-2">
                            <span class="material-symbols-outlined text-sun text-lg sm:text-xl">travel_explore</span>
                            Largo Plazo: Alta Rentabilidad Vacacional
                        </h3>
                        <p class="text-white/70 font-body text-xs sm:text-sm leading-relaxed">
                            <strong>Ingresos Pasivos.</strong> Sauce se consolida como el destino ecoturístico por excelencia de la selva peruana. Diseñar tu cabaña o bungalow en PAQARI para plataformas como Airbnb te permitirá captar el flujo continuo de turistas atraídos por la Laguna Azul y los nuevos atractivos, garantizando rentas periódicas y plusvalía de por vida.
                        </p>
                    </div>

                    <!-- Commercial conditions banner -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-white/5 border border-white/10 text-center sm:text-left">
                        <div class="space-y-0.5">
                            <span class="text-[9px] font-headline font-bold text-sun uppercase tracking-wider block">Inicial Mínima</span>
                            <span class="text-sm font-headline font-extrabold text-white">Desde S/ 8,000</span>
                        </div>
                        <div class="space-y-0.5 border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-3">
                            <span class="text-[9px] font-headline font-bold text-sun uppercase tracking-wider block">Financiamiento</span>
                            <span class="text-sm font-headline font-extrabold text-white">3 Años Sin Intereses</span>
                        </div>
                        <div class="space-y-0.5 border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-3">
                            <span class="text-[9px] font-headline font-bold text-sun uppercase tracking-wider block">Pago al Contado</span>
                            <span class="text-sm font-headline font-extrabold text-white">Bono exclusivos</span>
                        </div>
                    </div>

                    <!-- Contact/CTA Button -->
                    <div class="pt-2">
                        <a href="https://wa.me/51962387203?text=Vengo%20desde%20la%20web%2C%20me%20interesa%20invertir%20en%20PAQARI" target="_blank"
                           class="inline-flex items-center gap-3 px-8 py-4 border border-white/20 bg-white/5 text-white font-headline font-bold text-xs tracking-widest hover:bg-white hover:text-navy hover:border-white transition-all shadow-2xl">
                            <span>COTIZAR PREVENTA</span>
                            <span class="material-symbols-outlined text-sm">navigate_next</span>
                        </a>
                    </div>
                </div>

                <!-- Right Column: Proyección de Valorización (Matching Reference Design) -->
                <div class="lg:col-span-6 space-y-6">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2.5 text-sun">
                            <span class="material-symbols-outlined text-2xl">trending_up</span>
                            <h4 class="font-headline font-extrabold text-base sm:text-lg uppercase tracking-wider text-white">
                                Proyección de <span class="text-sun">Valorización</span>
                            </h4>
                        </div>
                        <p class="text-white/70 text-xs sm:text-sm font-body">
                            Estimación de incremento del valor del metro cuadrado en USD ($60/m² en Preventa):
                        </p>
                    </div>

                    <!-- 3 Gold Bordered Cards Grid (3 Columns, 1 Row, Larger Elements, Compact Height) -->
                    <div class="grid grid-cols-3 gap-2 sm:gap-4">
                        
                        <!-- Box 1: 01. HOY -->
                        <div class="border border-sun/70 bg-[#121820]/50 py-3.5 px-2 sm:py-5 sm:px-4 text-center flex flex-col items-center justify-between hover:border-sun transition-all duration-300 shadow-lg group">
                            <!-- Icon Pin -->
                            <div class="text-sun group-hover:scale-110 transition-transform duration-300 mb-1 sm:mb-2">
                                <svg class="w-8 h-8 sm:w-11 sm:h-11 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>
                            
                            <!-- Label -->
                            <div class="text-[9px] sm:text-[11px] font-headline font-black tracking-wider sm:tracking-widest text-sun uppercase">
                                01. HOY
                            </div>
                            
                            <!-- Price -->
                            <div class="my-1 sm:my-1.5 flex items-baseline justify-center gap-0.5">
                                <span class="text-2xl sm:text-4xl md:text-5xl font-headline font-extrabold text-sun leading-none tracking-tight">$60</span>
                                <span class="text-[10px] sm:text-xs text-white/70 font-semibold font-body">/m²</span>
                            </div>
                            
                            <!-- Description -->
                            <p class="text-[10px] sm:text-xs md:text-sm text-white/95 font-body font-medium leading-snug">
                                Preventa<br/>Lanzamiento
                            </p>
                        </div>

                        <!-- Box 2: 02. OBRA -->
                        <div class="border border-sun/70 bg-[#121820]/50 py-3.5 px-2 sm:py-5 sm:px-4 text-center flex flex-col items-center justify-between hover:border-sun transition-all duration-300 shadow-lg group">
                            <!-- Icon Crane -->
                            <div class="text-sun group-hover:scale-110 transition-transform duration-300 mb-1 sm:mb-2">
                                <svg class="w-8 h-8 sm:w-11 sm:h-11 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 21h16M7 21V5l10-2v2M7 9h10M7 13h10M7 17h10M17 5v8m-2 0h4"/>
                                </svg>
                            </div>
                            
                            <!-- Label + Badge -->
                            <div class="flex items-center justify-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] font-headline font-black tracking-wider sm:tracking-widest text-sun uppercase">
                                <span>02. OBRA</span>
                                <span class="bg-sun text-navy font-black text-[8px] sm:text-[9.5px] px-1 sm:px-1.5 py-0.2 tracking-normal">+50%</span>
                            </div>
                            
                            <!-- Price -->
                            <div class="my-1 sm:my-1.5 flex items-baseline justify-center gap-0.5">
                                <span class="text-2xl sm:text-4xl md:text-5xl font-headline font-extrabold text-sun leading-none tracking-tight">$80</span>
                                <span class="text-[10px] sm:text-xs text-white/70 font-semibold font-body">/m²</span>
                            </div>
                            
                            <!-- Description -->
                            <p class="text-[10px] sm:text-xs md:text-sm text-white/95 font-body font-medium leading-snug">
                                Avance Vías &<br/>Servicios
                            </p>
                        </div>

                        <!-- Box 3: 03. ENTREGA -->
                        <div class="border border-sun/70 bg-[#121820]/50 py-3.5 px-2 sm:py-5 sm:px-4 text-center flex flex-col items-center justify-between hover:border-sun transition-all duration-300 shadow-lg group">
                            <!-- Icon Key & House -->
                            <div class="text-sun group-hover:scale-110 transition-transform duration-300 mb-1 sm:mb-2">
                                <svg class="w-8 h-8 sm:w-11 sm:h-11 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
                                </svg>
                            </div>
                            
                            <!-- Label + Badge -->
                            <div class="flex items-center justify-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] font-headline font-black tracking-wider sm:tracking-widest text-sun uppercase">
                                <span>03. ENTREGA</span>
                                <span class="bg-sun text-navy font-black text-[8px] sm:text-[9.5px] px-1 sm:px-1.5 py-0.2 tracking-normal">+115%</span>
                            </div>
                            
                            <!-- Price -->
                            <div class="my-1 sm:my-1.5 flex items-baseline justify-center gap-0.5">
                                <span class="text-2xl sm:text-4xl md:text-5xl font-headline font-extrabold text-sun leading-none tracking-tight">$120+</span>
                                <span class="text-[10px] sm:text-xs text-white/70 font-semibold font-body">/m²</span>
                            </div>
                            
                            <!-- Description -->
                            <p class="text-[10px] sm:text-xs md:text-sm text-white/95 font-body font-medium leading-snug">
                                Consolidación &<br/>Renta Turística
                            </p>
                        </div>

                    </div>
                </div>

                    </div>
                </div>
                
            </div>
        </div>
    </section>
  `;
}
