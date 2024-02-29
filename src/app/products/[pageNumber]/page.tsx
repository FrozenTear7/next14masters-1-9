import { ActiveLink } from '@/ui/atoms/ActiveLink';
import { ProductList } from '@/ui/organisms/ProductList';
import { type TProduct } from '@/ui/types';

export default async function ProductsPage({
	params,
}: {
	params: { pageNumber: string };
}) {
	const pageSize = 20;
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${pageSize}&offset=${pageSize * +params.pageNumber}`,
	);
	const products = (await res.json()) as TProduct[];

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex flex-row justify-center gap-8 pb-10">
				{+params.pageNumber > 1 && (
					<ActiveLink
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-ignore
						href={`/products/${+params.pageNumber - 1}`}
						label="Previous page"
						ariaLabel="pagination"
					/>
				)}
				<ActiveLink
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					href={`/products/${+params.pageNumber + 1}`}
					label="Next page"
					ariaLabel="pagination"
				/>
			</div>
			<ProductList products={products} />
		</main>
	);
}

export async function generateStaticParams() {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products`,
	);
	const products = (await res.json()) as {
		id: string;
		title: string;
	}[];

	return products.map((product) => ({ productId: product.id }));
}
