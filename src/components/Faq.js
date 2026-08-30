export function Faq() {
  const faqs = [
    {
      q: '¿Qué metrajes tienen los lotes y cuál es el precio inicial?',
      a: 'Los lotes campestres van desde los <strong>300 m² hasta 500 m²</strong>. En nuestra <strong>Fase 1 (Preventa Fundador)</strong>, los precios de lanzamiento inician desde <strong>$18,000 USD</strong> con opciones de financiamiento directo.'
    },
    {
      q: '¿Cómo se garantiza la vista panorámica a la Laguna Azul?',
      a: 'El terreno posee una topografía naturalmente escalonada en pendiente. Gracias al diseño urbanístico del Masterplan, <strong>el 100% de los lotes cuenta con vista abierta y garantizada</strong> a la laguna sin riesgo de que otra construcción la tape.'
    },
    {
      q: '¿Cuál es la ubicación exacta y cómo se llega?',
      a: 'PAQARI se encuentra ubicado a solo <strong>3 minutos del pueblo de Sauce</strong> y a <strong>45 minutos de la ciudad de Tarapoto</strong> (Aeropuerto Cadete FAP Guillermo del Castillo Paredes), combinando total privacidad con rápida accesibilidad.'
    },
    {
      q: '¿Los lotes cuentan con títulos de propiedad independizados?',
      a: '<strong>Sí, total seguridad jurídica.</strong> Cada lote se entrega independizado con su partida electrónica en <strong>Sunarp</strong>, listo para la firma de escritura pública en notaría.'
    },
    {
      q: '¿Qué amenidades y servicios incluye el condominio?',
      a: 'Contará con pórtico de ingreso controlado 24/7, vías afirmadas, redes de agua y luz, <strong>Club House privado con piscina, mirador social 360°, muelle náutico</strong> para kayak/paddle y senderos ecológicos inmersos en la selva.'
    },
    {
      q: '¿Es viable construir cabañas para alquiler vacacional (Airbnb)?',
      a: '<strong>Totalmente rentable.</strong> Sauce es el principal polo turístico de San Martín con alta demanda de hospedaje durante todo el año. Tu propiedad en PAQARI está proyectada para generar ingresos pasivos recurrentes en dólares.'
    }
  ];

  const accordionHtml = faqs.map(faq => `
    <details class="group bg-white/5 border border-white/10 p-4 sm:p-5 md:p-6 cursor-pointer rounded-none transition-all duration-300 hover:bg-white/10">
        <summary class="flex justify-between items-center font-headline font-bold text-white text-xs sm:text-sm md:text-base list-none select-none gap-4">
            <span>${faq.q}</span>
            <span class="material-symbols-outlined group-open:rotate-180 transition-transform text-sun text-lg sm:text-xl flex-shrink-0">add</span>
        </summary>
        <p class="mt-3 sm:mt-4 text-xs sm:text-sm text-white/70 font-body leading-relaxed border-t border-white/5 pt-3 sm:pt-4">
            ${faq.a}
        </p>
    </details>
  `).join('');

  return `
    <section class="py-12 md:py-24 bg-navy text-white relative overflow-hidden border-t border-white/5" id="faq">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
                
                <!-- Left Side: Header -->
                <div class="lg:col-span-5 space-y-3 sm:space-y-4">
                    <span class="text-[10px] sm:text-xs font-headline font-extrabold text-sun tracking-[0.2em] uppercase">Preguntas Frecuentes</span>
                    <h2 class="text-[clamp(2rem,6vw,3.5rem)] font-headline font-extrabold leading-[1.05] uppercase tracking-tighter">
                        Respuestas Claras.<br/>
                        <span class="text-sun font-serif italic lowercase tracking-tight">para tu inversión.</span>
                    </h2>
                    <p class="text-white/60 font-body text-xs sm:text-sm leading-relaxed max-w-sm">
                        Todo lo que necesitas saber antes de invertir en tu lote campestre en Sauce. ¿Tienes alguna consulta puntual? Escríbenos directamente.
                    </p>
                </div>
                
                <!-- Right Side: Vertical stack of details -->
                <div class="lg:col-span-7 space-y-3 sm:space-y-4">
                    ${accordionHtml}
                </div>
                
            </div>
        </div>
    </section>
  `;
}
