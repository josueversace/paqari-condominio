export function Benefits() {
  const highlights = [
    {
      icon: 'location_on',
      title: 'A 3 Minutos de Sauce',
      desc: 'Acceso inmediato a la oferta gastronómica y recreativa del pueblo.'
    },
    {
      icon: 'visibility',
      title: 'Vista 100% Laguna',
      desc: 'Terrenos elevados en pendiente que garantizan la vista al lago.'
    },
    {
      icon: 'flight',
      title: '45 min de Tarapoto',
      desc: 'Conexión rápida con el Aeropuerto y el centro comercial de la región.'
    },
    {
      icon: 'nature_people',
      title: 'Senderos Ecológicos',
      desc: 'Zonas de hamacas, meditación y senderos inmersos en la selva.'
    },
    {
      icon: 'electric_bolt',
      title: 'Servicios Completos',
      desc: 'Vías internas afirmadas, redes de agua, luz y alcantarillado.'
    },
    {
      icon: 'shield',
      title: 'Seguridad 24/7',
      desc: 'Pórtico de entrada controlado y cercos vivos para máxima privacidad.'
    }
  ];

  const gridHtml = highlights.map(item => `
    <div class="flex gap-4 items-start items-location-highlight">
        <div class="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-white/15 bg-white/5 text-sun">
            <span class="material-symbols-outlined text-2xl">${item.icon}</span>
        </div>
        <div class="space-y-1">
            <h4 class="font-headline font-bold text-sm text-white uppercase tracking-wider">${item.title}</h4>
            <p class="text-white/70 text-xs font-body leading-relaxed">${item.desc}</p>
        </div>
    </div>
  `).join('');

  return `
    <section class="py-24 bg-[#172A21] text-white relative border-t border-white/5" id="location">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Left Side: Landscape Image & Caption -->
                <div class="lg:col-span-5 space-y-6">
                    <div class="relative overflow-hidden border border-white/10 aspect-[6/5]">
                        <img src="/portico_principal.png" alt="PAQARI Entrada" class="w-full h-full object-cover img-zoom-hover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-[#121820]/60 to-transparent"></div>
                    </div>
                    <p class="text-white/70 font-body text-xs sm:text-sm italic leading-relaxed">
                        "Una ubicación privilegiada que combina la calma frente al agua con la conectividad hacia los centros urbanos principales de San Martín."
                    </p>
                </div>
                
                <!-- Right Side: Location highlights grid -->
                <div class="lg:col-span-7 space-y-12">
                    <div class="space-y-4">
                        <h2 class="text-[clamp(2.5rem,8vw,3.75rem)] font-headline font-extrabold leading-[1.0] uppercase tracking-tighter text-white">
                            Ubicado<br/>
                            <span class="text-sun font-serif italic lowercase tracking-tight">— perfectamente</span>
                        </h2>
                        <p class="text-white/80 font-body text-sm max-w-xl leading-relaxed">
                            PAQARI se sitúa en un mirador natural único frente a la Laguna Azul de Sauce. El equilibrio exacto entre el retiro absoluto en la naturaleza y la accesibilidad regional.
                        </p>
                    </div>
                    
                    <!-- 6-item Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                        ${gridHtml}
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  `;
}
