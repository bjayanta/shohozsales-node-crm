import axios from "axios";

export const request = async (method: string, path: string, data?: any) => {
    let response: any;
    // req.header('Authorization')

    const config = {
		headers: {
            'Authorization': 'Bearer  token'
		}
	};

    if (method === 'get') response = await axios.get(path, config);

    if (method === 'post') response = await axios.post(path, data, config);

    const result = await response.data;
    
    return result;
}

export const get = async (path: string) => {
    await request('get', path)
}

export const post = async (path: string, data: any) => {
    await request('post', path, data)
}