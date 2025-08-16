import { CodeIcon, Github, Globe, HomeIcon, FocusIcon, Youtube } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

import BuildSpaceImg from '$lib/imgs/buildspace.jpg';
import WaterLooImg from '$lib/imgs/waterloo.png';
import LaurierImg from '$lib/imgs/laurier.png';
import IBImg from '$lib/imgs/ib.png';

// Your resume data
export let DATA = {
	name: 'Dhruv Aggarwal',
	initials: 'DA',
	url: 'https://github.com/Dhruvagwal',
	img: 'https://i.pinimg.com/736x/9e/dc/a6/9edca66eba199828bda2dbaf35642154.jpg',
	location: 'Mumbai, India',
	locationLink: 'https://www.google.com/maps/place/mumbai',
	description: 'Software Engineer with AIML Specialization',
	summary:
		'Since 2020, I’ve been building SaaS and AI-driven products — from co-founding [Sheetsway](#projects) (AI audit automation platform) to [winning hackathons](#hackathons), while leveraging my background in [Computer Science & Business](#education) and hands-on experience in [full-stack & AI/ML development](#skills).',
	avatarUrl: 'https://i.ibb.co/TMnLv4Hr/4d1f3be5-8464-4db4-b5b8-cd7b2ssssss4319abd.jpg',
	skills: [
		'React',
		'Next.js',
		'Vite',
		'Typescript',
		'Node.js',
		'Python',
		'Django',
		'C# / .NET',
		'Java',
		'C++',
		'SQL / Postgres',
		'GraphQL',
		'REST APIs',
		'Azure',
		'AWS',
		'GCP',
		'Docker',
		'Kubernetes',
		'AI / ML (PyTorch, TensorFlow)',
		'Deep Learning & Transformers',
		'NLP',
		'Retrieval-Augmented Generation (RAG)',
		'LLM Fine-tuning',
		'MLOps'
	],

	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '#projects', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		email: 'dhruvaggawral256@gmail.com',
		tel: '+918595771213',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/Dhruvagwal/Personal-Portfolio',
				// // icon: Icons.github,
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/dhruvagwal/',
				// // icon: Icons.linkedin,
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			X: {
				name: 'X',
				url: 'https://twitter.com/Sikandar_Bhide',
				// // icon: Icons.x,
				icon: TwitterSvg,
				navbar: true,
				dark_icon: TwitterDarkSvg
			},
			email: {
				name: 'Send Email',
				url: '#',
				// // icon: Icons.email,
				icon: GmailSvg,
				navbar: false,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: 'Sheetsway',
			href: 'https://sheetsway.com',
			badges: [],
			location: 'San Gwann, Malta (Remote)',
			title: 'Full Stack Developer',
			logoUrl:
				'https://media.licdn.com/dms/image/v2/D4D0BAQHO3ufqIY34Jw/company-logo_100_100/company-logo_100_100/0/1696203047834?e=1758153600&v=beta&t=3tZf2nvi7es8VD4UDJrL3UC98swwJb_EscE_4atAJQs',
			start: 'May 2023',
			end: 'June 2025',
			description:
				'Led the platform’s growth by developing core functionalities, optimizing backend performance, and improving scalability. Enhanced user adoption through user-friendly interfaces and reduced friction in audit workflows. Contributed to scaling the platform to a $15M valuation, delivering responsive products with page load times under 3 seconds and boosting engagement by 10%.'
		},
		{
			company: 'Elpha AI',
			href: 'https://elpha.ai',
			badges: [],
			location: 'Gurgaon, India (Remote)',
			title: 'Full Stack Developer',
			logoUrl:
				'https://media.licdn.com/dms/image/v2/D4D0BAQHG8HiAUYhxKQ/company-logo_100_100/company-logo_100_100/0/1686141327074?e=1758153600&v=beta&t=ESZzCACAVrbD91dYKBgBP1iSPwe4MR9OzznD9osfPUY',
			start: 'November 2022',
			end: 'May 2023',
			description:
				'Engineered visually striking, user-centric web products for AI-driven projects. Collaborated with cross-functional teams to integrate advanced AI features into production systems. Designed intuitive UI/UX interfaces, driving higher engagement and user satisfaction.'
		},
		{
			company: 'Onelang',
			href: 'https://onelang.io',
			badges: [],
			location: 'Gurgaon, India (Remote)',
			title: 'Full Stack Developer',
			logoUrl:
				'https://media.licdn.com/dms/image/v2/C4D0BAQEAkTnUl7kQRw/company-logo_100_100/company-logo_100_100/0/1658155211148/onelangzone_logo?e=1758153600&v=beta&t=UWv7Hz7zGmRxlQpe_Ja8Uy_wOBDfetrfJTrc1JfEjx4',
			start: 'March 2020',
			end: 'November 2022',
			description:
				'Developed an AI-powered platform capable of translating 196 languages from images and PDFs while preserving layout and formatting. Built and trained custom MT5 transformer models with Hugging Face datasets. Acted as a bridge between clients and the company, aligning solutions with client requirements and ensuring successful project delivery.'
		}
	],

	education: [
		{
			school: 'Dr. A. P. J. Abdul Kalam Technical University',
			href: 'https://aktu.ac.in',
			degree: 'B.E - CSE (Bachelor of Engineering in AI & Machine Learning)',
			logoUrl:
				'https://upload.wikimedia.org/wikipedia/en/9/98/Dr._A.P.J._Abdul_Kalam_Technical_University_logo.png',
			start: '2022',
			end: '2025'
		},
		{
			school: 'Bhai Parmanand Vidya Mandir',
			href: 'https://bpvm.edu.in',
			degree: 'High School (CBSE)',
			logoUrl:
				'https://jecschools.com/frontend/web/uploads/media//2023/Dec/30/1703953313_Bhai_Parmanand_Vidya_Mandir__Anand_Vihar.jpg',
			start: '2016',
			end: '2021'
		},
		{
			school: 'National Victor Public School',
			href: 'https://nvpsschool.com',
			degree: 'Matriculation',
			logoUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgc6H4Rt1HBn-cZK0TjehO8J-hFPEkAfc_eA&s',
			start: '2012',
			end: '2018'
		}
	],

	projects: [
		{
			title: 'Maltaxplore',
			href: 'https://maltaxplore.com',
			dates: '2024',
			active: true,
			description:
				'Built a tourism and local discovery platform for Malta, helping visitors and residents explore attractions, events, and businesses. Designed with responsive UI and fast backend services to handle growing traffic.',
			technologies: ['Next.js', 'Typescript', 'PostgreSQL', 'TailwindCSS', 'Shadcn UI', 'Vercel'],
			links: [
				{
					type: 'Website',
					href: 'https://maltaxplore.com',
					icon: Globe
				}
			],
			image: 'https://ibb.co/ZpqcsxpX',
			video: ''
		},
		{
			title: 'Anitix',
			href: '',
			dates: '2023',
			active: false,
			description:
				'Developed an anime-focused platform integrating recommendation systems and personalized dashboards. Implemented AI-based search and filtering for anime/manga content discovery.',
			technologies: ['React', 'Next.js', 'Typescript', 'Node.js', 'Python', 'TailwindCSS'],
			links: [],
			image: '',
			video: ''
		},
		{
			title: 'AI Avatar Interaction (Hackathon Project)',
			href: '',
			dates: 'Dec 2024',
			active: false,
			description:
				'Developed a plugin for Google Meet and Zoom enabling personalized avatars that sync with facial expressions and full-body motion. Implemented real-time translation into 197 languages, winning 1st prize at the Dron Hackathon.',
			technologies: ['Python', 'TensorFlow', 'PyTorch', 'React', 'Next.js', 'WebRTC', 'Node.js'],
			links: [],
			image: '',
			video: ''
		},
		{
			title: 'AI Avatar Interaction (Hackathon Project)',
			href: '',
			dates: 'Dec 2024',
			active: false,
			description:
				'Developed a plugin for Google Meet and Zoom enabling personalized avatars that sync with facial expressions and full-body motion. Implemented real-time translation into 197 languages, winning 1st prize at the Dron Hackathon.',
			technologies: ['Python', 'TensorFlow', 'PyTorch', 'React', 'Next.js', 'WebRTC', 'Node.js'],
			links: [],
			image: '',
			video: ''
		},
		{
			title: 'AI Avatar Interaction (Hackathon Project)',
			href: '',
			dates: 'Dec 2024',
			active: false,
			description:
				'Developed a plugin for Google Meet and Zoom enabling personalized avatars that sync with facial expressions and full-body motion. Implemented real-time translation into 197 languages, winning 1st prize at the Dron Hackathon.',
			technologies: ['Python', 'TensorFlow', 'PyTorch', 'React', 'Next.js', 'WebRTC', 'Node.js'],
			links: [],
			image: '',
			video: ''
		},
		{
			title: 'AI Avatar Interaction (Hackathon Project)',
			href: '',
			dates: 'Dec 2024',
			active: false,
			description:
				'Developed a plugin for Google Meet and Zoom enabling personalized avatars that sync with facial expressions and full-body motion. Implemented real-time translation into 197 languages, winning 1st prize at the Dron Hackathon.',
			technologies: ['Python', 'TensorFlow', 'PyTorch', 'React', 'Next.js', 'WebRTC', 'Node.js'],
			links: [],
			image: '',
			video: ''
		},
		{
			title: 'AI Avatar Interaction (Hackathon Project)',
			href: '',
			dates: 'Dec 2024',
			active: false,
			description:
				'Developed a plugin for Google Meet and Zoom enabling personalized avatars that sync with facial expressions and full-body motion. Implemented real-time translation into 197 languages, winning 1st prize at the Dron Hackathon.',
			technologies: ['Python', 'TensorFlow', 'PyTorch', 'React', 'Next.js', 'WebRTC', 'Node.js'],
			links: [],
			image: '',
			video: ''
		},
		{
			title: 'AI Avatar Interaction (Hackathon Project)',
			href: '',
			dates: 'Dec 2024',
			active: false,
			description:
				'Developed a plugin for Google Meet and Zoom enabling personalized avatars that sync with facial expressions and full-body motion. Implemented real-time translation into 197 languages, winning 1st prize at the Dron Hackathon.',
			technologies: ['Python', 'TensorFlow', 'PyTorch', 'React', 'Next.js', 'WebRTC', 'Node.js'],
			links: [],
			image: '',
			video: ''
		},
		{
			title: 'AI Avatar Interaction (Hackathon Project)',
			href: '',
			dates: 'Dec 2024',
			active: false,
			description:
				'Developed a plugin for Google Meet and Zoom enabling personalized avatars that sync with facial expressions and full-body motion. Implemented real-time translation into 197 languages, winning 1st prize at the Dron Hackathon.',
			technologies: ['Python', 'TensorFlow', 'PyTorch', 'React', 'Next.js', 'WebRTC', 'Node.js'],
			links: [],
			image: '',
			video: ''
		},
		{
			title: 'AI Avatar Interaction (Hackathon Project)',
			href: '',
			dates: 'Dec 2024',
			active: false,
			description:
				'Developed a plugin for Google Meet and Zoom enabling personalized avatars that sync with facial expressions and full-body motion. Implemented real-time translation into 197 languages, winning 1st prize at the Dron Hackathon.',
			technologies: ['Python', 'TensorFlow', 'PyTorch', 'React', 'Next.js', 'WebRTC', 'Node.js'],
			links: [],
			image: '',
			video: ''
		}
	],

	hackathons: [
		{
			title: 'DeveloperWeek Hackathon',
			dates: 'February 3rd - 4th, 2018',
			location: 'San Francisco, California',
			description:
				'Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg',
			links: [
				{
					title: 'Github',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/cryptotrends/cryptotrends'
				}
			]
		},
		{
			title: 'HackDavis',
			dates: 'January 20th - 21st, 2018',
			location: 'Davis, California',
			description:
				'Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png',
			win: 'Best Data Hack',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
			links: [
				{
					title: 'Devpost',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://devpost.com/software/my6footprint'
				},
				{
					title: 'ML',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/Wallet6/my6footprint-machine-learning'
				},
				{
					title: 'iOS',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/Wallet6/CarbonWallet'
				},
				{
					title: 'Server',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/Wallet6/wallet6-server'
				}
			]
		},
		{
			title: 'ETH Waterloo',
			dates: 'October 13th - 15th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png',
			links: [
				{
					title: 'Organization',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/ethdocnet'
				}
			]
		},
		{
			title: 'Hack The North',
			dates: 'September 15th - 17th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed a virtual reality application allowing users to see themselves in third person.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Streamer Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/justinmichaud/htn2017'
				},
				{
					title: 'Client Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/RTSPClient'
				}
			]
		},

		{
			title: 'Portal Hackathon',
			dates: 'October 29, 2016',
			location: 'Kingston, Ontario',
			description:
				"Developed an internal widget for uploading assignments using Waterloo's portal app",
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png',
			links: [
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/UWPortalSDK/crowmark'
				}
			]
		}
	]
};
