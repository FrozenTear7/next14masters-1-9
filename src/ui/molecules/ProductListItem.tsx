import { type TProduct } from '@/ui/types';
import { ProductCoverImage } from '@/ui/atoms/ProductCoverImage';
import { ProductListItemDescription } from '@/ui/atoms/ProductListItemDescription';

type ProductListItemProps = {
	product: TProduct;
};

export const ProductListItem = ({
	product: { coverImage, description },
}: ProductListItemProps) => {
	return (
		<div className="flex flex-col gap-2">
			<ProductCoverImage coverImage={coverImage} />
			<ProductListItemDescription description={description} />
		</div>
	);
};
