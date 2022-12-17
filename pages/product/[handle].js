import { useState } from 'react';
import { storeFront } from '../../utils';

export default function ProductDetails({ product }) {
	const variantId = product?.variants.edges[0].node.id;

	console.log(product);

	const [liked, setLiked] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const checkout = async (e) => {
		setIsLoading(!isLoading);
		const { data } = await storeFront(checkoutMutation, { variantId });
		console.log(data);
		const { webUrl } = data.checkoutCreate.checkout;
		window.location.href = webUrl;
	};

	return (
		<div>
			<div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
				<header className='flex justify-between items-center py-4'>
					<a
						href='/'
						className='inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2.5'
						aria-label='logo'
					>
						Ecomm.
					</a>

					<nav className='hidden lg:flex gap-6 items-center'>
						<a
							href='#'
							className='text-gray-600 hover:text-indigo-500 active:text-indigo-700  font-semibold transition duration-100'
						>
							Home
						</a>
						<a
							href='#'
							className='text-gray-600 hover:text-indigo-500 active:text-indigo-700  font-semibold transition duration-100'
						>
							Products
						</a>
						<a
							href='#'
							className='text-gray-600 hover:text-indigo-500 active:text-indigo-700  font-semibold transition duration-100'
						>
							About
						</a>
						<a
							href='#'
							className='text-gray-600 hover:text-indigo-500 active:text-indigo-700  font-semibold transition duration-100'
						>
							Contact{' '}
						</a>
						<a
							href='#'
							className='inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-4 py-2'
						>
							Sign up
						</a>
					</nav>

					<button
						type='button'
						className='inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clipRule='evenodd'
							/>
						</svg>
						Menu
					</button>
				</header>
			</div>
			<div className='max-w-screen-lg py-8 px-4 md:px-8 mx-auto'>
				<div className='grid md:grid-cols-2 gap-8'>
					<div className='space-y-4'>
						<div className='bg-gray-100 rounded-lg overflow-hidden'>
							<img
								src={product?.images.edges[0].node.src}
								loading='lazy'
								alt='Photo by Himanshu Dewangan'
								className='w-full h-full md:h-[30rem] object-cover object-center'
							/>
						</div>
					</div>

					<div className='py-8'>
						<div className='mb-2'>
							{/* <span className="inline-block text-gray-500 mb-0.5">Fancy Brand</span> */}
							<h2 className='text-gray-800 text-2xl lg:text-3xl font-bold'>
								{product?.title}
							</h2>
						</div>

						<div className='mb-4'>
							<h3 className='sr-only'>Description</h3>

							<div className='space-y-6'>
								<p className='text-base leading-4 h-16  overflow-hidden text-gray-900'>
									{product?.description}
								</p>
							</div>
						</div>

						<div className='mb-2'>
							<div className='mb-4 md:mb-6'>
								<span className='inline-block text-gray-500 text-sm md:text-base font-semibold mb-3'>
									Color
								</span>

								<div className='flex flex-wrap gap-2'>
									<span className='w-8 h-8 bg-gray-800 border ring-2 ring-offset-1 ring-gray-800 rounded-full transition duration-100'></span>
									<button
										type='button'
										className='w-8 h-8 bg-gray-500 border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100'
									></button>
									<button
										type='button'
										className='w-8 h-8 bg-gray-200 border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100'
									></button>
									<button
										type='button'
										className='w-8 h-8 bg-white border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100'
									></button>
								</div>
							</div>

							<div className='mb-8 md:mb-10'>
								<span className='inline-block text-gray-500 text-sm md:text-base font-semibold mb-3'>
									Size
								</span>

								<div className='flex flex-wrap gap-3'>
									<button
										type='button'
										className='w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100'
									>
										XS
									</button>
									<button
										type='button'
										className='w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100'
									>
										S
									</button>
									<span className='w-12 h-8 flex justify-center items-center bg-indigo-500 text-white text-sm font-semibold text-center border border-indigo-500 rounded-md cursor-default'>
										M
									</span>
									<button
										type='button'
										className='w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100'
									>
										L
									</button>
									<span className='w-12 h-8 flex justify-center items-center bg-white text-gray-400 text-sm font-semibold text-center border border-transparent rounded-md cursor-not-allowed'>
										XL
									</span>
								</div>
							</div>

							{/* <div className='mb-4'>
								<div className='flex items-end gap-2'>
									<span className='text-gray-800 text-xl md:text-2xl font-bold'>
										{product.priceRange.minVariantPrice.amount} Dhs
									</span>
									<span className='text-red-500 line-through mb-0.5'>$30.00</span>
								</div>
							</div> */}

							<div className='flex gap-2.5'>
								<button
									onClick={checkout}
									disabled={isLoading}
									href='#'
									className={`inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-6 py-3 ${
										isLoading && 'opacity-75 cursor-not-allowed'
									}`}
								>
									{isLoading ? (
										<svg
											className='animate-spin -ml-1 h-5 w-5 text-white'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
										>
											<circle
												className='opacity-25'
												cx='12'
												cy='12'
												r='10'
												stroke='currentColor'
												strokeWidth='4'
											></circle>
											<path
												className='opacity-75'
												fill='currentColor'
												d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
											></path>
										</svg>
									) : (
										<span>
											Pay {product?.priceRange.minVariantPrice.amount} Dhs
										</span>
									)}
								</button>

								<a
									onClick={(e) => setLiked(!liked)}
									href='#'
									className='inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-4 py-3'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className={`w-6 h-6 ${liked && 'fill-pink-500'}`}
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>
					{/* <div className='mt-10'>
					<div className='text-gray-800 text-lg font-semibold mb-3'>
						Description
					</div> */}

					{/* <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} /> */}
				</div>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const { data } = await storeFront(productsQuery);
	// console.log('d', data);:
	const paths = data.products.edges.map((product) => ({
		params: { handle: product.node.handle },
	}));

	return {
		paths: [...paths],
		fallback: true,
	};
}

export const getStaticProps = async (ctx) => {
	const { data } = await storeFront(singleProductQuery, {
		handle: ctx.params.handle,
	});

	return {
		props: {
			product: data.productByHandle,
		},
	};
};

const gql = String.raw;

const singleProductQuery = gql`
	query SingleProduct($handle: String!) {
		productByHandle(handle: $handle) {
			id
			title
			updatedAt
			tags
			description
			images(first: 1) {
				edges {
					node {
						src
						altText
						id
					}
				}
			}
			priceRange {
				minVariantPrice {
					amount
				}
			}
			variants(first: 1) {
				edges {
					node {
						id
					}
				}
			}
		}
	}
`;

const productsQuery = gql`
	{
		products(first: 6) {
			edges {
				node {
					handle
				}
			}
		}
	}
`;

const checkoutMutation = gql`
	mutation CheckoutCreate($variantId: ID!) {
		checkoutCreate(
			input: { lineItems: { variantId: $variantId, quantity: 1 } }
		) {
			checkout {
				webUrl
			}
		}
	}
`;
