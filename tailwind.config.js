import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-to-r': 'linear-gradient(to right, #FF1CF7, #b249f8)',
            },
            fontSize: {
                'form-label': '1.25rem', // example size, adjust as needed
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
}
