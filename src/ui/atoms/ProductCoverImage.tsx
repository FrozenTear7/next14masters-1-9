import React from 'react';
import Image from 'next/image';
import { type TProduct } from '@/ui/types';

type ProductCoverImageProps = {
	product: TProduct;
};

export const ProductCoverImage = ({
	product: { title, image },
}: ProductCoverImageProps) => {
	return (
		<Image
			src={image}
			alt={title}
			width={0}
			height={0}
			sizes="100vw"
			style={{ width: 300, height: 'auto' }}
		/>
	);
};
