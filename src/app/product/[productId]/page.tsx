import { type Metadata } from 'next';
import { type TProduct } from '@/ui/types';
import { ProductItem } from '@/ui/atoms/ProductItem';

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${params.productId}`,
	);
	const product = (await res.json()) as {
		title: string;
		description: string;
	};

	return {
		title: product.title,
		description: product.description,
	};
}

export default async function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const res = await fetch(
		'https://naszsklep-api.vercel.app/api/products/' +
			params.productId,
	);
	const product = (await res.json()) as TProduct;

	return (
		<div>
			Product {params.productId}
			<ProductItem product={product} />
		</div>
	);
}
