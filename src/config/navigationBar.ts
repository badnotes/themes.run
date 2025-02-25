// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.png',
		alt: 'The themes.run, your creative accelerator.',
		text: 'Themes.'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'Astro', link: '/astro' },
		{ name: 'Next', link: '/next' },
		{ name: 'Hugo', link: '/hugo' },
		{ name: 'Jekyll', link: '/jekyll' },
		{ name: 'WordPress', link: '/wordpress' },
		{ name: 'Hexo', link: '/hexo' },
		{ name: 'Obsidian', link: '/obsidian' },
		// { name: 'Pricing', link: '/pricing' },
		// { name: 'Features', link: '/features' },
		// {
		// 	name: 'Resources',
		// 	link: '#',
		// 	submenu: [
		// 		{ name: 'Blog', link: '/blog' },
		// 		{ name: 'Changelog', link: '/changelog' },
		// 		{ name: 'FAQ', link: '/faq' },
		// 		{ name: 'Terms', link: '/terms' }
		// 	]
		// },
		// { name: 'Contact', link: '/contact' },
		{ name: 'About', link: '/about' },
	],
	navActions: [
		// { name: 'Try it now', link: '/', style: 'primary', size: 'lg' },
	]
}
