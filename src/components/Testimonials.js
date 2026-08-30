export function Testimonials() {
    return `
    <section class="py-24 bg-surface">
        <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
            <div class="space-y-8 overflow-hidden">
                <h2 class="text-[clamp(2.5rem,8vw,3.75rem)] font-headline font-extrabold text-navy leading-[1.1]">Opinan nuestros <br /><span class="text-sun">clientes</span></h2>
                
                <div class="relative w-full pb-4">
                    <div id="testimonial-slider" class="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory w-full scroll-smooth pb-4 select-none cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        
                        <!-- Slide 1 -->
                        <div class="w-[85%] md:w-full flex-shrink-0 snap-center bg-white p-6 md:p-10 rounded-none border border-navy/10 shadow-md border-l-8 border-sun">
                            <p class="text-[15px] italic font-body text-on-surface mb-6 leading-relaxed pointer-events-none">"Trabajando en minería busco desconexión absoluta. PAQARI nos ofreció una excelente preventa desde $60/m² en un lugar espectacular. Ya planeamos nuestra cabaña con vistas directas a la laguna."</p>
                            <div class="flex items-center gap-4">
                                <img src="/ingeniera.png" alt="Karin U." class="w-12 h-12 object-cover rounded-none border-2 border-sun shadow-sm pointer-events-none" />
                                <div>
                                    <p class="font-headline font-bold text-navy pointer-events-none">Karin U.</p>
                                    <p class="text-[11px] text-on-surface-variant font-semibold uppercase tracking-wide pointer-events-none">Ingeniera Civil</p>
                                </div>
                            </div>
                        </div>
                        

                        <!-- Slide 2 -->
                        <div class="w-[85%] md:w-full flex-shrink-0 snap-center bg-white p-6 md:p-10 rounded-none border border-navy/10 shadow-md border-l-8 border-sun">
                            <p class="text-[15px] italic font-body text-on-surface mb-6 leading-relaxed pointer-events-none">"Me generaba dudas la informalidad de los terrenos en la selva, pero PAQARI me dio total tranquilidad con garantías de saneamiento físico-legal. Es el refugio idóneo para conectar con la naturaleza."</p>
                            <div class="flex items-center gap-4">
                                <img src="/extranjera.png" alt="Ivanna L." class="w-12 h-12 object-cover rounded-none border-2 border-sun shadow-sm pointer-events-none" />
                                <div>
                                    <p class="font-headline font-bold text-navy pointer-events-none">Ivanna L.</p>
                                    <p class="text-[11px] text-on-surface-variant font-semibold uppercase tracking-wide pointer-events-none">Psicóloga</p>
                                </div>
                            </div>
                        </div>

                        <!-- Slide 3 -->
                        <div class="w-[85%] md:w-full flex-shrink-0 snap-center bg-white p-6 md:p-10 rounded-none border border-navy/10 shadow-md border-l-8 border-sun">
                            <p class="text-[15px] italic font-body text-on-surface mb-6 leading-relaxed pointer-events-none">"Comprar 300 m² por $18,000 USD frente a la Laguna Azul es una jugada muy inteligente. Construiré bungalows para Airbnb; con la cantidad de turistas anuales, la inversión se rentará sola."</p>
                            <div class="flex items-center gap-4">
                                <img src="/empresario.png" alt="Luis F." class="w-12 h-12 object-cover rounded-none border-2 border-sun shadow-sm pointer-events-none" />
                                <div>
                                    <p class="font-headline font-bold text-navy pointer-events-none">Luis F.</p>
                                    <p class="text-[11px] text-on-surface-variant font-semibold uppercase tracking-wide pointer-events-none">Empresario / Desarrollador</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex gap-4">
                    <button id="btn-prev-test" class="w-12 h-12 min-w-[48px] flex items-center justify-center rounded-none border border-navy/20 text-navy hover:bg-navy hover:text-white transition-all focus:outline-none">
                        <span class="material-symbols-outlined text-[20px]">arrow_back</span>
                    </button>
                    <button id="btn-next-test" class="w-12 h-12 min-w-[48px] flex items-center justify-center rounded-none border border-navy/20 text-navy hover:bg-navy hover:text-white transition-all focus:outline-none">
                        <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>
                </div>
            </div>
            <div
                class="bg-navy border border-white/10 p-12 text-white flex flex-col justify-between relative overflow-hidden rounded-none">
                <img alt="Hiking path" class="absolute top-0 right-0 w-64 h-64 opacity-10 adventure-mask object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjmqXbBNKS3Q51jz9YwocVbtsh3lTA4EfAOvvuXP4abftCy3fHmEVzUXVpN3xoJ7pTkeOZmIKg7S7SYR9QybFWjXe8LEgKlJ9HWHiYHvSdjMk6SwzQPwKHelGgmOtz8c2Nq4wayOvM8946gkEDoouF1wC9FVS5y9e0o2Dn2lWdgd4-q82pEr8EVVh3IXzrYlEytbnZWyzYRERRiin-D9IrIE0TChJhm6dbW7bGY8tDE7p0qYUDUOV-SBgSk-qD-_kxVLI-bEohfZ8P" />
                <div class="relative z-10 space-y-6">
                    <h3 class="text-3xl font-headline font-extrabold">Visión Paqari</h3>
                    <p class="text-white/70 font-body leading-relaxed">Con más de 3 proyectos exitosos en la selva, nuestro compromiso es la transparencia legal y el equilibrio ambiental. No solo vendemos tierra, creamos destinos de alta gama.</p>
                    <div class="flex gap-10 pt-6">
                        <div>
                            <p class="text-4xl font-headline font-extrabold text-sun">150+</p>
                            <p class="text-[10px] uppercase font-bold text-white/50">Lotes Entregados</p>
                        </div>
                        <div>
                            <p class="text-4xl font-headline font-extrabold text-sun">6+</p>
                            <p class="text-[10px] uppercase font-bold text-white/50">Años de Trayectoria</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;
}
