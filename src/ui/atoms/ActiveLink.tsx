'use client';

import { type Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const ActiveLink = ({
	href,
	label,
	className,
	activeClassName,
	matchPartial,
	ariaLabel,
}: {
	href: Route;
	label: string;
	className?: string;
	activeClassName?: string;
	matchPartial?: boolean;
	ariaLabel?: string;
}) => {
	const pathname = usePathname();
	const splitPathname = pathname.split('/');

	const isActive = matchPartial
		? href.startsWith(
				splitPathname.slice(0, splitPathname.length - 1).join('/'),
			)
		: pathname === href;

	return (
		<div {...(ariaLabel && { 'aria-label': ariaLabel })}>
			<Link
				href={href}
				className={isActive ? activeClassName : className}
				{...(isActive && { 'aria-current': true })}
			>
				{label}
			</Link>
		</div>
	);
};
