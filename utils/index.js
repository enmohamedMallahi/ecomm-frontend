export async function storeFront(query, variables = {}) {
	const response = await fetch(
		process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ENDPOINT,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token':
					process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
			},
			body: JSON.stringify({
				query,
				variables,
			}),
		}
	);
	const data = await response.json();
	return data;
}
