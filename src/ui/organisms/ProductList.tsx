import { type TProduct } from '@/ui/types';
import { ProductListItem } from '@/ui/molecules/ProductListItem';

type ProductListProps = {
	products: TProduct[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<div data-testid="products-list" className="flex flex-row gap-4">
			{products.map((product) => (
				<li key={product.id} className="flex">
					<ProductListItem product={product} />
				</li>
			))}
		</div>
	);
};
