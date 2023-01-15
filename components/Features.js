import React from 'react';

const Features = () => {
	return (
		<div class='max-w-4xl px-4 md:px-8 py-8 mx-auto'>
			<div class='mb-10 md:mb-16'>
				<h2 class='text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6'>
					Our competitive advantage
				</h2>

				<p class='max-w-screen-md text-gray-500 md:text-lg text-center mx-auto'>
					Our ecommerce store offers several competitive advantages, including:
				</p>
			</div>

			<div class='grid sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16'>
				<div class='flex flex-col items-center'>
					<div class='w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='w-full h-full'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
							/>
						</svg>
					</div>

					<h3 class='text-lg md:text-xl font-semibold text-center mb-2'>
						Affordable prices
					</h3>
					<p class='text-gray-500 text-center mb-2'>
						Our ecommerce store offers budget-friendly clothing for all. Shop
						our regular sales and promotions for great deals on the latest
						styles.
					</p>
				</div>

				<div class='flex flex-col items-center'>
					<div class='w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='w-full h-full'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M13 10V3L4 14h7v7l9-11h-7z'
							/>
						</svg>
					</div>

					<h3 class='text-lg md:text-xl font-semibold text-center mb-2'>
						Regular sales and promotions
					</h3>
					<p class='text-gray-500 text-center mb-2'>
						Regular sales and promotions on our wide selection of clothing for
						all. Check back for discounts on your favorite styles.
					</p>
				</div>

				<div class='flex flex-col items-center'>
					<div class='w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='w-full h-full'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
							/>
						</svg>
					</div>

					<h3 class='text-lg md:text-xl font-semibold text-center mb-2'>
						Personalized styling
					</h3>
					<p class='text-gray-500 text-center mb-2'>
						Personalized styling service to help you find the perfect outfit.
						Sign up for expert fashion recommendations and inspiration.
					</p>
				</div>

				<div class='flex flex-col items-center'>
					<div class='w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='w-full h-full'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
							/>
						</svg>
					</div>

					<h3 class='text-lg md:text-xl font-semibold text-center mb-2'>
						Regular updates
					</h3>
					<p class='text-gray-500 text-center mb-2'>
						Regularly updated inventory with new fashion trends. Check back
						frequently for the latest styles.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Features;
