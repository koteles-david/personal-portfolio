export type ProjectLink = {
	href: string;
	label: string;
};

export type PersonalProject = {
	title: string;
	description: string;
	imageGradient: string;
	github?: string;
	link?: ProjectLink;
	imageSrc?: string;
	technologies: readonly string[];
	wip?: true;
};
