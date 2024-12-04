export const API_BASE_URL = "http://127.0.0.1:8092";

export const fetchRoot = async () => {
	const response = await fetch(`${API_BASE_URL}/`);
	if (!response.ok) {
		throw new Error("Failed to fetch root data");
	}
	return response.json();
};

export const fetchItem = async (itemId: number, query?: string) => {
	const url = query
		? `${API_BASE_URL}/items/${itemId}?q=${query}`
		: `${API_BASE_URL}/items/${itemId}`;
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Failed to fetch item data");
	}
	return response.json();
};