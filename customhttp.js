/** 
 * CustomHTTP Library
 * Library for making HTTP requests
 * 
 * @version 1.0.0
 * @author Andrew Barzykin
 * 
 **/

class CustomHTTP {
	//  Make an HTTP GET Request
	async get(url) {
		const response = await fetch(url);
		const resData = await response.json();
		return resData;
	}

	//  Make an HTTP POST Request
	async	post(url, data) {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const resData = await response.json();
		return resData;
	}

	//  Make an HTTP PUT Request
	async	put(url, data) {
		const response = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const resData = await response.json();
		return resData;
	}

	//  Make an HTTP PUT Request
	async	delete(url) {
		const response = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json'
			}
		});

		const resData = await 'User Deleted...';
		return resData;
	}

}