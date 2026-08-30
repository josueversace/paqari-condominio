export function Faq() {
  const faqs = [
    {
      q: '¿Ofrecen financiamiento directo?',
      a: 'Sí, contamos con planes flexibles de financiamiento directo sin intereses para facilitar tu inversión. Consulta con un asesor para conocer los plazos y cuotas iniciales disponibles.'
    },
    {
      q: '¿Qué tan cerca está de la laguna?',
      a: 'PAQARI está ubicado en una zona elevada a solo 3 minutos de Sauce. Esta altura estratégica asegura vistas panorámicas ininterrumpidas a la Laguna Azul y total protección de tu privacidad.'
    },
    {
      q: '¿Es rentable construir para alquilar?',
      a: '<strong>Absolutamente.</strong> Sauce es el principal polo turístico de la región San Martín, con altos índices de ocupación en bungalows vacacionales. Tu lote en PAQARI es ideal para construir cabañas para rentar en Airbnb, generando ingresos constantes en dólares.'
    },
    {
      q: '¿Los lotes cuentan con títulos independizados?',
      a: 'Sí, todos los lotes de PAQARI se entregan independizados, listos para firmar escritura pública e inscritos en Registros Públicos (Sunarp) con su respectiva partida electrónica individual.'
    },
    {
      q: '¿Qué actividades se pueden realizar?',
      a: 'A través de nuestro muelle deportivo tendrás acceso directo a la Laguna Azul para kayak, paddle surf y natación. Dentro del condominio dispondrás de senderos ecológicos, zonas de yoga, hamacas y un Club House exclusivo.'
    }
  ];

  const accordionHtml = faqs.map(faq => `
    <details class="group bg-white/5 border border-white/10 p-5 md:p-6 cursor-pointer rounded-none transition-all duration-300 hover:bg-white/10">
        <summary class="flex justify-between items-center font-headline font-bold text-white text-sm sm:text-base list-none select-none">
            ${faq.q}
            <span class="material-symbols-outlined group-open:rotate-180 transition-transform text-sun">add</span>
        </summary>
        <p class="mt-4 text-xs sm:text-sm text-white/70 font-body leading-relaxed border-t border-white/5 pt-4">
            ${faq.a}
        </p>
    </details>
  `).join('');

  return `
    <section class="py-24 bg-navy text-white relative overflow-hidden border-t border-white/5" id="faq">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                <!-- Left Side: Header -->
                <div class="lg:col-span-5 space-y-4">
                    <span class="text-xs font-headline font-extrabold text-sun tracking-[0.2em] uppercase">Preguntas Frecuentes</span>
                    <h2 class="text-[clamp(2.5rem,8vw,3.75rem)] font-headline font-extrabold leading-[1.0] uppercase tracking-tighter">
                        Bitácora de<br/>
                        <span class="text-sun font-serif italic lowercase tracking-tight">preguntas.</span>
                    </h2>
                    <p class="text-white/60 font-body text-sm leading-relaxed max-w-sm">
                        Todo lo que necesitas saber antes de invertir en tu mirador privado en la selva. ¿Tienes alguna otra duda? Contáctanos de inmediato.
                    </p>
                </div>
                
                <!-- Right Side: Vertical stack of details -->
                <div class="lg:col-span-7 space-y-4">
                    ${accordionHtml}
                </div>
                
            </div>
        </div>
    </section>
  `;
}
