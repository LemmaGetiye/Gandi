/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{html,js}'],
    safelist: ['before:content-[""]', 'after:content-["*"]'],
    theme: {
        extend: {
            backgroundImage: {
                'conic-gradient': 'conic-gradient(#10b981, #60a5fa,#10b981)',
            },
            height: {
                screen: '100dvh',
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
        function ({ addUtilities }) {
            addUtilities({
                '.no-scrollbar': {
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                },
                '.scrollbar-dark::-webkit-scrollbar-track': {
                    background: '#0f172a',
                },
                '.scrollbar-dark::-webkit-scrollbar-thumb': {
                    backgroundColor: '#020617',
                    borderRadius: '6px',
                    border: '3px solid #0f172a',
                },
            })
        },
    ],
}
