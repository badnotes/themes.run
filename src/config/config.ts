// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Themes. The themes.run, your creative accelerator. ',
	siteDescription:
		'The themes.run, from template to masterpiece, just a little inspiration from you..',
	ogImage: '/logo.png',
	logo: {
		src: '/logo.png',
		alt: 'Themes.run. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
