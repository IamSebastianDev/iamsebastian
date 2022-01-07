/** @format */

export default (i18n) => {
	return [
		{
			heading: 'Pangolicons',
			tech: 'JS, SvelteKit, TailwindCSS, Node.js, NPM',
			image: './assets/image/thumbnail_pangolicons.jpg',
			alt: 'thumbnail for a icon library website',
			description: i18n.translate('portfolio.pangolicons'),
			links: {
				website: {
					href: 'https://pangolicons.herokuapp.com',
					icon: Pangolicons.icons.convertToLink,
				},
				github: {
					href: 'https://github.com/IamSebastianDev/pangolicons',
					icon: Pangolicons.icons.github,
				},
				npm: {
					href: 'https://www.npmjs.com/package/pangolicons',
					icon: Pangolicons.icons.convertToLink,
				},
			},
		},
		{
			heading: 'Krankenhausampel Bayern',
			tech: 'JS, Node.js, Puppeteer, API',
			image: './assets/image/thumbnail_krankenhausampel.jpg',
			alt: 'thumbnail for a healthcare website',
			description: i18n.translate('portfolio.krankenhausampel'),
			links: {
				website: {
					href: 'https://krankenhausampelbayern.de',
					icon: Pangolicons.icons.convertToLink,
				},
				github: {
					href: 'https://github.com/IamSebastianDev/ampeldashboardbayern',
					icon: Pangolicons.icons.github,
				},
			},
		},
		{
			heading: 'Vay.js',
			tech: 'JS, Node.js',
			image: './assets/image/thumbnail_default.jpg',
			alt: 'thumbnail depicting the github octocat.',
			description: i18n.translate('portfolio.vay'),
			links: {
				github: {
					href: 'https://github.com/IamSebastianDev/vay.js',
					icon: Pangolicons.icons.github,
				},
			},
		},
		{
			heading: 'Qarri Reinigungsservice',
			tech: 'JS, Sveltekit, TailwindCSS',
			image: './assets/image/thumbnail_qarri.jpeg',
			alt: 'thumbnail depicting the Website',
			description: i18n.translate('portfolio.qarri'),
			links: {
				github: {
					href: 'https://github.com/IamSebastianDev/qarri-reinigungsservice.de',
					icon: Pangolicons.icons.github,
				},
				website: {
					href: 'https://qarri-reinigungsservice.de',
					icon: Pangolicons.icons.convertToLink,
				},
			},
		},
		{
			heading: 'Sabi Photography',
			tech: 'JS, Custom designed CMS, API',
			image: './assets/image/thumbnail_photography.jpg',
			alt: 'thumbnail for a photography website',
			description: i18n.translate('portfolio.photography'),
			links: {
				website: {
					href: 'https://sabrinawanninger.de',
					icon: Pangolicons.icons.convertToLink,
				},
			},
		},
		{
			heading: 'simpLipsum',
			tech: 'JS, Node.js, API',
			image: './assets/image/thumbnail_simplipsum.jpg',
			alt: 'thumbnail for a typography page',
			description: i18n.translate('portfolio.simplipsum'),
			links: {
				website: {
					href: 'https://simplipsum.vercel.app',
					icon: Pangolicons.icons.convertToLink,
				},
				github: {
					href: 'https://github.com/IamSebastianDev/simpLipsum.dev',
					icon: Pangolicons.icons.github,
				},
			},
		},
		{
			heading: 'FlatShadow.js',
			tech: 'JS',
			image: './assets/image/thumbnail_flatshadow.jpg',
			alt: 'thumbnail for a javascript library with beatiful shadows.',
			description: i18n.translate('portfolio.flatshadow'),
			links: {
				website: {
					href: 'https://flatshadow.vercel.app',
					icon: Pangolicons.icons.convertToLink,
				},
				github: {
					href: 'https://github.com/IamSebastianDev/flatShadow.js',
					icon: Pangolicons.icons.github,
				},
			},
		},
		{
			heading: 'WatcherBot.js',
			tech: 'JS, Puppeteer',
			image: './assets/image/thumbnail_default.jpg',
			alt: 'thumbnail for a javascript library.',
			description: i18n.translate('portfolio.watcherbot'),
			links: {
				github: {
					href: 'https://github.com/IamSebastianDev/watcherbot',
					icon: Pangolicons.icons.github,
				},
				npm: {
					href: 'https://www.npmjs.com/package/watcherbot',
					icon: Pangolicons.icons.convertToLink,
				},
			},
		},
	];
};
