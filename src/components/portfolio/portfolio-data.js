import luluCoverImage from './images/lululemon/lululemon_gg_desktop-3.png';
import luluCoverImage2 from './images/lululemon/lululemon_gg_browser_light-3.png';

import smCoverImage from './images/sd01/sm_mockup_mobile3-logo2.png';

import f1CoverImage from './images/f1/Design Case Study - F123.001.jpeg';

const PortfolioData = {
	items: [
		{
			title: 'Holiday Gift Guide',
			subtitle: 'web/mobile web experience',
			overview: "lululemon's festive web experience for the holidays",
			description:
				'This is a an overview/description of the project. This should be a little more detailed than the previous page description, but short and sweet.',
			skills: ['web development'],
			images: [
				{
					src: luluCoverImage,
					alt: '',
				},
				{
					src: luluCoverImage2,
					alt: '',
				},
			],
			features: [
				{
					title: 'Feature 1',
					description:
						"The revamped gift guide's fresh layout and new components centered around product curation and ease-of-use",
					images: [],
				},
				{
					title: 'Feature 2',
					description:
						"Development ensured accessiblity and responsiveness regardless of user's device",
					images: [],
				},
				{
					title: 'Feature 3',
					description:
						'content author collaboration, contentful CMS integration - seamless workflow for content authors to draft/publish/ adjust gift guide categories and products',
					images: [],
				},
			],
			link: '/holiday-gift-guide',
		},
		{
			title: 'scilent music',
			subtitle: 'mobile application',
			overview:
				'An original music app designed to elevate the listening experience',
			description:
				'This is a an overview/description of the project. This should be a little more detailed than the previous page description, but short and sweet.',
			skills: [
				'mobile development',
				'web development',
				'ui/ux',
				'visual design',
				'interaction design',
			],
			images: [
				{
					src: smCoverImage,
					alt: '',
				},
				{
					src: smCoverImage,
					alt: '',
				},
			],
			features: [
				{
					title: 'Feature 1',
					description:
						"The revamped gift guide's fresh layout and new components centered around product curation and ease-of-use",
					images: [],
				},
				{
					title: 'Feature 2',
					description:
						"Development ensured accessiblity and responsiveness regardless of user's device",
					images: [],
				},
				{
					title: 'Feature 3',
					description:
						'content author collaboration, contentful CMS integration - seamless workflow for content authors to draft/publish/ adjust gift guide categories and products',
					images: [],
				},
			],
			link: '/scilent-music',
		},
		{
			title: 'F1 23 Redesign',
			subtitle: 'UX Design Case Study',
			overview:
				'A case study on enhancing the user experience of EA Sports F1 23',
			description:
				'This is a an overview/description of the project. This should be a little more detailed than the previous page description, but short and sweet.',
			skills: ['ui/ux', 'visual design'],
			images: [
				{
					src: f1CoverImage,
					alt: '',
				},
				{
					src: f1CoverImage,
					alt: '',
				},
			],
			features: [
				{
					title: 'Feature 1',
					description:
						"The revamped gift guide's fresh layout and new components centered around product curation and ease-of-use",
					images: [],
				},
				{
					title: 'Feature 2',
					description:
						"Development ensured accessiblity and responsiveness regardless of user's device",
					images: [],
				},
				{
					title: 'Feature 3',
					description:
						'content author collaboration, contentful CMS integration - seamless workflow for content authors to draft/publish/ adjust gift guide categories and products',
					images: [],
				},
			],
			link: '/f1-23',
		},
	],
};

export default PortfolioData;
