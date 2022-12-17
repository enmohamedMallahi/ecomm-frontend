/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
// import { Bars3Icon, XIcon } from '@heroicons/react/outline';

const navigation = [
	{ name: 'Product', href: '#' },
	{ name: 'Features', href: '#' },
	{ name: 'Marketplace', href: '#' },
	{ name: 'Company', href: '#' },
];

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className='isolate bg-white'>
			<div className='px-6 pt-6 lg:px-8'>
				<div>
					<nav
						className='flex h-9 items-center justify-between'
						aria-label='Global'
					>
						<div className='flex lg:min-w-0 lg:flex-1' aria-label='Global'>
							<a href='#' className='-m-1.5 p-1.5'>
								<span className='sr-only'>Ecomm.</span>
								<img
									className='h-8'
									src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
									alt=''
								/>
							</a>
						</div>

						<div className='lg:flex lg:min-w-0 lg:flex-1 lg:justify-end'>
							<a
								href='#'
								className='inline-block rounded px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 transition duration-100 hover:opacity-80'
							>
								Log in
							</a>
						</div>
					</nav>
				</div>
			</div>
			<main className=''>
				<div className='relative px-6 lg:px-8'>
					<div className='mx-auto max-w-3xl py-20'>
						<div>
							<div>
								<h1 className='text-4xl font-bold tracking-tight sm:text-center sm:text-5xl'>
									Data to <span className='text-indigo-700'>enrich</span> your
									online <span className='text-indigo-700'>business</span>
								</h1>
								<p className='mt-6 text-lg leading-8 text-gray-600 sm:text-center'>
									Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
									qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
									occaecat fugiat aliqua.
								</p>
								<div className='mt-8 flex gap-x-4 sm:justify-center'>
									<a
										href='#'
										className='inline-block divide-x divide-indigo-500 rounded bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 transition duration-100 hover:opacity-80 hover:bg-indigo-700 hover:ring-indigo-700'
									>
										<span className='pr-3'>Get Started</span>
										<span className='pl-3'>For Free</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
