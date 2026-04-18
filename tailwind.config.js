/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				sm: "420px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				tablet: "900px",
				laptop: "1200px",
				desktop: "1440px",
			},
			colors: {
				primary: "#4A69E2",
				secondary: "#FFA52F",
				blue: {
					DEFAULT: "#4A69E2",
					500: "#4A69E2",
				},
				yellow: {
					500: "#FFA52F",
				},
				white: {
					DEFAULT: "#FFFFFF",
					fa: "#FAFAFA",
				},
				gray: {
					light: "#E7E7E3",
					main: "#70706E",
					dark: "#232321",
				},
			},
			spacing: {
				128: "32rem",
			},
			fontFamily: {
				sans: ["Rubik", "Graphik", "sans-serif"],
				rubik: ["Rubik", "sans-serif"],
			},
		},
	},
	plugins: [],
};
