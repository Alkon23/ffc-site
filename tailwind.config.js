const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": colors.amber,
                "primary-default": colors.amber["600"],
                "secondary": "#6DDB51",
            },
            backgroundImage: {
                "concrete": "url('/src/assets/black-background.png')",
                "brush": "url('/src/assets/footer-separator.png')"
            },
            fontFamily: {
                'bungee': ['Bungee'],
                'anton': ['Anton'],
                'montserrat': ['Montserrat'],
                'archivo-black': ['Archivo Black'],
                // 'shadows-into-light': ['Shadows Into Light'],
                'neon-energy-x': ['Neon Energy X'],
            },
            scale: {
                "33": ".33"
            },
            fontSize: {
              "2xs": ".65rem"
            },
            keyframes: {
                "bounce-left": {
                    '0%': {transform: 'translateX(-20%)', opacity: 0},
                    '50%': {transform: 'translateX(5%)'},
                    '100%': {transform: 'translateX(0)', opacity: 1}
                },
            },
            animation: {
                'bounce-left': 'bounce-left .3s ease-in-out forwards',
                'pulse-slow': 'pulse 4s linear infinite'
            }
        },
    },
    plugins: [
    ],
}