export const personalProjects = [
	{
		title: 'Finance tracker',
		description:
			'Personal finance tracker with a focus on simplicity and ease of use.',
		imageGradient: 'from-indigo-600 via-violet-600 to-fuchsia-600',
		imageSrc: '/overview.png',
		github: 'https://github.com/koteles-david/finance-tracker',
		technologies: ['Vue', 'TypeScript', 'Quasar', 'Electron'],
	},
	{
		title: 'MimiStop',
		description:
			'Find a place with your baby.',
		imageGradient: 'from-cyan-600 via-blue-600 to-indigo-700',
		github: 'https://github.com/koteles-david/mimi-stop',
		live: null,
		technologies: ['Svelte'],
		wip: true,
	},
] as const;
