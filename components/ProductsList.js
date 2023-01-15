import ProductCard from './ProductCard';

const ProductsList = ({ productEdges }) => {
	return (
		<div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
			<div className='flex items-center justify-between mb-4 md:mb-6'>
				<h2 class='text-gray-800 text-2xl lg:text-3xl font-bold text-center'>
					Our popular products
				</h2>
				<div
					className='text-center text-blue-500 cursor-pointer hover:opacity-75'
					href='#'
				>
					{'View more >'}
				</div>
			</div>
			<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
				{productEdges.map((productEdge) => (
					<ProductCard key={productEdge.node.id} product={productEdge.node} />
				))}
			</div>
		</div>
	);
};

export default ProductsList;
