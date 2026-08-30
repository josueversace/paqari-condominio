# Registro de Ajustes - Réplica a PAQARI

Este documento registra todos los cambios aplicados en la réplica del sitio web para transformarlo de "Ikigai" a **PAQARI**, incluyendo la nueva paleta de colores basada en el logo adjunto.

## 1. Paleta de Colores y Estilos (Basada en el Logo)

El logotipo cuenta con un fondo oscuro elegante (charcoal/azul grisáceo muy oscuro) y trazos/letras en color dorado premium. Se adaptó la paleta cromática del proyecto en `tailwind.config.js` y `src/style.css` de la siguiente manera:

| Color Original (Ikigai) | Nueva Definición (PAQARI) | Código Hexadecimal | Propósito |
| :--- | :--- | :--- | :--- |
| `navy` (Azul Oscuro) | **Charcoal Azulado** | `#121820` | Fondos oscuros (Navbar, Footer, Beneficios), igual al fondo del logo. |
| `sun` (Naranja) | **Dorado Premium** | `#bda265` | Elementos destacados, botones activos, iconos principales, botones de llamada a la acción. |
| `surface` (Verde Off-White) | **Crema Arena** | `#f5f4f0` | Fondos claros de la página (contrasta elegantemente con el dorado/charcoal). |
| `on-surface` (Texto Oscuro Verde) | **Charcoal Azulado** | `#121820` | Color del texto sobre fondos claros. |
| `forest` (Verde Bosque) | **Bosque Muted** | `#1e382b` | Fondos y detalles secundarios que antes eran verde brillante. |
| `primary-green` (Verde Primario) | **Verde Oscuro Premium** | `#2d5440` | Acentos verdes. |
| `moss` (Verde Claro) | **Masa Muted** | `#88a295` | Detalles finos de color. |

### Gradientes del Héroe
En `src/style.css`, se actualizaron los colores del gradiente para usar los valores de la nueva paleta `navy` (`#121820` -> RGB `18, 24, 32`):
- `rgba(18,24,32,0.4)`
- `rgba(18,24,32,0.8)`

---

## 2. Cambios de Texto y SEO

Se reemplazaron todas las menciones a "Ikigai" por "PAQARI" en el sitio para mantener consistencia de marca:

### Metadatos y SEO (`index.html`)
- **Título:** `PAQARI Condominio Campestre \| Tu Mirador en la Laguna Azul`
- **Dominios:** `https://soyikigai.com/` se actualizó a `https://soypaqari.com/`.
- **JSON-LD (Datos Estructurados):**
  - Nombre: `PAQARI Condominio Campestre`
  - URL / ID: `https://soypaqari.com`
  - Logo: `https://soypaqari.com/logo-lineas-blancas.png` (se sobreescribió la imagen con el nuevo logo).
  - Correo electrónico: `hola@soypaqari.com`
  - Redes Sociales: `https://www.facebook.com/paqaricondominiocampestre/` y `https://www.instagram.com/paqaricondominiocampestre/`

### Configuración del Servidor y Despliegue (`vercel.json`)
- Las redirecciones y rewrite de la calculadora se configuraron para apuntar a: `https://calculator-soypaqari.vercel.app`.

### Archivos del Sistema (`public/`)
- `robots.txt`: Sitemap apunta a `https://soypaqari.com/sitemap.xml`.
- `sitemap.xml`: Ubicación principal `<loc>` actualizada a `https://soypaqari.com/`.
- `manifest.json`: Nombre a `PAQARI Condominio Campestre` y short_name a `PAQARI`.

### Lógica JavaScript (`src/main.js`)
- Propiedades del lead en el envío de formulario actualizadas a `proyecto: 'Paqari Sauce'` (para atribución del lead en el webhook de n8n).

### Textos de los Componentes
Se ajustaron los textos en:
- `Navbar.js` (textos alternativos del logo).
- `Benefits.js` ("La Vida en Paqari").
- `Footer.js` (redes, correo, copyright y logos).
- `Amenities.js` ("A solo 5-10 minutos de PAQARI").
- `Testimonials.js` (menciones de "PAQARI" en testimonios y sección "Visión Paqari").
- `Assurance.js` ("Garantía Paqari").
- `Faq.js` (menciones de "PAQARI" en preguntas frecuentes).
- `Investment.js` ("Tu lote en PAQARI...").
