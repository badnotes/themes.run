// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'themes.',
		aboutText:
			'The themes.run, your creative accelerator. ',
		logo: {
			src: '/logo.png',
			alt: 'The themes.run, your creative accelerator. ',
			text: 'themes.'
		}
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{
					subCategory: 'Features',
					subCategoryLink: '/about'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/about'
				},
				// {
				// 	subCategory: 'Pricing',
				// 	subCategoryLink: '/pricing'
				// },
				// {
				// 	subCategory: 'Changelog',
				// 	subCategoryLink: '/changelog'
				// },
				{
					subCategory: 'Terms',
					subCategoryLink: '/about'
				}
			]
		},
		{
			category: 'About us',
			subCategories: [
				{
					subCategory: 'About us',
					subCategoryLink: '/about'
				},
				// {
				// 	subCategory: 'News',
				// 	subCategoryLink: '/blog'
				// },
				// {
				// 	subCategory: 'Careers',
				// 	subCategoryLink: '/blog'
				// }
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/about'
				},
				// {
				// 	subCategory: 'Support',
				// 	subCategoryLink: '/contact'
				// },
				{
					subCategory: 'Join us',
					subCategoryLink: '/about'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© themes 2025.'
	}
}
