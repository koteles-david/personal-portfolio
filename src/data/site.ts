import { contactLinks } from '@/data/contactLinks';
import myPhoto from '@/assets/my_photo.jpg';

/** Canonical production URL — keep in sync with `site` in astro.config.mjs */
export const siteUrl = 'https://koteles.cz';

export const site = {
	name: 'Dávid Köteleš',
	shortTitle: 'Dávid Köteleš',
	title: 'Dávid Köteleš | Senior Frontend Developer',
	description:
		'Senior Frontend Developer with 5+ years of experience building React, Vue, and TypeScript applications—from architecture and OpenAPI contracts to scalable SPAs and AI-powered web features.',
	jobTitle: 'Senior Frontend Developer',
	locale: 'en_US',
	defaultOgImage: myPhoto.src,
	keywords: [
		'Dávid Köteleš',
		'frontend developer',
		'React developer',
		'TypeScript',
		'Vue',
		'web developer portfolio',
	],
	sameAs: contactLinks
		.filter((link) => link.icon !== 'email')
		.map((link) => link.href),
	email: contactLinks.find((link) => link.icon === 'email')?.href.replace('mailto:', ''),
} as const;

export const resolveSiteUrl = (path = ''): string => {
	const base = import.meta.env.SITE || siteUrl;
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	return new URL(normalizedPath, base).href;
};
