import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/index.css';
import Link from 'next/link';
import { ActiveLink } from '@/ui/atoms/ActiveLink';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Products',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav>
					<ul className="flex flex-row justify-center gap-8 bg-slate-900 p-4">
						<li>
							<ActiveLink
								href="/"
								label="Homepage"
								activeClassName="underline"
							/>
						</li>
						<li>
							<ActiveLink
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								// @ts-ignore
								href="/products/1"
								matchPartial
								label="All"
								activeClassName="underline"
							/>
						</li>
					</ul>
				</nav>
				{children}
				<footer>
					<p>
						Project made by{' '}
						<Link
							href="https://github.com/FrozenTear7"
							target="_blank"
						>
							Paweł Mendroch
						</Link>
					</p>
				</footer>
			</body>
		</html>
	);
}
