import axios from "axios";

export const getUserFromToken = async (token: string|undefined) => {
    const auth_url = process.env.AUTH_URL || ''
    const response = await axios.get(auth_url, {
        headers: {
            'Authorization': token
        }
    });

    const data = await response.data;
    
    return data;
}