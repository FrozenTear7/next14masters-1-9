/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*',
			},
		],
	},
	experimental: {
		typedRoutes: true,
	},
	redirects: async () => {
		return [
			{
				source: '/products',
				destination: '/products/1',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
