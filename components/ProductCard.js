import Link from 'next/link';

const ProductCard = ({ product }) => {
	return (
		<Link href={`/product/${product.handle}`} className='group'>
			<div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
				<img
					src={product.images.edges[0].node.src}
					alt={product.images[0]?.alt}
					className='h-full w-full object-cover object-center group-hover:opacity-75'
				/>
			</div>
			<h3 className='mt-4 text-sm text-gray-700'>{product.title}</h3>
			<p className='mt-1 text-lg font-medium text-gray-900'>
				{product.priceRange.minVariantPrice.amount} Dhs
			</p>
		</Link>
	);
};

export default ProductCard;
