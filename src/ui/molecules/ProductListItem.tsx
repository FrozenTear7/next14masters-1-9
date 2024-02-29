import { type TProduct } from '@/ui/types';
import { ProductCoverImage } from '@/ui/atoms/ProductCoverImage';
import { ProductListItemDescription } from '@/ui/atoms/ProductListItemDescription';

type ProductListItemProps = {
	product: TProduct;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<div className="flex flex-col gap-2">
			<ProductCoverImage product={product} />
			<ProductListItemDescription product={product} />
		</div>
	);
};
