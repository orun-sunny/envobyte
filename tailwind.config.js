import { AspectUITheme, colors } from "aspect-ui/AspectUITheme";

const colorsPalette = {
	...colors,
};

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
				raleway: "var(--font-raleway), sans-serif",
				inter: "var(--font-inter), sans-serif",
				roboto: "var(--font-roboto), sans-serif",
			},
		},
	},
	plugins: [],
};

export default AspectUITheme(config, colorsPalette);
