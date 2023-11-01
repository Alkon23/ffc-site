/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "concrete": "url('/src/assets/black-background.png')"
            },
            fontFamily: {
                'bungee': ['Bungee'],
            }
        },
    },
    plugins: [
    ],
}