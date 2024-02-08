export type TProductCoverImage = {
	src: string;
	alt: string;
};

export type TProductDescription = {
	category: string;
	name: string;
	price: number;
};

export type TProduct = {
	id: string;
	coverImage: TProductCoverImage;
	description: TProductDescription;
};
