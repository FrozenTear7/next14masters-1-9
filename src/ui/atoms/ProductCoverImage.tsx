import React from 'react';
import Image from 'next/image';
import { type TProductCoverImage } from '@/ui/types';

type ProductCoverImageProps = {
	coverImage: TProductCoverImage;
};

export const ProductCoverImage = ({
	coverImage: { src, alt },
}: ProductCoverImageProps) => {
	return <Image src={src} alt={alt} width={150} height={150} />;
};
