import { type TProductDescription } from '@/ui/types';
import { formatPrice } from '@/utils';

type ProductListItemDescriptionProps = {
	description: TProductDescription;
};

export const ProductListItemDescription = ({
	description: { category, name, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex flex-col gap-2">
			<h1>{name}</h1>
			<p>{category}</p>
			<p>{formatPrice(price)}</p>
		</div>
	);
};
