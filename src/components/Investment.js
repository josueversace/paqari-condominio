export function Investment() {
  return `
    <section class="py-24 bg-navy text-white relative overflow-hidden border-t border-white/5" id="investment">
        <!-- Background light overlay -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-sun/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                <!-- Left Column: Investment context (Short & Long term details) -->
                <div class="lg:col-span-7 space-y-10">
                    <div class="space-y-4">
                        <span class="text-xs font-headline font-extrabold text-sun tracking-[0.2em] uppercase">Plusvalía & Retorno</span>
                        <h2 class="text-[clamp(2.5rem,8vw,3.75rem)] font-headline font-extrabold leading-[1.0] uppercase tracking-tighter">
                            Invierte en el<br/>
                            <span class="text-sun font-serif italic lowercase tracking-tight">futuro de Sauce.</span>
                        </h2>
                    </div>

                    <!-- Short-term block -->
                    <div class="space-y-3">
                        <h3 class="text-xl font-headline font-bold text-white uppercase tracking-wide flex items-center gap-2">
                            <span class="material-symbols-outlined text-sun text-xl">add_road</span>
                            Corto Plazo: Plusvalía por Infraestructura
                        </h3>
                        <p class="text-white/60 font-body text-sm leading-relaxed">
                            <strong>El "Efecto Puente".</strong> La construcción del puente vehicular sobre el río Huallaga y el asfaltado de la vía principal a Sauce (inversión pública de 218 millones de soles) elevarán exponencialmente el valor de la tierra. Comprar hoy a $60/m² asegura ganancias inmediatas a medida que avanzan las obras.
                        </p>
                    </div>

                    <!-- Long-term block -->
                    <div class="space-y-3">
                        <h3 class="text-xl font-headline font-bold text-white uppercase tracking-wide flex items-center gap-2">
                            <span class="material-symbols-outlined text-sun text-xl">travel_explore</span>
                            Largo Plazo: El Boom Turístico de Sauce
                        </h3>
                        <p class="text-white/60 font-body text-sm leading-relaxed">
                            <strong>Ocupación por Alquiler.</strong> Sauce es el principal destino turístico de San Martín. La alta demanda vacacional asegura un flujo continuo de turistas. Habilitar tu bungalow o cabaña en PAQARI para plataformas como Airbnb garantiza retornos estables y ocupación constante de por vida.
                        </p>
                    </div>

                    <!-- Contact/CTA Button -->
                    <div class="pt-4">
                        <a href="https://wa.me/51962387203?text=Vengo%20desde%20la%20web%2C%20me%20interesa%20invertir%20en%20PAQARI" target="_blank"
                           class="inline-flex items-center gap-3 px-8 py-5 border border-white/20 bg-white/5 text-white font-headline font-bold text-xs tracking-widest hover:bg-white hover:text-navy hover:border-white transition-all shadow-2xl">
                            <span>COTIZAR PREVENTA</span>
                            <span class="material-symbols-outlined text-sm">navigate_next</span>
                        </a>
                    </div>
                </div>

                <!-- Right Column: Interactive Projection Bar Chart -->
                <div class="lg:col-span-5 bg-white/5 border border-white/10 p-8 flex flex-col justify-between min-h-[400px]">
                    <div class="space-y-2">
                        <div class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-sun text-2xl">trending_up</span>
                            <div>
                                <h4 class="font-headline font-bold text-base text-white uppercase tracking-wider">Proyección de Valorización</h4>
                                <p class="text-white/50 text-[10px] uppercase font-body tracking-widest">Valor estimado por m² en dólares</p>
                            </div>
                        </div>
                    </div>

                    <!-- BAR CHART -->
                    <div class="flex items-end gap-4 h-56 pt-12 pb-2">
                        <!-- Bar 1 -->
                        <div class="investment-bar group/bar relative flex-1 bg-white/10 h-[35%] hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-end p-3 items-center cursor-pointer border border-transparent hover:border-white/20 shadow-lg">
                            <div class="absolute -top-12 opacity-0 group-hover/bar:opacity-100 transition-all duration-300 translate-y-2 group-hover/bar:translate-y-0 bg-white text-navy text-[10px] px-3 py-1.5 font-bold whitespace-nowrap pointer-events-none z-20">
                                Precio base preventa
                                <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                            </div>
                            <span class="text-lg font-headline font-bold transition-transform duration-300 group-hover/bar:scale-110 text-white">$60</span>
                            <span class="text-[8px] font-headline font-extrabold tracking-wider text-white/50 mt-1">HOY</span>
                        </div>
                        
                        <!-- Bar 2 -->
                        <div class="investment-bar group/bar relative flex-1 bg-white/25 h-[65%] hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-end p-3 items-center cursor-pointer border border-transparent hover:border-white/30 shadow-lg">
                            <div class="absolute -top-12 opacity-0 group-hover/bar:opacity-100 transition-all duration-300 translate-y-2 group-hover/bar:translate-y-0 bg-white text-navy text-[10px] px-3 py-1.5 font-bold whitespace-nowrap pointer-events-none z-20">
                                Conexión del Puente + Vía
                                <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                            </div>
                            <span class="text-lg font-headline font-bold transition-transform duration-300 group-hover/bar:scale-110 text-white">$90</span>
                            <span class="text-[8px] font-headline font-extrabold tracking-wider text-white/50 mt-1">OBRA</span>
                        </div>
                        
                        <!-- Bar 3 -->
                        <div class="investment-bar group/bar relative flex-1 bg-sun h-[100%] hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-end p-3 items-center text-navy cursor-pointer shadow-lg hover:bg-[#cda557]">
                            <div class="absolute -top-12 opacity-0 group-hover/bar:opacity-100 transition-all duration-300 translate-y-2 group-hover/bar:translate-y-0 bg-white text-navy text-[10px] px-3 py-1.5 font-bold whitespace-nowrap pointer-events-none z-20">
                                Entrega de Condominio
                                <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                            </div>
                            <span class="text-xl font-headline font-extrabold transition-transform duration-300 group-hover/bar:scale-110 text-navy">$120+</span>
                            <span class="text-[8px] font-headline font-extrabold tracking-wider opacity-80 mt-1">FINAL</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  `;
}
