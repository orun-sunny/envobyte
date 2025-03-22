import { AspectUITheme, colors } from "aspect-ui/AspectUITheme";
const { Raleway, Inter } = require("next/font/google");

const colorsPalette = {
	...colors,
	// primary: {
	// 	50: "#fff",
	// 	100: "#fff",
	// 	200: "#fff",
	// 	300: "#fff",
	// 	400: "#fff",
	// 	500: "#fff",
	// 	600: "#fff",
	// 	700: "#fff",
	// 	800: "#fff",
	// 	900: "#fff",
	// 	950: "#fff",
	// },
};

const raleway = Raleway({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-raleway",
});

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-inter",
});

const config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			fontFamily: {
				raleway: "var(--font-raleway)",
				inter: "var(--font-inter)",
			},
		},
	},
	plugins: [],
};

export default AspectUITheme(config, colorsPalette);



