export function Faq() {
  const faqs = [
    {
      q: '¿Cómo invertir si vivo en Lima u otra ciudad?',
      a: 'La mayoría de nuestros inversionistas viven en Lima, Trujillo, Arequipa y otras ciudades como tú. Primero, recibe una asesoría por nuestro staff de asesores, despues agenda una presentación virtual para determinar si el proyecto es para ti, luego puedes visitar el terreno por tus propios medios o gratuitamente dando solo la inicial, para terminar legalizamos los documentos en la notaría de Tarapoto o Lima.'
    },
    {
      q: '¿Cómo funciona la legalidad y qué documentos se entregan al comprador?',
      a: '<strong>Total seguridad y transparencia jurídica.</strong> Los lotes se entregara con partidas <strong>independizadas e inscritas en SUNARP</strong>. Se entrega <strong>contrato de compraventa de bien futuro</strong> y <strong>escritura pública</strong> notarial si es al contado.'
    },
    {
      q: '¿Es viable construir cabañas para alquiler turístico y Airbnb?',
      a: '<strong>Altamente rentable.</strong> Sauce es el principal polo turístico de San Martín (Tarapoto), con constante demanda hotelera durante todo el año. Tu propiedad en PAQARI está proyectada para generar plusvalía continua e ingresos pasivos en alquiler vacacional.'
    },
    {
      q: '¿Cómo funcionan los servicios en una casa de campo ecológica (luz y desagüe)?',
      a: 'Al ser un <strong>proyecto ecoresidencial autosostenible</strong> de descanso y desconexión, no se emplean tendidos urbanos ruidosos. PAQARI contará con <strong>servicio de agua, vías internas afirmadas, pórtico de acceso y áreas comunes</strong>, integrándose con sistemas limpios de <strong>paneles solares</strong> y <strong>biodigestores ecológicos</strong> para preservar el entorno.'
    },
    {
      q: '¿Cómo se garantiza el 100% de vista panorámica a la Laguna Azul?',
      a: 'Todo el proyecto cuenta con una vista panorámica gracias a su ubicación geográfica y el diseño de los planos garantiza estas visuales desde tu casa de campo.'
    },
    {
      q: '¿Qué metrajes tienen los lotes y cuáles son las facilidades de pago?',
      a: 'Los lotes van desde los <strong>235 m² hasta 493 m²</strong> a precio de preventa de <strong>$60 USD/m²</strong> (lotes desde <strong>S/ 50,913</strong>). Puedes ingresar con una <strong>inicial mínima desde S/ 8,000</strong> y acceder a <strong>financiamiento directo a 3 años (36 meses) LIBRE DE INTERESES</strong>. Para compras al contado, tenemos ofertas exclusivas para ti</strong>.'
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
