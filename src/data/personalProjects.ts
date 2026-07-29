export const personalProjects = [
	{
		title: 'Finance tracker',
		description:
			'Personal finance tracker with a focus on simplicity and ease of use.',
		imageGradient: 'from-indigo-600 via-violet-600 to-fuchsia-600',
		github: 'https://github.com/koteles-david/finance-tracker',
		technologies: ['React', 'TypeScript', 'Tailwind', 'Electron'],
		wip: true,
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
