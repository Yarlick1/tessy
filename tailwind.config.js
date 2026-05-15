/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: '#FBF5EA',
                gold: '#C5A059',
                'gold-light': '#E6C987',
                blush: '#F8DDE3',
                rose: '#D58EA1',
                mauve: '#6F5A61',
                ink: '#33272B',
                'pink-pastel': '#FDF4F5',
                'pink-dark': '#E8C5CC',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                script: ['Great Vibes', 'cursive'],
            }
        },
    },
    plugins: [],
}
