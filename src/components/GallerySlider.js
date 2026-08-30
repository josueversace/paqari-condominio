export function GallerySlider() {
  const images = [
    { src: '/club_house.png', title: 'Club House Privado', desc: 'Espacio social con piscina y acceso directo a la laguna.' },
    { src: '/mirador.png', title: 'Mirador de la Laguna', desc: 'Deck exclusivo con las mejores vistas panorámicas de Sauce.' },
    { src: '/meditation_deck.png', title: 'Zona de Meditación', desc: 'Plataformas de madera inmersas en el bosque para relajación.' },
    { src: '/parque_ecologico.png', title: 'Parque Ecológico', desc: 'Senderos preservados y flora nativa para caminatas al aire libre.' },
    { src: '/cerco_vivo.png', title: 'Cercos Vivos', desc: 'Límites naturales de vegetación que garantizan privacidad y armonía.' }
  ];

  const slidesHtml = images.map((img, i) => `
    <div class="gallery-slide flex-shrink-0 w-[85vw] sm:w-[50vw] lg:w-[35vw] px-2" data-index="${i}">
        <div class="relative group overflow-hidden border border-white/5 bg-navy/20 cursor-pointer">
            <!-- Aspect Ratio 16:10 image wrapper -->
            <div class="aspect-[16/10] overflow-hidden relative">
                <img src="${img.src}" alt="${img.title}" class="w-full h-full object-cover img-zoom-hover" />
                <div class="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80"></div>
            </div>
            <!-- Slide details -->
            <div class="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                <h4 class="font-headline font-bold text-lg text-white">${img.title}</h4>
                <p class="text-white/60 text-xs font-body leading-relaxed max-w-sm">${img.desc}</p>
            </div>
        </div>
    </div>
  `).join('');

  return `
    <section id="gallery-slider-section" class="py-24 bg-navy text-white relative overflow-hidden border-t border-white/5">
        <div class="container mx-auto px-6 mb-12">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div class="space-y-4">
                    <h2 class="text-[clamp(2rem,6vw,3rem)] font-headline font-extrabold leading-tight">
                        Un destino para <span class="text-sun">vivir</span>, <span class="text-sun">relajarse</span> y <span class="text-sun">reconectar</span>.
                    </h2>
                    <p class="text-white/60 font-body text-sm sm:text-base max-w-2xl leading-relaxed">
                        PAQARI entra en su fase de lanzamiento fundador, convirtiéndose en el condominio de referencia en Sauce. Ofrecemos áreas comunes integradas con el agua y el bosque para crear un refugio natural incomparable.
                    </p>
                </div>
                <!-- Navigation buttons (only visible on mobile/tablet where native scroll is active) -->
                <div class="flex gap-4 self-end md:self-auto lg:hidden">
                    <button id="btn-gallery-prev" class="w-12 h-12 flex items-center justify-center border border-white/20 hover:border-sun hover:text-sun transition-colors rounded-none focus:outline-none">
                        <span class="material-symbols-outlined text-lg">arrow_back</span>
                    </button>
                    <button id="btn-gallery-next" class="w-12 h-12 flex items-center justify-center border border-white/20 hover:border-sun hover:text-sun transition-colors rounded-none focus:outline-none">
                        <span class="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Horizontal scroll wrapper (handled by GSAP pinning on desktop, native on mobile) -->
        <div id="gallery-carousel-wrapper" class="w-full lg:overflow-visible overflow-x-auto no-scrollbar scroll-smooth flex px-6 pb-4">
            <div class="gallery-track flex flex-nowrap py-4 gap-6">
                ${slidesHtml}
            </div>
        </div>
    </section>
  `;
}

