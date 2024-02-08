import { ProductList } from '@/ui/organisms/ProductList';
import { type TProduct } from '@/ui/types';

export default function Home() {
	const products: TProduct[] = [
		{
			id: '1',
			coverImage: {
				src: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F74%2Fdb%2F74db0dddb89cfd9b3a7c1d8c398babb44d9c4682.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
				alt: 'Product 1',
			},
			description: {
				category: 'Category 1',
				name: 'Product 1',
				price: 100,
			},
		},
		{
			id: '2',
			coverImage: {
				src: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F12%2Ff8%2F12f8bc692eebd0717781c6b4552d219aa207e865.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]',
				alt: 'Product 2',
			},
			description: {
				category: 'Category 2',
				name: 'Product 2',
				price: 200,
			},
		},
		{
			id: '3',
			coverImage: {
				src: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6d%2Fa6%2F6da6060b8ec7e95d5f58ab2d046d66cc2481c3b5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]',
				alt: 'Product 3',
			},
			description: {
				category: 'Category 3',
				name: 'Product 3',
				price: 300,
			},
		},
		{
			id: '4',
			coverImage: {
				src: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F35%2Ff7%2F35f73f439f9414faa189d4de0e6506ad21ac7a36.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]',
				alt: 'Product 4',
			},
			description: {
				category: 'Category 4',
				name: 'Product 4',
				price: 400,
			},
		},
	];

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ProductList products={products} />
		</main>
	);
}
