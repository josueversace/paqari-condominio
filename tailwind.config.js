/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "navy": "#0b0f13",
                "forest": "#161b21",
                "moss": "#cda557",
                "sun": "#bda265",
                "primary-green": "#8a7355",
                "surface": "#FAF9F6",
                "on-surface": "#0b0f13",
            },
            fontFamily: {
                "headline": ["Playfair Display", "serif"],
                "body": ["Inter", "sans-serif"],
            },
            borderRadius: {
                "journal": "0.5rem",
                "blob": "2rem",
                "xl": "1rem",
                "2xl": "1.5rem",
                "3xl": "2.5rem",
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries')
    ],
}
