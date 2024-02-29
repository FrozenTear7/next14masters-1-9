import { type TProduct } from '@/ui/types';
import { formatPrice } from '@/utils';

type ProductItemProps = {
	product: TProduct;
};

export const ProductItem = ({
	product: { title, category, description, longDescription, price },
}: ProductItemProps) => {
	return (
		<div className="flex flex-col gap-2">
			<h1>{title}</h1>
			<p>{category}</p>
			<p>{description}</p>
			<p>{longDescription}</p>
			<p>{formatPrice(price)}</p>
		</div>
	);
};
