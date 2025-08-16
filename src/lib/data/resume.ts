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
	location: 'Delhi, India',
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
		email: 'dhruvaggarwal256@gmail.com',
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
				url: '',
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
			title: 'AuditBrew',
			href: 'https://auditbrew.com',
			dates: '2025',
			active: true,
			description:
				'Built an AI-powered audit automation platform designed to streamline external audits. Integrated data ingestion, document organization, and reporting workflows to cut audit time and costs significantly. Developed responsive UI and scalable backend services for high performance under enterprise loads.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Node.js',
				'Python',
				'TailwindCSS',
				'Shadcn UI',
				'Vercel',
				'AWS'
			],
			links: [
				{
					type: 'Website',
					href: 'https://auditbrew.com',
					icon: Globe
				}
			],
			image: 'https://www.auditbrew.com/images/landing/hero/navigation.png',
			video: ''
		},
		{
			title: 'Maltaxplore',
			href: 'https://maltaxplore.com',
			dates: '2024',
			active: true,
			description:
				'Tourism and local discovery platform for Malta, helping visitors and residents explore attractions, events, and businesses. Built with a responsive UI, scalable backend, and optimized for speed to handle high user traffic.',
			technologies: ['Next.js', 'Typescript', 'PostgreSQL', 'TailwindCSS', 'Shadcn UI', 'Vercel'],
			links: [
				{
					type: 'Website',
					href: 'https://maltaxplore.com',
					icon: Globe
				}
			],
			image: 'https://i.ibb.co/Q3yYBM3Q/image.png',
			video: ''
		},
		{
			title: 'Anitix',
			href: '',
			dates: '2023',
			active: false,
			description:
				'Developed a cross-platform Flutter app for anime lovers with personalized dashboards and AI-powered recommendations. Implemented smart search and filtering for anime/manga discovery, delivering a sleek and engaging user experience on both Android and iOS.',
			technologies: ['Flutter', 'Dart', 'Firebase', 'Python', 'TensorFlow', 'TailwindCSS'],
			links: [],
			image: 'https://vaibhav-portfolio-c9f3e.web.app/_next/static/media/anitix-large.e76e2eb8.png',
			video: ''
		},
		{
			title: 'AI Avatar Interaction (Hackathon Project)',
			href: '',
			dates: 'Dec 2024',
			active: false,
			description:
				'Built a plugin for Google Meet and Zoom enabling personalized avatars that mirror facial expressions and full-body motion. Added real-time translation into 197 languages. Won 1st prize at the Dron Hackathon for innovation and execution.',
			technologies: ['Python', 'TensorFlow', 'PyTorch', 'React', 'Next.js', 'WebRTC', 'Node.js'],
			links: [],
			image: 'https://vaibhav-portfolio-c9f3e.web.app/_next/static/media/motion.6842cfce.jpeg',
			video:
				'https://firebasestorage.googleapis.com/v0/b/onelangworld.appspot.com/o/motion-demo.845ae6be.mp4?alt=media&token=6e567151-e66e-40ac-9f55-1fbd8ad68470'
		},
		{
			title: 'Onelang 2.0',
			href: '',
			dates: '2024',
			active: false,
			description:
				'Second-generation version of Onelang, an AI-powered multilingual platform. Supported document and image translation across 196 languages while preserving layout. Implemented improved transformer models and UI upgrades.',
			technologies: [
				'Python',
				'TensorFlow',
				'PyTorch',
				'Transformers',
				'React',
				'Next.js',
				'Node.js'
			],
			links: [],
			image: '',
			video:
				'https://firebasestorage.googleapis.com/v0/b/onelangworld.appspot.com/o/Onelang.34a6c092.mp4?alt=media&token=990e5e19-ed75-46ac-ac0d-b25ab2c493a5'
		},
		{
			title: 'Track Your Race',
			href: '',
			dates: '2024',
			active: false,
			description:
				'Developed a real-time event tracking and race management platform. Provided live tracking, progress dashboards, and participant statistics with a responsive UI and optimized backend for scalability.',
			technologies: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'TailwindCSS'],
			links: [],
			image: 'https://i.ibb.co/pjP6gR0b/image.png',
			video: ''
		}
	],

	achievements: [
		{
			title: 'Co-founded Sheetsway',
			description:
				'Scaled Sheetsway into an AI-powered audit automation platform adopted by 20+ audit firms including Big 4. Achieved a $15M valuation by improving audit efficiency by 50% and reducing costs by 63%.',
			dates: 'May 2023 – Jun 2025',
			location: 'San Gwann, Malta (Remote)'
		},
		{
			title: 'Winner – Dron Hackathon 2024',
			description:
				'Built an AI Avatar Interaction plugin for Google Meet/Zoom that mirrored facial expressions and full-body motion, with real-time translation into 197 languages. Won 1st prize.',
			dates: 'Dec 2024',
			location: 'Delhi, India'
		},
		{
			title: 'Built 100+ Products',
			description:
				'Developed multiple platforms including AuditBrew, Maltaxplore, Anitix, Onelang, and Track Your Race — showcasing expertise across AI, SaaS, and cross-platform apps.',
			dates: '2020 – 2025',
			location: 'Global (Remote)'
		},
		{
			title: 'Global Recognition',
			description:
				'Received attention from major audit firms and support from Clyde Caruana (Minister of Malta) for Sheetsway’s impact on the audit industry.',
			dates: '2024',
			location: 'Malta'
		},
		{
			title: 'Self-Taught Developer',
			description:
				'Over 8 years of programming experience, mastering React, Next.js, Flutter, AI/ML frameworks (PyTorch, TensorFlow), and cloud platforms (AWS, Azure, GCP).',
			dates: '2016 – Present',
			location: 'Delhi, India'
		}
	]
};
