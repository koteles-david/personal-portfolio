export const personalProjects = [
	{
		title: 'TaskFlow',
		description:
			'A Kanban-style task manager with drag-and-drop boards, real-time sync, and keyboard shortcuts for power users.',
		imageGradient: 'from-indigo-600 via-violet-600 to-fuchsia-600',
		github: 'https://github.com',
		live: 'https://example.com',
		technologies: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
	},
	{
		title: 'WeatherLens',
		description:
			'An interactive weather dashboard with location search, hourly forecasts, and animated data visualizations.',
		imageGradient: 'from-cyan-600 via-blue-600 to-indigo-700',
		github: 'https://github.com',
		live: null,
		technologies: ['Next.js', 'GraphQL', 'Chart.js', 'OpenWeather'],
	},
	{
		title: 'Snippet Vault',
		description:
			'A fast snippet organizer for developers with tagging, syntax highlighting, and one-click copy.',
		imageGradient: 'from-violet-700 via-purple-600 to-pink-600',
		github: 'https://github.com',
		live: 'https://example.com',
		technologies: ['Astro', 'SQLite', 'Rust', 'Tailwind'],
	},
] as const;
