import Link from 'next/link';
import { type TProduct } from '@/ui/types';
import { formatPrice } from '@/utils';

type ProductListItemDescriptionProps = {
	product: TProduct;
};

export const ProductListItemDescription = ({
	product: { id, title, category, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex flex-col gap-2">
			<Link href={`/product/${id}`}>
				<h1>{title}</h1>
			</Link>
			<p>{category}</p>
			<p>{formatPrice(price)}</p>
		</div>
	);
};
