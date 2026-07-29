export type PersonalProject = {
	title: string;
	description: string;
	imageGradient: string;
	github: string;
	live?: string | null;
	technologies: readonly string[];
	wip?: true;
};
