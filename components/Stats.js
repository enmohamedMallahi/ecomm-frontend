import React from 'react';

const Testimonials = () => {
	return (
		<div class='max-w-screen-lg px-4 md:px-8 mx-auto py-8'>
			<div class='grid grid-cols-2 md:grid-cols-4 bg-indigo-500 rounded-lg gap-6 md:gap-8 p-6 md:p-8'>
				<div class='flex flex-col items-center'>
					<div class='text-white text-xl sm:text-2xl md:text-3xl font-bold'>
						200
					</div>
					<div class='text-indigo-200 text-sm sm:text-base'>Products</div>
				</div>

				<div class='flex flex-col items-center'>
					<div class='text-white text-xl sm:text-2xl md:text-3xl font-bold'>
						1500+
					</div>
					<div class='text-indigo-200 text-sm sm:text-base'>Orders</div>
				</div>

				<div class='flex flex-col items-center'>
					<div class='text-white text-xl sm:text-2xl md:text-3xl font-bold'>
						700+
					</div>
					<div class='text-indigo-200 text-sm sm:text-base'>Customers</div>
				</div>

				<div class='flex flex-col items-center'>
					<div class='text-white text-xl sm:text-2xl md:text-3xl font-bold'>
						A couple
					</div>
					<div class='text-indigo-200 text-sm sm:text-base'>of upgrades</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
