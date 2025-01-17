import axios from 'axios';
import endpoints from '../axios_config/endpoints';

const login = async (username, password) => {
    try {
        const response = await axios.post(
          endpoints.loginEndpoint,
          {
            username,
            password,
          }
        );
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        return response.data.token;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export default login;