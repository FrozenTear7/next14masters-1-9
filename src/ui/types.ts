export type TProductRating = {
	rate: number;
	count: number;
};

export type TProduct = {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	category: string;
	image: string;
	price: number;
	rating: TProductRating;
};
