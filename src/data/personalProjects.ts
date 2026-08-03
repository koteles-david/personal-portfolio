export const personalProjects = [
	{
		title: 'ForxAI Mirror',
		description:
			'A real-time PPE compliance detection system using AI to ensure workers are wearing the correct PPE.',
		link: {
			href: 'https://www.youtube.com/watch?v=cvlajgiYgMw',
			label: 'Watch demo',
		},
		technologies: ['Vue', 'TypeScript', 'HTTP Multipart', 'REST'],
	},
	{
		title: 'Video Vision Platform',
		description:
			'Development of a platform that lets teams build business logic for quality inspection of video streams.',
		link: {
			href: 'https://www.youtube.com/watch?v=TPru8qvmAKc',
			label: 'Watch demo',
		},
		technologies: ['React', 'Vue', 'TypeScript', 'OpenAPI', 'REST', 'Zod', 'WebSockets'],
	},
	{
		title: 'Platform documentation',
		description:
			'Documentation portal for the video-vision platform used to design and operate business logic for stream-based quality inspection.',
		technologies: ['VitePress', 'TypeScript', 'Vue'],
	},
	{
		title: 'Finance tracker',
		description:
			'Personal finance tracker with a focus on simplicity and ease of use.',
		imageSrc: '/overview.png',
		github: 'https://github.com/koteles-david/finance-tracker',
		technologies: ['Vue', 'TypeScript', 'Quasar', 'Electron'],
	},
	{
		title: 'MimiStop',
		description:
			'Find a place with your baby.',
		github: 'https://github.com/koteles-david/mimi-stop',
		technologies: ['Svelte'],
		wip: true,
	},
] as const;
