/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
            colors: {
                'gato-blue-1': '#EEFEFF',
                'gato-blue-2': '#3275DA',
                'gato-blue-3': '#12305E',
                'gato-light-yellow': '#FFFEF1',
                'gato-violet': '#B7BDFF',
                'gato-pink-1': '#FBF3FE',
                'gato-pink-2': '#FFB7E2',
            }
        },
	},
	plugins: [],
};
