/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'gato-blue-1': '#EEFEFF',
                'gato-blue-2': '#3275DA',
                'gato-blue-3': '#12305E',
                'gato-yellow-1': '#FFFEF1',
                'gato-yellow-2': '#FFF2A7',
                'gato-violet': '#B7BDFF',
                'gato-pink-1': '#FBF3FE',
                'gato-pink-2': '#FFB7E2',
            },
            boxShadow: {
                gato: '-6px 6px 0px 0px #3275DA;',
            },
        },
        backgroundImage: {
            'blue-checkerboard':
                "url('/src/assets/images/checkerboard_pattern.png')",
        },
    },
    plugins: [],
};
