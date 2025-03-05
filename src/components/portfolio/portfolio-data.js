import luluCoverImage from './images/lululemon/lululemon_gg_desktop-3.png';
import luluCoverImage2 from './images/lululemon/lululemon_gg_browser_light-3.png';

import suiCoverImage from './images/scilent-ui/Scilent UI - Music UI Kit - Cover.png';
import smCoverImage from './images/sd01/sm_mockup_mobile3-logo2.png';
import smFeatureRelease from './images/sd01/Release Hub-2.png';
import smFeatureReview from './images/sd01/Review Engine-Updated 2.png';
import smFeatureAura from './images/sd01/123shots_so.png';

import f1CoverImage from './images/f1/Design Case Study - F123.001.jpeg';

const PortfolioData = {
	items: [
		{
			title: 'Scilent UI',
			subtitle: 'design system + UI kit',
			link: '/scilent-ui',
			overview:
				'A component and utility library for music-based applications and UIs',
			description: '',
			skills: [
				'mobile development',
				'web development',
				'ui/ux',
				'visual design',
				'interaction design',
				'design systems',
			],
			images: [
				{
					src: suiCoverImage,
					alt: 'scilent music cover image',
				},
			],
			features: [
				{
					title: 'Release Day Central',
					description: "A central hub for all your favorite artists' releases",
					images: [{ src: smFeatureRelease, alt: 'scilent music release hub' }],
				},
				{
					title: 'Listen in stereo',
					description:
						'Aggregated listening data and real-time insights to give you and your followers a full view of your listening experience, tendencies, departures, and discoveries',
					images: [{ src: smFeatureAura, alt: 'scilent music data insights' }],
				},
				{
					title: 'Be heard',
					description:
						'An all-new Verified Review Engine TM that ensures real and authentic reviews and reactions from real fans and listeners.',
					images: [
						{ src: smFeatureReview, alt: 'scilent music review engine' },
					],
				},
			],
		},
		{
			title: 'scilent music',
			subtitle: 'mobile application',
			link: '/scilent-music',
			overview:
				'An original music app designed to elevate the listening experience',
			description:
				'This ongoing project has served as a platform for my own re-imagining of the modern, integrated music listening experience focused around enhancing the ways in which listeners interact with the music they hear everyday.',
			skills: [
				'mobile development',
				'web development',
				'react native',
				'ui/ux',
				'visual design',
				'interaction design',
			],
			images: [
				{
					src: smCoverImage,
					alt: 'scilent music cover image',
				},
			],
			features: [
				{
					title: 'Release Day Central',
					description: "A central hub for all your favorite artists' releases",
					images: [{ src: smFeatureRelease, alt: 'scilent music release hub' }],
				},
				{
					title: 'Listen in stereo',
					description:
						'Aggregated listening data and real-time insights to give you and your followers a full view of your listening experience, tendencies, departures, and discoveries',
					images: [{ src: smFeatureAura, alt: 'scilent music data insights' }],
				},
				{
					title: 'Be heard',
					description:
						'An all-new Verified Review Engine TM that ensures real and authentic reviews and reactions from real fans and listeners.',
					images: [
						{ src: smFeatureReview, alt: 'scilent music review engine' },
					],
				},
			],
		},
		{
			title: 'Holiday Gift Guide',
			subtitle: 'web + mobile web experience',
			link: '/holiday-gift-guide',
			overview: "lululemon's festive web experience for the holidays",
			description:
				"As a frontend engineer with lululemon's Digital Elevated Experiences team, I contributed to the redesign and implementation of the Holiday Gift Guide and related web experiences.",
			skills: ['web development', 'frontend', 'react', 'Contentful CMS'],
			images: [
				{
					src: luluCoverImage,
					alt: 'gift guide cover image',
				},
				{
					src: luluCoverImage2,
					alt: 'gift guide cover image',
				},
			],
			// features: [
			// 	{
			// 		title: 'Feature 1',
			// 		description:
			// 			"The revamped gift guide's fresh layout and new components centered around product curation and ease-of-use",
			// 		images: [],
			// 	},
			// 	{
			// 		title: 'Feature 2',
			// 		description:
			// 			"Development ensured accessiblity and responsiveness regardless of user's device",
			// 		images: [],
			// 	},
			// 	{
			// 		title: 'Feature 3',
			// 		description:
			// 			'content author collaboration, contentful CMS integration - seamless workflow for content authors to draft/publish/ adjust gift guide categories and products',
			// 		images: [],
			// 	},
			// ],
		},
		{
			title: 'F1 23 Redesign',
			subtitle: 'UX Design Case Study',
			link: '/f1-23',
			overview:
				'A case study on enhancing the user experience of EA Sports F1 23',
			description:
				'This design exploration addresses the user experience and visual design of F1 23 in three main ways: data visualization, layout of information, and improved visual design cues.',
			skills: ['ui/ux', 'visual design', 'figma', 'adobe cc'],
			images: [
				{
					src: f1CoverImage,
					alt: 'f1 cover image',
				},
			],
			// features: [
			// 	{
			// 		title: 'Feature 1',
			// 		description:
			// 			"The revamped gift guide's fresh layout and new components centered around product curation and ease-of-use",
			// 		images: [],
			// 	},
			// 	{
			// 		title: 'Feature 2',
			// 		description:
			// 			"Development ensured accessiblity and responsiveness regardless of user's device",
			// 		images: [],
			// 	},
			// 	{
			// 		title: 'Feature 3',
			// 		description:
			// 			'content author collaboration, contentful CMS integration - seamless workflow for content authors to draft/publish/ adjust gift guide categories and products',
			// 		images: [],
			// 	},
			// ],
		},
	],
};

export default PortfolioData;
