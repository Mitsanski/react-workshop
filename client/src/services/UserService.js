const baseURL = "http://localhost:3030/jsonstore/users";

export default {
	async getAll() {
		const response = await fetch(baseURL);
		const result = await response.json();
		const users = Object.values(result);

		return users;
	},
	async create(userData) {
		const response = await fetch(baseURL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(userData)
		});

		const result = await response.json();
		return result;
	}
};
