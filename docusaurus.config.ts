import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
	title: "Voyager",
	tagline: "",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://voyager.smithgeek.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "Smithgeek", // Usually your GitHub org/user name.
	projectName: "Voyager", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					editUrl: `https://github.com/smithgeek/voyager-documentation/blob/main`,
				},
				// blog: {
				// 	showReadingTime: true,
				// },
				theme: {
					customCss: "./src/css/custom.css",
				},
				pages: {},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/voyager.png",
		colorMode: {
			defaultMode: "dark",
		},
		navbar: {
			title: "Voyager",
			logo: {
				alt: "Voyager Logo",
				src: "img/voyager.png",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Documentation",
				},
				{
					to: "/benchmarks",
					label: "Benchmarks",
					position: "left",
				},
				// { to: "/blog", label: "Blog", position: "left" },
				{
					href: "https://github.com/smithgeek/voyager",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Documentation",
							to: "/docs/getting-started",
						},
						{
							label: "Benchmarks",
							to: "/benchmarks",
						},
					],
				},
				// {
				// 	title: "Community",
				// 	items: [
				// 		{
				// 			label: "Stack Overflow",
				// 			href: "https://stackoverflow.com/questions/tagged/docusaurus",
				// 		},
				// 		{
				// 			label: "Discord",
				// 			href: "https://discordapp.com/invite/docusaurus",
				// 		},
				// 		{
				// 			label: "Twitter",
				// 			href: "https://twitter.com/docusaurus",
				// 		},
				// 	],
				// },
				{
					title: "More",
					items: [
						// {
						// 	label: "Blog",
						// 	to: "/blog",
						// },
						{
							label: "GitHub",
							href: "https://github.com/smithgeek/voyager",
						},
						{
							label: "Documentation GitHub",
							href: "https://github.com/smithgeek/voyager-documentation",
						},
					],
				},
			],
			copyright: `Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ["csharp"],
		},
	} satisfies Preset.ThemeConfig,
	plugins: [
		async function myPlugin(context, options) {
			return {
				name: "docusaurus-tailwindcss",
				configurePostCss(postcssOptions) {
					// Appends TailwindCSS and AutoPrefixer.
					postcssOptions.plugins.push(require("tailwindcss"));
					postcssOptions.plugins.push(require("autoprefixer"));
					return postcssOptions;
				},
			};
		},
	],
};

export default config;
