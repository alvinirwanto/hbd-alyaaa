/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'warna-ungu': '#527FA7'
            },
            keyframes: {
                scrolling: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-500vw)' },
                },
                scrollingXl: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-200vw)' },
                },
                scrollingBack: {
                    '0%': { transform: 'translateX(-500vw)' },
                    '100%': { transform: 'translateX(0)' },
                },
                scrollingBackXl: {
                    '0%': { transform: 'translateX(-200vw)' },
                    '100%': { transform: 'translateX(0)' },
                },
            }
        },
    },
    plugins: [],
}