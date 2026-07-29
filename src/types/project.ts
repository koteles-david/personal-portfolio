export type PersonalProject = {
	title: string;
	description: string;
	imageGradient: string;
	github: string;
	live?: string | null;
	imageSrc?: string;
	technologies: readonly string[];
	wip?: true;
};
