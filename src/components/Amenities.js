export function Amenities() {
  const pillars = [
    {
      title: 'Mirador Social',
      category: 'DECK & LOUNGE',
      image: '/mirador.png',
      desc: 'Zona elevada con vistas de 360° para atardeceres memorables.'
    },
    {
      title: 'Club House Privado',
      category: 'PISCINA & BAR',
      image: '/club_house.png',
      desc: 'El centro social del condominio con terraza lounge y piscina.'
    },
    {
      title: 'Estilo A-Frame',
      category: 'DISEÑO & ARQUITECTURA',
      image: '/portico_principal.png',
      desc: 'Cabinas y viviendas sostenibles integradas con el entorno.'
    },
    {
      title: 'Muelle Deportivo',
      category: 'LAGUNA AZUL',
      image: '/sailing_lake.png',
      desc: 'Acceso directo para kayak, paddle surf y recreación acuática.'
    }
  ];

  const cardsHtml = pillars.map(card => `
    <div class="group relative overflow-hidden bg-navy border border-navy/10 cursor-pointer flex flex-col justify-end aspect-[1/1] sm:aspect-[4/5] shadow-sm">
        <!-- Background Image Zoom -->
        <div class="absolute inset-0 z-0">
            <img src="${card.image}" alt="${card.title}" class="w-full h-full object-cover img-zoom-hover opacity-85 transition-all duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#121820] via-[#121820]/40 to-transparent opacity-90 transition-opacity group-hover:opacity-75"></div>
        </div>
        
        <!-- Content overlaid at bottom -->
        <div class="relative z-10 p-3 sm:p-6 space-y-1 sm:space-y-3 transition-transform duration-500 group-hover:-translate-y-1">
            <span class="text-[7.5px] sm:text-[9px] font-headline font-extrabold tracking-wider sm:tracking-widest text-sun uppercase block">${card.category}</span>
            <h3 class="text-xs sm:text-xl font-headline font-bold text-white uppercase leading-tight">${card.title}</h3>
            <p class="text-white/80 text-xs font-body leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-16 transition-all duration-500 overflow-hidden hidden sm:block">${card.desc}</p>
            
            <div class="flex items-center gap-1.5 text-white text-[9px] sm:text-xs font-headline font-bold tracking-wider sm:tracking-widest pt-1 sm:pt-2">
                <span>CONOCER MÁS</span>
                <span class="material-symbols-outlined text-[12px] sm:text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
        </div>
    </div>
  `).join('');

  return `
    <section class="py-12 md:py-24 bg-[#F5F3EF] text-navy relative border-t border-navy/5" id="amenities">
        <div class="container mx-auto px-4 sm:px-6">
            <!-- Header Intro Row -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6 mb-6 md:mb-14">
                <div class="space-y-2 md:space-y-4">
                    <h2 class="text-[clamp(1.75rem,5vw,3rem)] font-headline font-extrabold leading-tight text-navy">
                        Inspirado en el Sauce.<br/>
                        <span class="text-sun font-serif italic lowercase tracking-tight">compartido por todos.</span>
                    </h2>
                </div>
                
                <!-- Explore Vision btn -->
                <a href="#masterplan" class="inline-flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-4 border border-navy/15 bg-navy/5 text-navy font-headline font-bold text-[10px] sm:text-xs tracking-wider sm:tracking-widest hover:bg-navy hover:text-white hover:border-navy transition-all">
                    <span>EXPLORAR MÁS</span>
                    <div class="scroll-text-slide text-sun border-l border-navy/20 pl-2 sm:pl-3">
                        <div class="scroll-text text-left">EXPERIENCIAS</div>
                        <div class="scroll-text text-left">AMENITIES</div>
                    </div>
                    <span class="material-symbols-outlined text-xs sm:text-sm">arrow_outward</span>
                </a>
            </div>
            
            <!-- Cards Grid (2x2 on mobile, 4 cols on desktop) -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                ${cardsHtml}
            </div>
        </div>
    </section>
  `;
}
